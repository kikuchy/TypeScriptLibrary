///<reference path="Exceptions.ts" />
module Colors{
	export interface IColor{
		toString() : string;
	}
	export class RGBColor implements IColor {
		static public RGB_MAX_VALUE : number = 255;
		static public RGB_MIN_VALUE : number = 0;
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
			if(nr >= RGBColor.RGB_MIN_VALUE && nr <= RGBColor.RGB_MAX_VALUE)
				this._r = nr;
			else
				throw new Exceptions.OutOfRangeException("Red value must be between 0 to 255.");
		}
		getG() : number {
			return this._g;
		}
		setG(ng : number) : void {
			if(ng >= RGBColor.RGB_MIN_VALUE && ng <= RGBColor.RGB_MAX_VALUE)
				this._g = ng;
			else
				throw new Exceptions.OutOfRangeException("Green value must be between 0 to 255.");
		}
		getB() : number {
			return this._b;
		}
		setB(nb : number) : void {
			if(nb >= RGBColor.RGB_MIN_VALUE && nb <= RGBColor.RGB_MAX_VALUE)
				this._b = nb;
			else
				throw new Exceptions.OutOfRangeException("Blue value must be between 0 to 255.");
		}

		add(color : RGBColor) : RGBColor {
			return new RGBColor(this.getR() + color.getR(), this.getG() + color.getG(), this.getB() + color.getB());
		}
		sub(color : RGBColor) : RGBColor {
			return new RGBColor(this.getR() - color.getR(), this.getG() - color.getG(), this.getB() - color.getB());
		}
		mul(co : number) : RGBColor {
			return new RGBColor(this.getR() * co, this.getG() * co, this.getB() * co);
		}
		div(deno : number) : RGBColor {
			return new RGBColor(this.getR() / deno, this.getG() / deno, this.getB() / deno);
		}

		toRGBA() : RGBAColor {
			return new RGBAColor(this.getR(), this.getG(), this.getB(), 1.0);
		}
		toString() : string {
			return "#"+ this._r.toString(16) + this._g.toString(16) + this._b.toString(16);
		}
	}
	export class RGBAColor extends RGBColor{
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
		add(color : RGBAColor) : RGBAColor {
			return new RGBAColor(this.getR() + color.getR(), this.getG() + color.getG(), this.getB() + color.getB(), this.getA() + color.getA());
		}
		toString() : string{
			var a = [this._r, this._g, this._b, this._alpha];
			return "rgba(" + a.join(',') + ")";
		}
	}
}
