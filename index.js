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
/* Variable Types*/
var username = "kalaivanan";
var age = 300;
var isDeveloper = true;
var skills = ["Javascript", "TypeScript"];
/* Functions in TypeScript */
function add(a, b) {
    return a + b;
}
console.log(add(57, 10));
/*  Arrow function */
var multiply = function (x, y) { return x * y; };
console.log(multiply(10, 5));
var user1 = { id: 1, name: "KalaiVanan", email: "kalaivkv24@gmail.com" };
/* Classes & Inheritance */
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name));
    };
    return Person;
}());
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(name, age, skills) {
        var _this = _super.call(this, name, age) || this;
        _this.skills = skills;
        return _this;
    }
    return Developer;
}(Person));
var dev = new Developer("kalai", 30, ["Javascript", "TypeScript"]);
dev.greet();
console.log(dev.skills);
/* Enums */
var Role;
(function (Role) {
    Role["User"] = "USER";
    Role["Admin"] = "ADMIN";
    Role["Guest"] = "GUEST";
})(Role || (Role = {}));
var userRole = Role.Admin;
console.log(userRole);
/* any , unknown */
var data;
data = "Hello";
data = 42;
data = true;
console.log(data);
var input;
input = "Hello kalaivanan .";
console.log(input.toUpperCase());
input = 100;
if (typeof input === "number") {
    console.log(input.toFixed(2));
}
/* Tuples */
var user = [1, "kalai"];
/* Intersection Type */
var value;
value = "Hello kalai";
value = 24;
var numberBox = { value: 500 };
var stringBox = { value: "I am kalaivanan ." };
console.log(numberBox.value);
console.log(stringBox.value);
/* Generic Function with Arrays */
function getFirstElement(arr) {
    return arr[1];
}
console.log(getFirstElement([1, 2, 3]));
console.log(getFirstElement(["kalai", "siva", "Hari"]));
