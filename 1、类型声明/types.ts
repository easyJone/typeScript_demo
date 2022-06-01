// 字面量类型
let aa: 'male'
aa = 'male'

// 联合类型
let bb: string | boolean
bb = 'male'
bb = false

// any 会污染别人
let cc: any // 显式any
cc = 1
cc = '1'
cc = false

let dd // 隐式any
dd = 10
dd = '12'

let a1: string
a1 = cc // a1类型被cc的any类型污染

// unknown 只污染自己，实际是一个类型安全的any,不能直接赋值给其他变量
let ee: unknown
ee = 10
ee = false

let a2: string
ee = '2'
// a2 = ee // 类型校验不通过

/**
 * 类型断言，可以用来告诉解析器变量的实际类型
 * 语法：
 * 1、ee as string
 * 2、<string>ee
 */
ee = '22'
a2 = ee as string // 明示ee类型
a2 = <string>ee // 明示ee类型

// void: 无返回值
function fn (): void { }

// never: 表示永远不会返回结果
function fn1 (): never {
  throw new Error('报错了')
}

// object
let aaa: object
aaa = {}
aaa = function () { }

/**
 * 普通对象
 * {}用来指定对象中可以包含哪些属性
 * ?: 表示可选
 * [propName: string]: any: 表示任意类型的属性
 */
let bbb: { name: string, age?: number }
bbb = { name: '哈哈' }

let ccc: { name: string, [propName: string]: any }
ccc = { name: '哈哈', a: 1, b: '2' }

// 函数结构的类型声明
let ddd: (a: number, b: number, c: number) => number
ddd = function (n1, n2) {
  return n1 + n2
}

// array: string[] | Array<number>
let eee: string[]
eee = ['1', '2']

let fff: Array<number>
fff = [1, 2]

// tuple: 元组（固定长度的数组）
let ggg: [string, number]
ggg = ['1', 2]

// enum: 枚举
enum Gender {
  male,
  female
}
let hhh: { name: string, gender: Gender }
hhh = {
  name: '哈哈',
  gender: Gender.male
}
console.log(hhh.gender === Gender.male)

// &: 同时满足
let iii: { name: string } & { age: number }
iii = { name: '1', age: 12 }

// 类型别名
type myType = string | number | boolean
let jjj: myType
jjj = false
