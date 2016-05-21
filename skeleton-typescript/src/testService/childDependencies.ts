import {autoinject} from "aurelia-dependency-injection";
import {HttpClient} from "aurelia-fetch-client";

// Always use DI on dependency objects
@autoinject()
export class ChildDependencies {
  constructor(
    public _http: HttpClient
  ) {
    console.log(this._http); // injection works just fine here
  }
}
