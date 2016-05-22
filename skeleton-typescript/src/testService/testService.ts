import {inject} from "aurelia-dependency-injection";
import {autoinject} from "aurelia-dependency-injection";
export class TestServiceConfiguration { }

@autoinject()
export class TestServiceDependencies {

  constructor(

  ) { }
}

@inject(TestServiceDependencies)
export class TestService {

  constructor(
    public _dependencies: TestServiceDependencies
    , public _configuration: TestServiceConfiguration
  ) {
    console.log(_dependencies);
    console.log(_configuration);
  }
}
