import { a } from './m1'

function sum (a: number, b: number): number {
  return a + b
}
const b = { name: '哈哈', age: 33 }
b.age = 12
console.log(sum(1, 2))
console.log(a)
console.log(b)
console.log(Promise)