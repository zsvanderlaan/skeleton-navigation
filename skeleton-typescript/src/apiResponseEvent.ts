import {autoinject} from "aurelia-dependency-injection";
import {inject} from "aurelia-dependency-injection";
import {autoconfigure} from "./coreTools";

export class ApiResponseEventConfiguration {

  constructor(
    public responseType: Function | string
    , public data: Object
  ) {
    // todo: add required param guard
  }

}

@autoinject()
export class ApiResponseEventDependencies { }

@autoconfigure()
@inject(ApiResponseEventDependencies)
export class ApiResponseEvent {

  constructor(
    private _dependencies: ApiResponseEventDependencies
    , private _configuration: ApiResponseEventConfiguration
  ) { }
}
