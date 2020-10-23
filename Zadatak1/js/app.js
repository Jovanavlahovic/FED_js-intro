var Kamera = /** @class */ (function () {
    function Kamera(megaPikseli, freeSpace) {
        this._megaPikseli = megaPikseli;
        this._freeSpace = freeSpace;
        this._photoCounter = 0;
    }
    Object.defineProperty(Kamera.prototype, "megaPikseli", {
        get: function () {
            return this._megaPikseli;
        },
        set: function (value) {
            this._megaPikseli = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Kamera.prototype, "freeSpace", {
        get: function () {
            return this._freeSpace;
        },
        set: function (value) {
            this._freeSpace = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Kamera.prototype, "photoCounter", {
        get: function () {
            return this._photoCounter;
        },
        set: function (value) {
            this._photoCounter = value;
        },
        enumerable: false,
        configurable: true
    });
    Kamera.prototype.slikaj = function (vrednost) {
        if (this._freeSpace >= vrednost) {
            this._freeSpace -= vrednost;
            this._photoCounter++;
            return true;
        }
        return false;
    };
    return Kamera;
}());
/// <reference path="Kamera.ts" />
var k = new Kamera(10, 25);
console.log(k.freeSpace);
console.log(k.megaPikseli);
console.log(k.photoCounter);
console.log(k.slikaj(2));
console.log(k.slikaj(3));
console.log(k.slikaj(10));
//# sourceMappingURL=app.js.map