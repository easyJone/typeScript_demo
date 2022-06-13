var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function () {
    // abstract: 创建抽象类/基类，无法被实例化
    var Animal = /** @class */ (function () {
        function Animal(name) {
            this.name = name;
        }
        return Animal;
    }());
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog(name, age) {
            var _this = _super.call(this, name) || this;
            _this.age = age;
            return _this;
        }
        Dog.prototype.sayHello = function () {
            console.log('汪汪汪！');
        };
        return Dog;
    }(Animal));
    var Cat = /** @class */ (function (_super) {
        __extends(Cat, _super);
        function Cat(name, age) {
            var _this = _super.call(this, name) || this;
            _this.age = age;
            return _this;
        }
        Cat.prototype.sayHello = function () {
            console.log('喵喵喵');
        };
        return Cat;
    }(Animal));
    // const animal = new Animal('animal')
    // console.log(animal)
    var dog = new Dog('旺财', 3);
    console.log(dog);
    var cat = new Cat('十四', 4);
    console.log(cat);
})();
