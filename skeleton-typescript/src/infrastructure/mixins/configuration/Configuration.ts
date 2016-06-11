import {IDependency} from "../dependency/iDependency";
import {IConfiguration} from "./iConfiguration";
import {IComposable} from "../composable/iComposable";

export class Configuration<T extends IComposable<IDependency<T>, IConfiguration<T>>>
  implements IConfiguration<T>
{
  constructor() {

  }
}
