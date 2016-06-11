/**
 //  * Create a constructor function for a class implementing the given mixins.
 //  *
 //  * @param mixins array of classes to be mixed together. The constructor of those classes will receive the options given
 //  *               to the constructor of the composed object
 //  * @returns a composable constructor function
 //  */
export function compose(...mixins: Array<Function>): (dependencies: any, configuration: any) => any {

  // our constructor function that will be called every time a new composed object is created
  var CompositionConstructor = function (dependencies: any, configuration: any) {

    if (undefined === dependencies) { dependencies = Object.create(Object); }
    if (undefined === configuration) { configuration = Object.create(Object); }

    extend(this, dependencies);
    extend(this, configuration);

    // call the constructor function of all the mixins
    mixins.forEach(function (mixin) {
      mixin.call(this, dependencies, configuration);
    }, this);

    // todo: We need to be able to track the compositional depth
    // if we increment a counter for each super call that must be made as a result of compose
    // we may be able to determine what the base class is. we should only run activate once
    // after all super() calls have been made. this is difficult because if a class becomes
    // extended, it can no longer be the class which invoked activate, even though it may
    // not always be extended, because the extending class may not be done at the time activate is triggered.
    // this may be fixable through custom resolvers?
    if (
      (true === (this as any).activateAfterComposition)
      && (undefined !== (this as any).activate)
    ) {
      (this as any).activate();
    }
  };


  // add all mixins properties and methods to the constructor prototype for all created objects to have them

  // todo: It would be helpful to have some designator for:
  // when a method should be concatenated to an existing method array and iterated when super.method() is invoked.
  // when a method should skip because there is an existing method
  // when a method should replace the existing method
  // Examples:

  // Two different mixins both implement Activatable. When isActive changes, they should both
  // invoke their onActivate() behavior.

  // Two mixins both implement a logger. When we invoke the log method, we should only get one logged output.
  // In this case, we must define a strategy which can be implemented to determine which of the two methods should persist.

  mixins.forEach(function (mixin) {
    extend(CompositionConstructor.prototype, mixin.prototype);
  });

  return CompositionConstructor;
}



// /**
//  //  * Create a constructor function for a class implementing the given mixins.
//  //  *
//  //  * @param mixins array of classes to be mixed together. The constructor of those classes will receive the options given
//  //  *               to the constructor of the composed object
//  //  * @returns a composable constructor function
//  //  */
// export function getImplementationBase<T extends IComposable<IDependency<T>, IConfiguration<T>>>()
//   : (dependencies: IDependency<T>, configuration: IConfiguration<T>) => any {
//
//   // our constructor function that will be called every time a new composed object is created
//   var BaseConstructor = function (dependencies: IDependency<T>, configuration: IConfiguration<T>) {
//
//     if (undefined === dependencies) { dependencies = Object.create(Object); }
//     if (undefined === configuration) { configuration = Object.create(Object); }
//
//     extend(this, dependencies);
//     extend(this, configuration);
//   };
//
//   return BaseConstructor;
// }
//
//
//
//
//
// /**
//  //  * Create a constructor function for a class implementing the given mixins.
//  //  *
//  //  * @param mixins array of classes to be mixed together. The constructor of those classes will receive the options given
//  //  *               to the constructor of the composed object
//  //  * @returns a composable constructor function
//  //  */
// export function getImplementationComposition(...mixins: Array<Function>): (dependencies: any, configuration: any) => any {
//
//   // our constructor function that will be called every time a new composed object is created
//   var CompositionConstructor = function (dependencies: any, configuration: any) {
//
//     if (undefined === dependencies) { dependencies = Object.create(Object); }
//     if (undefined === configuration) { configuration = Object.create(Object); }
//
//     extend(this, dependencies);
//     extend(this, configuration);
//
//     // call the constructor function of all the mixins
//     mixins.forEach(function (mixin) {
//       mixin.call(this, dependencies, configuration);
//     }, this);
//
//     if (
//       isActivatable(this as Object | Activatable)
//       && this.activateAfterComposition
//     ) {
//       this.activate();
//     }
//   };
//
//   // add all mixins properties and methods to the constructor prototype for all
//   // created objects to have them
//   mixins.forEach(function (mixin) {
//     extend(CompositionConstructor.prototype, mixin.prototype);
//   });
//
//   return CompositionConstructor;
// }























// /**
//  * Create a constructor function for a class implementing the given mixins.
//  *
//  * @param mixins array of classes to be mixed together. The constructor of those classes will receive the options given
//  *               to the constructor of the composed object
//  * @returns {{new(any): {}}} a constructor function
//  */
// export function compose(...mixins: Array<Function>): (_dependencies: any, _configuration: any) => any {
//
//   debugger;
//
//   // our constructor function that will be called every time a new composed object is created
//   var composedClassConstructor = function (_dependencies: any, _configuration: any) {
//
//     if (undefined === _dependencies) {
//       _dependencies = Object.create(Object);
//     }
//
//     if (undefined === _configuration) {
//       _configuration = Object.create(Object);
//     }
//
//     // apply the provided dependencies before going any further, as our object may depend on them
//     extend(this, _dependencies);
//
//     // Apply the default values of any configuration mixins to the configuration parameter
//     mixins
//       .filter(function (mixin) {
//         return mixin.name.endsWith('Configuration');
//       })
//       .forEach(function (mixin) {
//         mixin.call(_configuration);
//       });
//
//     // apply the computed configuration before going any further, as our object may depend on it
//     extend(this, _configuration);
//
//     // call the constructor function of all the mixins
//     mixins.forEach(function (mixin) {
//       // we already applied dependencies and configuration
//       if (
//         (mixin.name.endsWith('Dependencies'))
//         || (mixin.name.endsWith('Configuration'))
//       ) {
//         return;
//       }
//       else {
//         mixin.call(this, _dependencies, _configuration);
//       }
//     }, this);
//
//     // todo: implement an isActivatable and activateAfterComposition check
//     // if (this.activateAfterComposition) { this.activate(); }
//   };
//
//   // add all mixins properties and methods to the constructor prototype for all
//   // created objects to have them
//   mixins.forEach(function (mixin) {
//     extend(composedClassConstructor.prototype, mixin.prototype);
//   });
//
//   return composedClassConstructor;
// }

// function extend<T, U>(first: T, second: U): T & U {
//   let result = <T & U>{};
//   for (let id in first) {
//     (<any>result)[id] = (<any>first)[id];
//   }
//   for (let id in second) {
//     if (!result.hasOwnProperty(id)) {
//       (<any>result)[id] = (<any>second)[id];
//     }
//   }
//   return result;
// }

/**
 * Copy properties of source object to target object excluding constructor.
 * If a property with the same exists on the target it is NOT overwritten.
 *
 * @param target
 * @param source
 */
export function extend<T, S>(target: T, source: S): T & S {
  Object.getOwnPropertyNames(source).forEach(name => {
    if (name !== "constructor" && !target.hasOwnProperty(name)) {
      Object.defineProperty(target, name,
        Object.getOwnPropertyDescriptor(source, name));
    }
  });
  return <T & S>target;
}

// /**
//  * Copy properties of source object to target object excluding constructor.
//  * If a property with the same exists on the target it is NOT overwritten.
//  *
//  * @param target
//  * @param source
//  */
// export function extend<>(target: any, source: any) {
//   Object.getOwnPropertyNames(source).forEach(name => {
//     if (name !== "constructor" && !target.hasOwnProperty(name)) {
//       Object.defineProperty(target, name,
//         Object.getOwnPropertyDescriptor(source, name));
//     }
//   });
// }
