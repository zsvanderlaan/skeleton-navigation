export interface IActivatable {
  activate();
  deactivate();
}

export interface IActivatableImplementation {
  onActivate(): void;
  onDeactivate(): void;
}

export function isActivatableImplementation<T>(instanceOfUnknownType: T | IActivatableImplementation): instanceOfUnknownType is IActivatableImplementation {
  return (
    ((<IActivatableImplementation>instanceOfUnknownType).onActivate !== undefined)
    && ((<IActivatableImplementation>instanceOfUnknownType).onDeactivate !== undefined)
  );
}
