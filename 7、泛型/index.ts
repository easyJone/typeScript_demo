(function () {
  // 在定义函数/类时，如果遇到类型不明确，可以使用泛型
  // 定义a类型为泛型<T>
  function fn<T> (a: T): T {
    return a
  }
  fn(123) // 不指定泛型，ts会自动检测
  fn<string>('123') // 指定泛型，推荐
  fn<boolean>(false)

  // 指定多个泛型
  function fn2<S, N> (a: S, b: N): S {
    return a
  }
  fn2<string, number>('今年', 18)

  // let b: <X>(sth: X) => X = fn

  // 泛型约束
  interface myInter {
    length: number
  }
  // 泛型T必须是myInter的实现类
  function getLength<T extends myInter> (a: T): number {
    return a.length
  }
  getLength<string>('123')
  getLength<number[]>([1, 2, 3])
  getLength<Array<number>>([1, 2, 3])

  // 类中的泛型
  class MyClass<T> {
    name: T
    constructor(name: T) {
      this.name = name
    }
  }
  const mc = new MyClass<string>('张三')

})()