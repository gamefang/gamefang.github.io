# -*- coding: utf-8 -*-

import re

def linefeeder(fp,rule):
    '''
    给md文件每行末尾添加俩空格，用于换行
    跳过代码段、节、列表等
    ^[-#*]+ |^[1234567890]+. |.*\|.*
    ^[-#*]+ : 以-#*加一空格开头
    ^[1234567890]+. : 以数字加.空格开头
    .*\|.*: 表格
    '''
    with open(fp,'r',encoding='utf-8') as f:
        contents = f.readlines()
    result = ''
    goon = False
    for line in contents:
        line = line.rstrip()
        if line.startswith('```'):
            goon = not goon
            result += f'{line}\n'
            continue
        if not line or goon or rule.match(line):
            result += f'{line}\n'
        else:
             result += f'{line}  \n'   
        # print(goon,line)
    with open(fp,'w',encoding='utf-8') as f:
        f.write(result)    

if __name__ == '__main__':
    rule = re.compile('^[-#*]|^[1234567890]+. |.*\|.*|layout:|title:|tags:')
    linefeeder(r'_posts/literature/2019-10-31-火器匠人.md',rule)
