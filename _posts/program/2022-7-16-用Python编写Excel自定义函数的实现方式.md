---
title: 用Python编写Excel自定义函数的实现方式
key: 220716
tags: 程序
show_title: false
---

# 用Python编写Excel自定义函数的实现方式

## 1. 工具准备
- LibreOffice
    - 下载：https://www.libreoffice.org/download/download/
    - 本文主要目的为推荐LibreOffice，这是一款能兼容、替代并且超越微软Office的办公软件，详情不在此赘述。
    - **LibreOffice中的`Calc`对等于Office的`Excel`**，在兼容几乎全部Excel功能的基础上，对宏语言的支持添加了JavaScript、Python几种。
    - Calc的基础宏语言仍然是Basic，通过本文方法桥接之后，可实现Python自定义函数的随写随用。
- Python
    - 下载：https://www.python.org/downloads/
    - 无须赘述，与Basic、JavaScript相比，能用Python肯定用Python。
    - LibreOffice有扩展能添加Python的开发环境，会更便捷，而本文默认以原生形态进行Python开发。
    - LibreOffice自带Python环境，理论上不装Python环境，用笔记本硬写代码也无问题，此处安装主要目的是方便测试。

## 2. 创建桥接
### 2.1 Basic脚本
- 打开Calc，按顺序点开菜单：Tools -> Macros -> Edit Macros...
- 会打开LibreOffice Basic界面，类似Excel的开发工具（VBA）界面。
- 在此界面点开菜单：Tools -> Select Module
- 点击New，新建一个New Module，名为PythonBridge（任意名称），点击Edit
- 此时左侧显示的路径，新的Basic脚本应位于My Macros & Dialogs/Standard/PythonBridge
- 在右侧代码中直接粘贴以下内容，用于实现Python脚本的桥接。桥接一次创建，终身有效。（此处代码参考：[此回答](https://stackoverflow.com/questions/7591656/how-can-i-call-a-python-macro-in-a-cell-formula-in-openoffice-org-calc)）

```basic
' 用于桥接python脚本的basic语言模块，注册后可实现python自定义函数

REM Keep a global reference to the ScriptProvider, since this stuff may be called many times: 
Global g_MasterScriptProvider as Object
REM Specify location of Python script, providing cell functions: 
Const URL_Main as String = "vnd.sun.star.script:" 
Const URL_Args as String = "?language=Python&location=user" 

Function invokePyFunc(file AS String, func As String, args As Array, outIdxs As Array, outArgs As Array)
   sURL = URL_Main & file & ".py$" & func & URL_Args
   oMSP = getMasterScriptProvider()
   On Local Error GoTo ErrorHandler
      oScript = oMSP.getScript(sURL)
      invokePyFunc = oScript.invoke(args, outIdxs, outArgs)
      Exit Function
   ErrorHandler:
      Dim msg As String, toFix As String
      msg = Error$
      toFix = ""
      If 1 = Err AND InStr(Error$, "an error occurred during file opening") Then
         msg = "Couldn' open the script file."
         toFix = "Make sure the 'python' folder exists in the user's Scripts folder, and that the former contains " & file & ".py."
      End If
      MsgBox msg & chr(13) & toFix, 16, "Error " & Err & " calling " & func
end Function

Function getMasterScriptProvider() 
   if isNull(g_MasterScriptProvider) then 
      oMasterScriptProviderFactory = createUnoService("com.sun.star.script.provider.MasterScriptProviderFactory") 
      g_MasterScriptProvider = oMasterScriptProviderFactory.createScriptProvider("") 
   endif 
   getMasterScriptProvider = g_MasterScriptProvider
End Function

' -----------------------------------------------------------------
```

### 2.2 Python脚本
- 首先进入Python脚本的存放位置，通常位于（Windows）：
    - ...Users\XXXX\AppData\Roaming\LibreOffice\4\user\Scripts\python\
    - 如Scripts\python文件夹不存在，自行创建即可。
- 在此文件夹中编写Python脚本`test.py`，示例如下：

```py
def func_test(v):
    return v*2
```

- 测试脚本的正确性，保存即可。

### 2.3 自定义函数注册
- 返回Calc，通过宏进入LibreOffice Basic界面，打开Basic脚本PythonBridge。
- 注册Python自定义函数，模版如下：
    - py_fn为Python脚本的文件名，无须後缀
    - Basic中的Function名，为Calc中实际使用的公式名
    - invokePyFunc的第二个参数，填写选定Python脚本中的函数名
    - 综上，仅需注册文件名及函数名，参数不用考虑

```basic
' 配置项：python脚本的名称
Const py_fn as String = "test"

' 注册python函数为basic函数，从而可在自定义函数中使用
Function func_test(value)	' 修改项1：函数、返回值的名称(func_test)等于自定义函数的名称
    func_test = invokePyFunc(py_fn, "func_test", Array(value), Array(), Array())	' 修改项2：参数2("func_test")为python中的函数名
End Function
```

- 如需查看Basic代码的文件，可进入如下位置：
    - ...Users\XXXX\AppData\Roaming\LibreOffice\4\user\basic\Standard\PythonBridge.xba
    - xba是xml化的Basic格式，如导入导出Basic源代码，可使用LibreOffice Basic中的相关功能。

### 2.4 使用
- 进入Calc，使用方法与内置函数完全相同。如在单元格内输入：=FUNC_TEST(2)，则返回值为4。
- 以上方法的自定义函数，可在本地Calc的任意文件中随时使用。在其它电脑或使用Excel的条件下，会变为名称错误，如需传递可提前粘贴为数值。