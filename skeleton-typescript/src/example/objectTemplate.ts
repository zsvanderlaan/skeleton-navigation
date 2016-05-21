import {inject} from "aurelia-dependency-injection";
import {autoinject} from "aurelia-dependency-injection";
import {autoconfigure} from "./autoconfigure";

// Configuration classes must not contain dependencies
// Because of this, configuration classes are the only classes you may use new() with
export class ClassConfiguration {

  constructor(
    public name: string
  ) {
    // Always provide intelligent defaults
    this.name = this.name || "ClassConfiguredByConvention";
  }
}

// Dependency objects must have all of their parameters injected
@autoinject()
export class ClassDependencies {

  // Always include the configuration object in the dependencies
  // This allows us to inject a default configuration
  constructor(
    public _defaultConfiguration: ClassConfiguration
  ) { }
}

// A class must only ever have a dependency object injected
@inject(ClassDependencies)
@autoconfigure() // This decorator will extend new ClassConfiguration() with _configuration
export class Class {

  // A class must only take in two parameters. There literally are no exceptions. None.
  // The first parameter is a dependency object, which is provided through dependency injection
  // The second is an optional configuration to override the default configuration provided in the dependencies.
  // To provide an optional configuration:
  //   instantiate the class through an injected factory rather than through dependency injection
  //   use the decorator @inject(Factory.of(Class)) in dependencies
  //   in the class: var dependency = this._dependencies._classFactory(new ClassConfiguration(<Custom Params>))
  constructor(private _dependencies: ClassDependencies, private _configuration: ClassConfiguration) { }
}
