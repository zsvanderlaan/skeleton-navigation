import {autoinject} from "aurelia-dependency-injection";
import {TestServiceConfiguration} from "./testServiceConfiguration";
import {TestServiceDependencies} from "./testServiceDependencies";
import {ChildConfiguration} from "./childConfiguration";

@autoinject()
export class TestService {

  constructor(
    public _dependencies: TestServiceDependencies
    , public _configuration: TestServiceConfiguration
  ) {
    console.log(_dependencies);
    console.log(_configuration);
    let configuration = new ChildConfiguration('Foo');
    let child = this._dependencies.childFactory(configuration);
    console.log(child);
  }
}
