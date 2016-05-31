const hasOwnProperty = Object.prototype.hasOwnProperty;

// export function mapIsEqualTo<T>(map1: Map<T>, map2: Map<T>): boolean {
//   if (!map1 || !map2) {
//     return map1 === map2;
//   }
//   return true;
//   return containsAll(map1, map2) && containsAll(map2, map1);
// }
//

/**
 * Copy properties of source object to target object excluding constructor.
 * If a property with the same exists on the target it is NOT overwritten.
 *
 * @param target
 * @param source
 */
export function extend(target:any, source:any) {
  Object.getOwnPropertyNames(source).forEach(name => {
    if (name !== "constructor" && !target.hasOwnProperty(name)) {
      Object.defineProperty(target, name,
        Object.getOwnPropertyDescriptor(source, name));
    }
  });
}


/**
 * Create a constructor function for a class implementing the given mixins.
 *
 * @param mixins array of classes to be mixed together. The constructor of those classes will receive the options given
 *               to the constructor of the composed object
 * @returns {{new(any): {}}} a constructor function
 */
export function compose(...mixins: Array<Function>): (_dependencies: any, _configuration: any) => any {

  debugger;

  // our constructor function that will be called every time a new composed object is created
  var composedClassConstructor = function (_dependencies: any, _configuration: any) {

    if (undefined === _dependencies) {
      _dependencies = Object.create(Object);
    }

    if (undefined === _configuration) {
      _configuration = Object.create(Object);
    }

    // apply the provided dependencies before going any further, as our object may depend on them
    extend(this, _dependencies);

    // Apply the default values of any configuration mixins to the configuration parameter
    mixins
      .filter(function (mixin) {
        return mixin.name.endsWith('Configuration');
      })
      .forEach(function (mixin) {
        mixin.call(_configuration);
      });

    // apply the computed configuration before going any further, as our object may depend on it
    extend(this, _configuration);

    // call the constructor function of all the mixins
    mixins.forEach(function (mixin) {
      // we already applied dependencies and configuration
      if (
        (mixin.name.endsWith('Dependencies'))
        || (mixin.name.endsWith('Configuration'))
      ) {
        return;
      }
      else {
        mixin.call(this, _dependencies, _configuration);
      }
    }, this);
  };

  // add all mixins properties and methods to the constructor prototype for all
  // created objects to have them
  mixins.forEach(function (mixin) {
    extend(composedClassConstructor.prototype, mixin.prototype);
  });

  return composedClassConstructor;
}




/**
 * JavaScript Rename Function
 * @author Nate Ferrero
 * @license Public Domain
 * @date Apr 5th, 2014
 */
export function renameFunction(fn, name) {
  return (new Function("return function (call) { return function " + name +
    " () { return call(this, arguments) }; };")())(Function.apply.bind(fn));
}

export function mapImplementsContract<K, V>(map: Map<K, V>, contract: Map<K, V>): boolean {

  if (!map || !contract) {
    return map === contract;
  }

  for (const key in contract) {
    // this may not pick up inherited properties?
    if (!hasProperty(contract, key)) { continue; }

    if (
      !hasProperty(map, key)
      || (typeof map[key] !== typeof contract[key])
    ) {
      return false;
    }
  }
  return true;
}

export function isInitialized<K, V>(map: Map<K, V>, key: string): boolean {
  return (undefined !== map[key]);
}

export function hasProperty<K, V>(map: Map<K, V>, key: string): boolean {
  return hasOwnProperty.call(map, key);
}

export function sample(obj, src) {
  for (var key in src) {
    if (src.hasOwnProperty(key)) obj[key] = src[key];
  }
  return obj;
}

export function applyConfiguration(target: Object, options: Object) {
  return extend(target as Map<string, any>, options as Map<string,any>)
}

// function extend<K, V>(target: Map<K, V>, options: Map<K, V>): Map<K, V> {
//
//   if (!target || !options) { return target }
//
//   for (const key in options) {
//     if ( // this may not pick up inherited properties?
//       (!hasProperty(options, key))
//       || (!hasProperty(target, key)
//       || (isInitialized(target, key))
//       )
//     ) {
//       continue;
//     }
//
//     else { target[key] = options[key]; }
//   }
//
//   return target;
// }











// export function clone(): any {
//   var cloneObj = new (<any>this.constructor)(); // line fixed
//   for (var attribut in this) {
//     if (typeof this[attribut] === "object") {
//       cloneObj[attribut] = this.clone();
//     } else {
//       cloneObj[attribut] = this[attribut];
//     }
//   }
//   return cloneObj;
// }
