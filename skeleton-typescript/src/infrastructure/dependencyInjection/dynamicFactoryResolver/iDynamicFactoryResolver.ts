export interface IDynamicFactoryResolver {
  get<T>(key: T, configuration): T;
}
