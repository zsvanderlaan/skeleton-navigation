import {HttpClient} from "aurelia-fetch-client";
import {inject} from "aurelia-dependency-injection";

@inject(
  HttpClient
)
export class ApiFetchServiceDependencies {
  constructor(
    public _http: HttpClient
  ) { }
}
