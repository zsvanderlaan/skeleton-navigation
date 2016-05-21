import {autoinject} from "aurelia-dependency-injection";
import {TestServiceDependencies} from "./testServiceDependencies";
import {ChildConfiguration} from "./childConfiguration";

@autoinject()
export class TestService {

  constructor(
    private _dependencies: TestServiceDependencies
  ) {

    let failureConfiguration = new ChildConfiguration('Failure');          // 'Failure' will not be output to console
    let childFailureExample = this._dependencies.childFailureExampleFactory(failureConfiguration);
    let workaroundConfiguration = new ChildConfiguration('Workaround');    // 'Workaround' will be output to console
    let childWorkaroundExample = this._dependencies.childWorkaroundExampleFactory(workaroundConfiguration);
  }
}
