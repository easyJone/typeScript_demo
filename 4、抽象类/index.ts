(function () {

  // abstract: 创建抽象类/基类，无法被实例化
  abstract class Animal {
    name: string
    // 抽象属性：只能定义在抽象类中，子类必须重写
    abstract age: number

    constructor(name: string) {
      this.name = name
    }

    // 抽象方法： 只能定义在抽象类中，子类必须重写
    abstract sayHello (): void
  }

  class Dog extends Animal {
    age: number

    constructor(name: string, age: number) {
      super(name)
      this.age = age
    }

    sayHello () {
      console.log('汪汪汪！')
    }
  }

  class Cat extends Animal {
    age: number

    constructor(name: string, age: number) {
      super(name)
      this.age = age
    }

    sayHello () {
      console.log('喵喵喵')
    }
  }

  // const animal = new Animal('animal')
  // console.log(animal)

  const dog = new Dog('旺财', 3)
  console.log(dog)

  const cat = new Cat('十四', 4)
  console.log(cat)

})()