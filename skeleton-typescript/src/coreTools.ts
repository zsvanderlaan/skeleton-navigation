const hasOwnProperty = Object.prototype.hasOwnProperty;

// export function mapIsEqualTo<T>(map1: Map<T>, map2: Map<T>): boolean {
//   if (!map1 || !map2) {
//     return map1 === map2;
//   }
//   return true;
//   return containsAll(map1, map2) && containsAll(map2, map1);
// }
//

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

export function autoconfigure(potentialTarget?: any): any {

  // todo: implement me
  // implementation goal for this function:
  // extend this.configuration with new ClassConfiguration()
  //
  // We can accomplish this by using typescript reflection, as is done in other aurelia decorators
}

export function log(target: Function, key: string, descriptor: any) {

  // save a reference to the original method
  // this way we keep the values currently in the
  // descriptor and don't overwrite what another
  // decorator might have done to the descriptor.
  var originalMethod = descriptor.value;

  //editing the descriptor/value parameter
  descriptor.value =  function (...args: any[]) {
    var a = args.map(a => JSON.stringify(a)).join();
    // note usage of originalMethod here
    var result = originalMethod.apply(this, args);
    var r = JSON.stringify(result);
    console.log(`Call: ${key}(${a}) => ${r}`);
    return result;
  }

  // return edited descriptor as opposed to overwriting
  // the descriptor by returning a new descriptor
  return descriptor;
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
