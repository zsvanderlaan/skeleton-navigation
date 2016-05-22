import {autoinject} from "aurelia-dependency-injection";
import {inject} from "aurelia-dependency-injection";
import {autoconfigure} from "./coreTools";

export class ApiRequestEventConfiguration {

  constructor(
    public requestType: Function | string
  ) { }
}

@autoinject()
export class ApiRequestEventDependencies { }

@autoconfigure()
@inject(ApiRequestEventDependencies)
export class ApiRequestEvent {

  requestType:Function|string;

  constructor(
     private dependencies: ApiRequestEventDependencies
     , private configuration: ApiRequestEventConfiguration
  ) {

  }
}





