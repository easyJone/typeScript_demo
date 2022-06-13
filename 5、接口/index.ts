(function () {

  type myType = {
    name: string,
    age: number
  }
  const obj1: myType = {
    name: 'aaa',
    age: 1
  }

  // interface: 定义接口,可重复定义同名接口
  interface myInterface {
    name: string,
    age: number,
    aaa (): void
  }
  interface myInterface {
    gender: string
  }
  const obj2: myInterface = {
    name: 'bbb',
    age: 2,
    gender: '4',
    aaa: () => { }
  }


  // 接口中所有属性/方法都为抽象属性/方法
  // 接口只定义对象的结构，所有属性都不能有实际的值
  interface myInter {
    name: string,
    sayHello (): void
  }
  // 定义类时，可以使类去实现一个接口，实现接口就是使类满足接口的要求
  class MyClass implements myInter {
    name: string
    constructor(name) {
      this.name = name
    }

    sayHello (): void {
      console.log('hello')
    }

  }

  const a = new MyClass('小明')





})()