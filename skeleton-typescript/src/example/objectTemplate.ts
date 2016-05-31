import {inject} from "aurelia-dependency-injection";
import {autoinject} from "aurelia-dependency-injection";
import {compose} from "../coreTools";

// Configuration classes must not contain dependencies
// Because of this, configuration classes are the only classes you may use new() with
export class ClassConfiguration {

  // Configuration properties must be public to be accessed by Class
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

  // Dependencies must be public to be accessed by Class
  constructor(
    public _fooDependency: FooDependency
  ) { }
}

export class FooDependency { }

export interface IClass extends
  ClassConfiguration
  , ClassDependencies {

  new(_dependencies: ClassDependencies, _configuration: ClassConfiguration): IClass;
  (_dependencies: ClassDependencies, _configuration: ClassConfiguration): void;
}

export let IClass = compose(
  ClassConfiguration
  , ClassDependencies
) as IClass;

// A class must only ever have a dependency object injected
@inject(ClassDependencies)
export class Class extends IClass {

  // A class must only take in two parameters. There literally are no exceptions. None.
  // The first parameter is a dependency object, which is provided through dependency injection
  // The second is an optional configuration to override the default configuration provided in the dependencies.
  // To provide an optional configuration:
  //   instantiate the class through an injected factory rather than through dependency injection
  //   use the decorator @inject(Factory.of(Class)) in dependencies
  //   in the class: var dependency = this._classFactory(new ClassConfiguration(<Custom Params>))
  constructor(_dependencies: ClassDependencies, _configuration: ClassConfiguration) {
    super(_dependencies, _configuration);
  }
}
