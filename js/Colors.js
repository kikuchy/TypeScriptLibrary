var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Colors;
(function (Colors) {
    var RGBColor = (function () {
        function RGBColor(r, g, b) {
            this.setR(r);
            this.setG(g);
            this.setB(b);
        }
        RGBColor.prototype.getR = function () {
            return this._r;
        };
        RGBColor.prototype.setR = function (nr) {
            if(nr >= 0 && nr <= 255) {
                this._r = nr;
            } else {
                throw new Exceptions.OutOfRangeException("Red value must be between 0 to 255.");
            }
        };
        RGBColor.prototype.getG = function () {
            return this._g;
        };
        RGBColor.prototype.setG = function (ng) {
            if(ng >= 0 && ng <= 255) {
                this._g = ng;
            } else {
                throw new Exceptions.OutOfRangeException("Green value must be between 0 to 255.");
            }
        };
        RGBColor.prototype.getB = function () {
            return this._b;
        };
        RGBColor.prototype.setB = function (nb) {
            if(nb >= 0 && nb <= 255) {
                this._b = nb;
            } else {
                throw new Exceptions.OutOfRangeException("Blue value must be between 0 to 255.");
            }
        };
        RGBColor.prototype.toString = function () {
            return "#" + this._r.toString(16) + this._g.toString(16) + this._b.toString(16);
        };
        return RGBColor;
    })();    
    var RGBAColor = (function (_super) {
        __extends(RGBAColor, _super);
        function RGBAColor(r, g, b, a) {
                _super.call(this, r, g, b);
            this.setA(a);
        }
        RGBAColor.prototype.getA = function () {
            return this._alpha;
        };
        RGBAColor.prototype.setA = function (na) {
            if(na >= 0.0 && na <= 1.0) {
                this._alpha = na;
            } else {
                throw new Exceptions.OutOfRangeException("Alpha value must be between 0.0 to 1.0 .");
            }
        };
        RGBAColor.prototype.toString = function () {
            var a = [
                this._r, 
                this._g, 
                this._b, 
                this._alpha
            ];
            return "rgba(" + a.join(',') + ")";
        };
        return RGBAColor;
    })(RGBColor);    
})(Colors || (Colors = {}));
