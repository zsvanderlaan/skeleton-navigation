import {IComposable} from "./iComposable";
import {IConfiguration} from "../configuration/iConfiguration";
import {IDependency} from "../dependency/iDependency";

export class Composable<D extends IDependency<IComposable<D, C>> , C extends IConfiguration<IComposable<D, C>>>
  implements IComposable<D,C>
{
  constructor(dependencies: D, configuration: C) {
    
  }
}
