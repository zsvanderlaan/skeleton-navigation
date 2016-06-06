import {IComposable} from "../composable/iComposable";
import {IDependency} from "../dependency/iDependency";

export interface IConfiguration<T extends IComposable<IDependency<T>, IConfiguration<T>>> { }
