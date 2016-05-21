/*
* Factory of autoinjected class
* does not account for dynamic dependencies to be provided
* provides number of static dependencies equal to the number of constructor parameters
* then appends dynamic dependencies
*
* When we instantiate a class using Factory.of(ClassName)
* And also decorate the class ClassName with the @autoinject() decorator
*
* The invokeWithDynamicDependencies function iterates over args[i]
* Where i is set to the length of the Static Dependencies
*
* it should in fact be the number of constructor parameters minus the length of the dynamic dependencies
*
*/

import {ChildDependencies} from "./childDependencies";
import {ChildConfiguration} from "./childConfiguration";
import {autoinject} from "aurelia-dependency-injection";

@autoinject()
export class childFailureExample {

  /*
    Without the fix the injected params are
      Array[3]: [
        ChildDependencies    // static parameter instantiated by DI
        , ChildConfiguration // static parameter instantiated by DI
        , ChildConfiguration // dynamic parameter passed into factory, does not fit into constructor signature
      ]
  */
  constructor(
    private _dependencies: ChildDependencies
    , private _configuration: ChildConfiguration
  ) {
    console.log(this._dependencies);
    console.log(this._configuration.name);
    debugger; // inspect 1 step up the call stack to see the shape of the injected params and compare against workaround
  }
}

//
// current implementation
// function invokeWithDynamicDependencies(container, fn, staticDependencies, dynamicDependencies) {
//   var i = staticDependencies.length;
//   var args = new Array(i);
//
//   while (i--) {
//     args[i] = container.get(staticDependencies[i]);
//   }
//
//   if (dynamicDependencies !== undefined) {
//     args = args.concat(dynamicDependencies);
//   }
//
//   return Reflect.construct(fn, args);
// }
