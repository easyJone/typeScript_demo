(function () {
    // 属性修饰符
    // public: 默认值，修饰的属性可以在任意位置访问
    // private: 私有属性，只能在当前类内部访问修改
    // protected: 受保护属性，只能在当前类和当前类的子类中访问
    // get: 读取属性
    // set: 设置属性
    var Animal = /** @class */ (function () {
        // private _name: string
        // constructor(name: string) {
        //   this._name = name
        // }
        // 简化写法：
        function Animal(_name) {
            this._name = _name;
        }
        Object.defineProperty(Animal.prototype, "name", {
            get: function () {
                return this._name;
            },
            set: function (value) {
                this._name = value;
            },
            enumerable: false,
            configurable: true
        });
        return Animal;
    }());
    var a = new Animal('张三');
    console.log(a);
    a.name = '李四';
    console.log(a);
})();
