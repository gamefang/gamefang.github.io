---
title: Python本地模块路径交叉import完美解决方案
key: 250706
tags: 程序
show_title: false
---

# Python本地模块路径交叉import完美解决方案

## 问题分析
- 个人项目会使用一些杂七杂八脚本组成的本地库，可能的特点
    - 上层、下层、同层脚本均可能发生相互import
    - 可能有主脚本，但主脚本也未必在项目根目录
    - 每个脚本实际各有用途，均需要能够单独运行
- 遇到的问题
    - vscode中依靠pylance能识别import，但运行时会各种报错：ModuleNotFoundError
    - bat文件执行时也会出现同样问题
    - 尝试在.vscode文件夹中添加设置，但仅能确保vscode中F5运行无问题，右键Run Python in Terminal以及bat脚本仍然不行
    - 尝试代码内添加类似如下内容，实际能解决问题，但脚本过于冗余

    ```python
    # 路径设置
    ROOT_DISTANCE = 3   # 距离根目录文件夹层级(需手动维护)
    import sys
    from pathlib import Path
    root = str(Path(__file__).parents[ROOT_DISTANCE-1].resolve())
    if root not in sys.path: sys.path.insert(0, root)
    ```

- 问题解决
    - 实际问题的关键点是明确项目的根目录位置
    - 【要求】所有python脚本的import全部使用绝对import，即以项目根目录为起始的包路径
    - 以下为各环境下的详细解决方案

## VSCode
- 仅需一次性设置，可解决vscode中的全部问题
- 在vscode中搜索找到`settings.json`
- 一次性添加以下配置即可

```JSON
    "terminal.integrated.env.windows": {
        "PYTHONPATH": "${workspaceFolder}"
    },
    "terminal.integrated.env.linux": {
        "PYTHONPATH": "${workspaceFolder}"
    },
    "terminal.integrated.env.osx": {
        "PYTHONPATH": "${workspaceFolder}"
    }
```

## bat
- 使用场景：运行非项目根目录下的python，且此脚本import了项目下的其他脚本
- 需要在每个符合使用场景的脚本中额外处理，指定临时pythonpath
- 示例bat，路径为`folder1/folder2/test.bat`

```bat
@echo off

cd ..
cd ..
set "PYTHONPATH=%CD%"
@REM echo PYTHONPATH set to: %PYTHONPATH%
python folder1/folder2/test.py

pause
```

## sh
- 同时适用于win和linux环境的shell脚本
    - win直接双击使用（需要git）
    - linux需要先`chmod +x ./xxx.sh`

```sh
#!/bin/bash
# run on linux:
# chmod +x ./easyhttp.sh
# ./easyhttp.sh

cd ..

export PYTHONPATH="$PWD"
echo "$PWD"
python ./server/easyhttp.py

echo "Press any key to exit..."
read -n 1
```