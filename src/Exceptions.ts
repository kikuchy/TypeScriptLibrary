module Exceptions{
	export interface IThrowable{
		message : string;
		getMessage() : string;
	}
	export class Exception implements IThrowable{
		message : string;
		constructor(mes : string){
			this.message = mes;
		}
		public getMessage() : string {
			return this.message;
		}
	}
	export class OutOfRangeException extends Exception{}
}
