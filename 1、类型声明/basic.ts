// 声明变量同时指定类型
let a: number;
let b: string;

// 声明变量直接赋值
let c: boolean = true
c = false

// 如果变量声明和赋值是同时进行，ts自动类型检测
let d = '123'
d = ''

// 函数参数/返回类型定义
function sum (a: number, b: number): number {
  return a + b
}
const e = sum(1, 2)