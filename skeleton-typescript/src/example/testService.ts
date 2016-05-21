import {inject} from "aurelia-dependency-injection";
import {autoconfigure} from "./autoconfigure";
import {Factory} from "aurelia-dependency-injection";
import {Example, ExampleConfiguration} from "./example";

export class TestServiceConfiguration { constructor( ) { } }

// I am unsure of the type annotation to use with Factory.of() and @autoinject
// use @inject() over autoinject() when Factory.of() is used until documentation is provided
@inject(Factory.of(Example), TestServiceConfiguration)
export class TestServiceDependencies {

  constructor(
    public exampleFactory: (configuration: ExampleConfiguration) => Example
  ) { }
}

@inject(TestServiceDependencies)
@autoconfigure()
export class TestService {

  constructor(private _dependencies: TestServiceDependencies, private _configuration: TestServiceConfiguration) {

    let customConfiguration = new ExampleConfiguration('CustomName');
    let example = this._dependencies.exampleFactory(customConfiguration);
  }
}
