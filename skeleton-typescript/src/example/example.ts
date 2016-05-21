import {inject} from "aurelia-dependency-injection";
import {autoinject} from "aurelia-dependency-injection";
import {autoconfigure} from "./autoconfigure";

export class ExampleConfiguration {

  constructor(
    public name: string
  ) {
    this.name = this.name || "DefaultName";
  }
}

@autoinject()
export class ExampleDependencies { constructor( ) { } }

@inject(ExampleDependencies)
@autoconfigure()
export class Example {

  constructor(private _dependencies: ExampleDependencies, private _configuration: ExampleConfiguration) { debugger; }
}
