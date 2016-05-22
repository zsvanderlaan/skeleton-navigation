// import {ChildDependencies} from "./childDependencies";
// import {ChildConfiguration} from "./childConfiguration";
// import {inject} from "aurelia-dependency-injection";
//
// @inject(ChildDependencies)
// export class Child {
//   constructor(
//     private _dependencies: ChildDependencies
//     , private _configuration: ChildConfiguration
//   ) {
//     console.log(this._dependencies);
//     console.log(this._configuration.name);
//   }
// }

/*
* Factory of autoinjected class does not account for length of both static and dynamic dependencies
*
* When we instantiate a class using Factory.of(ClassName)
* And also decorate the class ClassName with the @autoinject() decorator
*
* The invokeWithDynamicDependencies function iterates over args[i]
* Where i is set to the length of the Static Dependencies
*
* i should in fact be the length of the Static Dependencies - the length of the Dynamic Dependencies
*
*/

import {ChildDependencies} from "./childDependencies";
import {ChildConfiguration} from "./childConfiguration";
import {autoinject} from "aurelia-dependency-injection";

@autoinject()
export class Child {

  /*
    Without the fix the injected params would be
      Array[3]: [
        ChildDependencies    // Instantiated by DI
        , ChildConfiguration // Instantiated by DI
        , ChildConfiguration // dynamic parameter passed into factory, does not fit into constructor signature
      ]
  */
  constructor(
    private _dependencies: ChildDependencies
    , private _configuration: ChildConfiguration
  ) {
    console.log(this._dependencies);
    console.log(this._configuration.name);
  }
}




function invokeWithDynamicDependencies(container, fn, staticDependencies, dynamicDependencies) {
  //var i = staticDependencies.length;                                // current implementation
  var i = staticDependencies.length - dynamicDependencies.length;     // suggested modification
  var args = new Array(i);

  while (i--) {
    args[i] = container.get(staticDependencies[i]);
  }

  if (dynamicDependencies !== undefined) {
    args = args.concat(dynamicDependencies);
  }

  return Reflect.construct(fn, args);
}
