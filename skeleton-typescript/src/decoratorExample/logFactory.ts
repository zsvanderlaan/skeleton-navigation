import {logMethod} from "./logMethod";
import {logParameter} from "./logParameter";
import {logProperty} from "./logProperty";

export function log(...args : any[]) {
  switch(args.length) {
    //case 1:
      //return logClass.apply(this, args);
    case 2:
      return logProperty.apply(this, args);
    case 3:
      if(typeof args[2] === "number") {
        return logParameter.apply(this, args);
      }
      else {
        return logMethod.apply(this, args);
      }
    default:
      throw new Error("Decorators are not valid here!");
  }
}
