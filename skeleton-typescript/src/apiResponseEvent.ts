import {autoinject} from "aurelia-dependency-injection";
import {inject} from "aurelia-dependency-injection";

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

@inject(ApiResponseEventDependencies)
export class ApiResponseEvent {

  constructor(
    private _dependencies: ApiResponseEventDependencies
    , private _configuration: ApiResponseEventConfiguration
  ) { }

  public isResponseFor(responseType: Function | string) {
    return (responseType === this._configuration.responseType);
  }

  public getResponseData() {
    return this._configuration.data;
  }
}
