import {compose} from "./class-composer";
import {Swimmer} from "./swimmer";
import {Walker} from "./walker";
import {Talker} from "./talker";
import {autoinject} from "aurelia-dependency-injection";
import {inject} from "aurelia-dependency-injection";
import {HttpClient} from "aurelia-fetch-client";

export interface IDuck extends Swimmer, Walker, Talker {
    new(_dependencies: DuckDependencies, _configuration: DuckConfiguration): IDuck;
    (_dependencies: DuckDependencies, _configuration: DuckConfiguration): void;
}

export let IDuck = compose(Swimmer, Walker, Talker) as IDuck;

export class DuckConfiguration {
  sound:string = 'quack';
}

@autoinject()
export class DuckDependencies {

  constructor(
    public httpService: HttpClient
  ) {

  }
}

@inject(DuckDependencies)
export class Duck extends IDuck {
  constructor(
    protected _dependencies: DuckDependencies
    , protected _configuration: DuckConfiguration
  ) {
    super(_dependencies, _configuration);
  }

  hasQuacked = false;


  quack() {
    super.talk();
    this.hasQuacked = true;
  }
}
