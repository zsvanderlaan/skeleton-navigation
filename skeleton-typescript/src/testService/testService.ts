import {inject} from "aurelia-dependency-injection";
import {autoinject} from "aurelia-dependency-injection";

export class TestServiceConfiguration {

  public isWorking: boolean = true;
  public isOtherText: string = 'true'
}

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
    console.log(this._dependencies);
    console.log(this._configuration);
  }
}
