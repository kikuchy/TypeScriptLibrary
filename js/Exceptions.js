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
