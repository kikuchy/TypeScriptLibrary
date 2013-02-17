///<reference path="Exceptions.ts" />
module Colors{
	interface IColor{
		toString() : string;
	}
	class RGBColor{
		_r : number;
		_g : number;
		_b : number;

		constructor(r : number, g : number, b : number){
			this.setR(r);
			this.setG(g);
			this.setB(b);
		}

		getR() : number {
			return this._r;
		}
		setR(nr : number) : void {
			if(nr >= 0 && nr <= 255)
				this._r = nr;
			else
				throw new Exceptions.OutOfRangeException("Red value must be between 0 to 255.");
		}
		getG() : number {
			return this._g;
		}
		setG(ng : number) : void {
			if(ng >= 0 && ng <= 255)
				this._g = ng;
			else
				throw new Exceptions.OutOfRangeException("Green value must be between 0 to 255.");
		}
		getB() : number {
			return this._b;
		}
		setB(nb : number) : void {
			if(nb >= 0 && nb <= 255)
				this._b = nb;
			else
				throw new Exceptions.OutOfRangeException("Blue value must be between 0 to 255.");
		}

		toString() : string {
			return "#"+ this._r.toString(16) + this._g.toString(16) + this._b.toString(16);
		}
	}
	class RGBAColor extends RGBColor{
		_alpha : number;
		constructor(r : number, g : number, b : number, a : number){
			super(r, g, b);
			this.setA(a);
		}
		getA() : number {
			return this._alpha;
		}
		setA(na : number){
			if(na >= 0.0 && na <= 1.0)
				this._alpha = na;
			else
				throw new Exceptions.OutOfRangeException("Alpha value must be between 0.0 to 1.0 .");
		}
		toString() : string{
			var a = [this._r, this._g, this._b, this._alpha];
			return "rgba(" + a.join(',') + ")";
		}
	}
}
