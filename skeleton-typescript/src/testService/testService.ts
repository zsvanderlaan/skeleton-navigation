import {inject} from "aurelia-dependency-injection";
import {Factory} from "aurelia-dependency-injection";
import {ApiFetchService} from "../services/apiFetchService/apiFetchService";
import {ApiFetchServiceConfiguration} from "../services/apiFetchService/apiFetchServiceConfiguration";

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
    debugger;
    let configuration = undefined;
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
