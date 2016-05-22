import {ValidationError} from "./validationError";
import {inject} from "aurelia-dependency-injection";
import {autoconfigure} from "./coreTools";
import {autoinject} from "aurelia-dependency-injection";

export class ApiResponseValidationErrorEventConfiguration {

  constructor(
    public dataType: Function | string
    , public data: any
    , public validationErrors: Array<ValidationError>
  ) { }
}

@autoinject()
export class ApiResponseValidationErrorEventDependencies { }

@autoconfigure()
@inject(ApiResponseValidationErrorEventDependencies)
export class ApiResponseValidationErrorEvent {

  constructor(
    private _dependencies: ApiResponseValidationErrorEventDependencies
    , private _configuration: ApiResponseValidationErrorEventConfiguration
  ) {

  }
}
