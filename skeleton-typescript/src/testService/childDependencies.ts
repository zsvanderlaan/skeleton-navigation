import {autoinject} from "aurelia-dependency-injection";
import {HttpClient} from "aurelia-fetch-client";

@autoinject()
export class ChildDependencies {
  constructor(
    public _http: HttpClient
  ) {
    console.log(this._http);
  }
}
