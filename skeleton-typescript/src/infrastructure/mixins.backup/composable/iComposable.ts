import {IDependency} from "../dependency/iDependency";
import {IConfiguration} from "../configuration/iConfiguration";

export interface IComposable<D extends IDependency<IComposable<D, C>> , C extends IConfiguration<IComposable<D, C>>> {

}
