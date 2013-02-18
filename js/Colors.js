var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Exceptions;
(function (Exceptions) {
    var Exception = (function () {
        function Exception(mes) {
            this.message = mes;
        }
        Exception.prototype.getMessage = function () {
            return this.message;
        };
        return Exception;
    })();
    Exceptions.Exception = Exception;    
    var OutOfRangeException = (function (_super) {
        __extends(OutOfRangeException, _super);
        function OutOfRangeException() {
            _super.apply(this, arguments);

        }
        return OutOfRangeException;
    })(Exception);
    Exceptions.OutOfRangeException = OutOfRangeException;    
})(Exceptions || (Exceptions = {}));
var Colors;
(function (Colors) {
    var RGBColor = (function () {
        function RGBColor(r, g, b) {
            this.setR(r);
            this.setG(g);
            this.setB(b);
        }
        RGBColor.RGB_MAX_VALUE = 255;
        RGBColor.RGB_MIN_VALUE = 0;
        RGBColor.prototype.getR = function () {
            return this._r;
        };
        RGBColor.prototype.setR = function (nr) {
            if(nr >= RGBColor.RGB_MIN_VALUE && nr <= RGBColor.RGB_MAX_VALUE) {
                this._r = nr;
            } else {
                throw new Exceptions.OutOfRangeException("Red value must be between 0 to 255.");
            }
        };
        RGBColor.prototype.getG = function () {
            return this._g;
        };
        RGBColor.prototype.setG = function (ng) {
            if(ng >= RGBColor.RGB_MIN_VALUE && ng <= RGBColor.RGB_MAX_VALUE) {
                this._g = ng;
            } else {
                throw new Exceptions.OutOfRangeException("Green value must be between 0 to 255.");
            }
        };
        RGBColor.prototype.getB = function () {
            return this._b;
        };
        RGBColor.prototype.setB = function (nb) {
            if(nb >= RGBColor.RGB_MIN_VALUE && nb <= RGBColor.RGB_MAX_VALUE) {
                this._b = nb;
            } else {
                throw new Exceptions.OutOfRangeException("Blue value must be between 0 to 255.");
            }
        };
        RGBColor.prototype.add = function (color) {
            return new RGBColor(this.getR() + color.getR(), this.getG() + color.getG(), this.getB() + color.getB());
        };
        RGBColor.prototype.sub = function (color) {
            return new RGBColor(this.getR() - color.getR(), this.getG() - color.getG(), this.getB() - color.getB());
        };
        RGBColor.prototype.mul = function (co) {
            return new RGBColor(this.getR() * co, this.getG() * co, this.getB() * co);
        };
        RGBColor.prototype.div = function (deno) {
            return new RGBColor(this.getR() / deno, this.getG() / deno, this.getB() / deno);
        };
        RGBColor.prototype.toRGBA = function () {
            return new RGBAColor(this.getR(), this.getG(), this.getB(), 1.0);
        };
        RGBColor.prototype.toString = function () {
            return "#" + this._r.toString(16) + this._g.toString(16) + this._b.toString(16);
        };
        return RGBColor;
    })();
    Colors.RGBColor = RGBColor;    
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
        RGBAColor.prototype.add = function (color) {
            return new RGBAColor(this.getR() + color.getR(), this.getG() + color.getG(), this.getB() + color.getB(), this.getA() + color.getA());
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
    Colors.RGBAColor = RGBAColor;    
})(Colors || (Colors = {}));
