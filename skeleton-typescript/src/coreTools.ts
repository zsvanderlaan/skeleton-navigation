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

function extend<K, V>(target: Map<K, V>, options: Map<K, V>): Map<K, V> {

  if (!target || !options) { return target }

  for (const key in options) {
    if ( // this may not pick up inherited properties?
      (!hasProperty(options, key))
      || (!hasProperty(target, key)
      || (isInitialized(target, key))
      )
    ) {
      continue;
    }

    else { target[key] = options[key]; }
  }

  return target;
}











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
