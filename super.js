var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Base = /** @class */ (function () {
    function Base() {
    }
    Base.prototype.log = function () {
        console.log("Hola mundo");
    };
    return Base;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child.prototype.log = function () {
        _super.prototype.log.call(this);
    };
    return Child;
}(Base));
var Bases = /** @class */ (function () {
    function Bases() {
        this.log = function () {
            console.log("hello	world");
        };
    }
    return Bases;
}());
var Childs = /** @class */ (function (_super) {
    __extends(Childs, _super);
    function Childs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Childs.prototype.logWorld = function () {
        this.log();
    };
    return Childs;
}(Bases));
