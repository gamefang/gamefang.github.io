// 加入此腳本，可實現搜索時簡繁體混用

'use strict';

{{ $searchDataFile := printf "%s.search-data.json" .Language.Lang }}
{{ $searchData := resources.Get "search-data.json" | resources.ExecuteAsTemplate $searchDataFile . | resources.Minify | resources.Fingerprint }}
{{ $searchConfig := i18n "bookSearchConfig" | default "{}" }}

(function () {
  const searchDataURL = '{{ partial "docs/links/resource-precache" $searchData }}';
  const indexConfig = Object.assign({{ $searchConfig }}, {
    includeScore: true,
    useExtendedSearch: true,
    fieldNormWeight: 1.5,
    threshold: 0.2,
    ignoreLocation: true,
    keys: [
      {
        name: 'title',
        weight: 0.7
      },
      {
        name: 'content',
        weight: 0.3
      },
      {
        name: 'titleAlt',
        weight: 0.7
      },
      {
        name: 'contentAlt',
        weight: 0.3
      }
    ]
  });

  const input = document.querySelector('#book-search-input');
  const results = document.querySelector('#book-search-results');

  if (!input) {
    return
  }

  // 简繁体转换器（延迟加载）
  let cn2tConverter = null;
  let t2cnConverter = null;
  let openccLoaded = false;

  // 加载opencc-js库
  function loadOpenCC() {
    if (openccLoaded) {
      return Promise.resolve();
    }
    
    return new Promise((resolve, reject) => {
      // 检查是否已经加载
      if (typeof OpenCC !== 'undefined') {
        openccLoaded = true;
        initConverters();
        resolve();
        return;
      }

      // 动态加载opencc-js (使用CDN)
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/opencc-js@1.0.5/dist/umd/full.js';
      script.async = true;
      script.onload = () => {
        openccLoaded = true;
        initConverters();
        resolve();
      };
      script.onerror = () => {
        console.warn('Failed to load opencc-js, falling back to normal search');
        openccLoaded = false;
        resolve(); // 即使加载失败也继续，只是没有简繁体转换功能
      };
      document.head.appendChild(script);
    });
  }

  // 初始化转换器
  function initConverters() {
    if (typeof OpenCC === 'undefined') {
      return;
    }
    try {
      // 简体转繁体
      cn2tConverter = OpenCC.Converter({ from: 'cn', to: 'tw' });
      // 繁体转简体
      t2cnConverter = OpenCC.Converter({ from: 'tw', to: 'cn' });
    } catch (e) {
      console.warn('Failed to initialize OpenCC converters:', e);
    }
  }

  // 转换文本（简体<->繁体）
  function convertText(text, toTraditional) {
    if (!openccLoaded || !cn2tConverter || !t2cnConverter) {
      return text;
    }
    try {
      const converter = toTraditional ? cn2tConverter : t2cnConverter;
      return converter(text) || text;
    } catch (e) {
      return text;
    }
  }

  // 生成搜索查询的所有变体（简体、繁体、原始）
  function generateSearchQueries(query) {
    const queries = [query]; // 包含原始查询
    
    if (openccLoaded && cn2tConverter && t2cnConverter) {
      try {
        // 尝试转换为繁体
        const traditional = cn2tConverter(query);
        if (traditional && traditional !== query) {
          queries.push(traditional);
        }
        
        // 尝试转换为简体
        const simplified = t2cnConverter(query);
        if (simplified && simplified !== query) {
          queries.push(simplified);
        }
      } catch (e) {
        // 转换失败，使用原始查询
      }
    }
    
    // 去重并过滤空字符串
    return [...new Set(queries)].filter(q => q && q.trim().length > 0);
  }

  // 为搜索数据添加简繁体转换字段
  function enhanceSearchData(pages) {
    if (!openccLoaded || !cn2tConverter || !t2cnConverter) {
      return pages;
    }

    return pages.map(page => {
      const enhanced = { ...page };
      try {
        // 为title添加转换版本
        if (page.title) {
          // 尝试转换为繁体
          const titleTrad = cn2tConverter(page.title);
          // 尝试转换为简体
          const titleSimp = t2cnConverter(page.title);
          
          // 如果转换结果和原文本不同，说明原文本是另一种形式
          // 我们选择转换结果和原文本不同的那个作为Alt版本
          if (titleTrad && titleTrad !== page.title) {
            enhanced.titleAlt = titleTrad;
          } else if (titleSimp && titleSimp !== page.title) {
            enhanced.titleAlt = titleSimp;
          }
        }
        // 为content添加转换版本
        if (page.content) {
          // 尝试转换为繁体
          const contentTrad = cn2tConverter(page.content);
          // 尝试转换为简体
          const contentSimp = t2cnConverter(page.content);
          
          // 如果转换结果和原文本不同，说明原文本是另一种形式
          if (contentTrad && contentTrad !== page.content) {
            enhanced.contentAlt = contentTrad;
          } else if (contentSimp && contentSimp !== page.content) {
            enhanced.contentAlt = contentSimp;
          }
        }
      } catch (e) {
        // 转换失败，使用原始数据
      }
      return enhanced;
    });
  }

  input.addEventListener('focus', init);
  input.addEventListener('keyup', search);

  document.addEventListener('keypress', focusSearchFieldOnKeyPress);

  /**
   * @param {Event} event
   */
  function focusSearchFieldOnKeyPress(event) {
    if (event.target.value !== undefined) {
      return;
    }

    if (input === document.activeElement) {
      return;
    }

    const characterPressed = String.fromCharCode(event.charCode);
    if (!isHotkey(characterPressed)) {
      return;
    }

    input.focus();
    event.preventDefault();
  }

  /**
   * @param {String} character
   * @returns {Boolean} 
   */
  function isHotkey(character) {
    const dataHotkeys = input.getAttribute('data-hotkeys') || '';
    return dataHotkeys.indexOf(character) >= 0;
  }

  async function init() {
    input.removeEventListener('focus', init); // init once
    input.required = true;

    // 加载opencc-js
    await loadOpenCC();

    try {
      const response = await fetch(searchDataURL);
      let pages = await response.json();
      
      // 增强搜索数据（添加简繁体转换字段）
      pages = enhanceSearchData(pages);
      
      window.bookSearchIndex = new Fuse(pages, indexConfig);
    } catch (e) {
      console.error('Failed to load search data:', e);
    } finally {
      input.required = false;
      search(); // 如果输入框有值，立即搜索
    }
  }

  function search() {
    while (results.firstChild) {
      results.removeChild(results.firstChild);
    }

    if (!input.value) {
      return;
    }

    if (!window.bookSearchIndex) {
      return;
    }

    const query = input.value.trim();
    if (!query) {
      return;
    }

    // 生成所有搜索查询变体
    const searchQueries = generateSearchQueries(query);
    
    // 对所有查询变体进行搜索并合并结果
    const allResults = new Map();
    
    searchQueries.forEach(searchQuery => {
      const searchHits = window.bookSearchIndex.search(searchQuery).slice(0, 10);
      searchHits.forEach(function (hit) {
        const itemId = hit.item.id || hit.item.href;
        // 如果这个结果还没有，或者这个结果的分数更好，就保存它
        if (!allResults.has(itemId) || 
            (allResults.has(itemId) && hit.score < allResults.get(itemId).score)) {
          allResults.set(itemId, hit);
        }
      });
    });

    // 将结果转换为数组并按分数排序
    const sortedResults = Array.from(allResults.values())
      .sort((a, b) => a.score - b.score)
      .slice(0, 10);

    // 显示结果
    sortedResults.forEach(function (page) {
      const li = element('<li><a href></a><small></small></li>');
      const a = li.querySelector('a'), small = li.querySelector('small');

      a.href = page.item.href;
      a.textContent = page.item.title;
      small.textContent = page.item.section;

      results.appendChild(li);
    });
  }

  /**
   * @param {String} content
   * @returns {Node}
   */
  function element(content) {
    const div = document.createElement('div');
    div.innerHTML = content;
    return div.firstChild;
  }
})();