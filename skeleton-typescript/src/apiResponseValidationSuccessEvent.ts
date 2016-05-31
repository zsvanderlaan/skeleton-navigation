import {autoinject} from "aurelia-dependency-injection";
import {inject} from "aurelia-dependency-injection";

export class ApiResponseValidationSuccessEventConfiguration {

  constructor(
    public dataType: Function | string
    , public data: any
  ) { }
}

@autoinject()
export class ApiResponseValidationSuccessEventDependencies { }

@inject(ApiResponseValidationSuccessEventDependencies)
export class ApiResponseValidationSuccessEvent {

  constructor(
    private _dependencies: ApiResponseValidationSuccessEventDependencies
    , private _configuration: ApiResponseValidationSuccessEventConfiguration
  ) {

  }
}
