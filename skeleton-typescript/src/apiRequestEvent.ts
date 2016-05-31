import {autoinject} from "aurelia-dependency-injection";
import {inject} from "aurelia-dependency-injection";

export class ApiRequestEventConfiguration {

  constructor(
    public requestType: Function | string
  ) { }
}

@autoinject()
export class ApiRequestEventDependencies { }


@inject(ApiRequestEventDependencies)
export class ApiRequestEvent {

  requestType:Function|string;

  constructor(
     private dependencies: ApiRequestEventDependencies
     , private configuration: ApiRequestEventConfiguration
  ) {

  }
}





