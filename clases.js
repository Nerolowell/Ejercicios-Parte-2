var Startup = /** @class */ (function () {
    function Startup(texto) {
        this.text = texto;
    }
    Startup.prototype.main = function () {
        console.log(this.text);
        return 0;
    };
    return Startup;
}());
var s = new Startup("Hola	mundo");
s.main();
var Startups = /** @class */ (function () {
    function Startups() {
    }
    Startups.main = function () {
        console.log("Hola	mundo");
        return 0;
    };
    return Startups;
}());
Startups.main();
