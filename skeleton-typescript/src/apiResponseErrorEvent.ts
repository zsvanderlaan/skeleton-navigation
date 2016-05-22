import {autoinject} from "aurelia-dependency-injection";
import {inject} from "aurelia-dependency-injection";
import {autoconfigure} from "./coreTools";

export class ApiResponseErrorEventConfiguration {
  constructor(
    public responseType: Function | string
    , public error: any
  ) {
    // todo: add required guard
  }
}

@autoinject()
export class ApiResponseErrorEventDependencies { }

@autoconfigure()
@inject(ApiResponseErrorEventDependencies)
export class ApiResponseErrorEvent {

  constructor(
    private _dependencies: ApiResponseErrorEventDependencies
    , private _configuration: ApiResponseErrorEventConfiguration
  ) { }
}
