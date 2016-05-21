import {Factory} from "aurelia-dependency-injection";
import {inject} from "aurelia-dependency-injection";
import {ChildConfiguration} from "./childConfiguration";
import {childFailureExample} from "./childFailureExample";
import {ChildWorkaroundExample} from "./childWorkaroundExample";

// I am unsure of the type annotation to use with Factory.of() and @autoinject
// use @inject() over autoinject() when Factory.of() is used until documentation is provided
@inject(Factory.of(childFailureExample), Factory.of(ChildWorkaroundExample))
export class TestServiceDependencies {

  constructor(
    public childFailureExampleFactory: (configuration: ChildConfiguration) => childFailureExample
    , public childWorkaroundExampleFactory: (configuration: ChildConfiguration) => ChildWorkaroundExample
  ) {
  }
}
