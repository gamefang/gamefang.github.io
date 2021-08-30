---
title: Python向CSharp笔记
key: 210830
tags: 程序
show_title: false
---

# Python向CSharp笔记

## 编译打包
- 编写最简单程序`test.cs`，如下：

```cs
using System;

public class Test
{
	static void Main()
	{
		Console.WriteLine("Hello");
		Console.ReadLine();	// 控制台输出不自动关闭
	}
}
```

- 配置**环境变量**，添加`csc.exe`，通常位于`C:\Windows\Microsoft.NET\Framework64\v4.0.30319`

- 执行**cmd**，获得`test.exe`

```
csc test.cs
```
