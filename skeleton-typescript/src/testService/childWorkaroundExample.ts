/*
 * Factory of injected class does account for length of both static and dynamic dependencies
 *
 * When we instantiate a class using Factory.of(ClassName)
 * And also decorate the class ClassName with the @inject() decorator
 *
 * The invokeWithDynamicDependencies function iterates over args[i]
 * Where i is set to the length of the Static Dependencies
 *
 * This works because the length of Static Dependencies + the length of Dynamic Dependencies
 * is equal to the size of the constructor
 *
 */

import {ChildDependencies} from "./childDependencies";
import {ChildConfiguration} from "./childConfiguration";
import {inject} from "aurelia-dependency-injection";

@inject(ChildDependencies)
export class ChildWorkaroundExample {

  /*
   With a manually defined inject() the injected params would be
   Array[2]: [
   ChildDependencies    // Instantiated by DI
   , ChildConfiguration // dynamic parameter passed into factory, does fit into constructor signature
   ]
   */
  constructor(
    private _dependencies: ChildDependencies
    , private _configuration: ChildConfiguration
  ) {
    console.log(this._dependencies);
    console.log(this._configuration.name);
    debugger; // inspect 1 step up the call stack to see the shape of the injected params and compare against failure
  }
}
