import {inject} from "aurelia-dependency-injection";
import {autoinject} from "aurelia-dependency-injection";
import {ApiFetchService, ApiFetchServiceConfiguration} from "../apiFetchService";
import {Factory} from "aurelia-dependency-injection";
import {Roles} from "../roles";

export class TestServiceConfiguration {

  public isWorking: boolean = true;
  public isOtherText: string = 'true'
}

@inject(Factory.of(ApiFetchService))
export class TestServiceDependencies {

  public apiFetchService: ApiFetchService;
  
  constructor(
    apiFetchServiceFactory: (configuration: ApiFetchServiceConfiguration) => ApiFetchService
  ) {
    let configuration = undefined;
    //let configuration = new ApiFetchServiceConfiguration(Roles);
    this.apiFetchService = apiFetchServiceFactory(configuration);
  }
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
