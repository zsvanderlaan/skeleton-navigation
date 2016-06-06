export interface IActivatable {
  activate();
  deactivate();
}

export interface IActivatableImplementer {
  onActivate(): void;
  onDeactivate(): void;
}

export function isActivatableImplementer<T>(self: T | IActivatableImplementer): self is IActivatableImplementer {
  return (
    ((<IActivatableImplementer>self).onActivate !== undefined)
    && ((<IActivatableImplementer>self).onDeactivate !== undefined)
  );
}
