/**
 * Copy properties of source object to target object excluding constructor.
 * If a property with the same exists on the target it is NOT overwritten.
 *
 * @param target
 * @param source
 */
function extend(target:any, source:any) {
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
export function compose(...mixins:any[]) {

  // our constructor function that will be called every time a new composed object is created
  var ctor = function (_dependencies:any, _configuration:any) {

    // apply dependencies given to the constructor
    var dependencies = Object.create(Object);
    if (_dependencies) {
      extend(dependencies, _dependencies);
    }

    // apply configuration given to the constructor
    var configuration = Object.create(Object);
    if (_configuration) {
      extend(configuration, _configuration);
    }

    // call the constructor function of all the mixins
    mixins.forEach(function (mixin) {
      mixin.call(this, dependencies, configuration);
    }, this);
  };

  // add all mixins properties and methods to the constructor prototype for all
  // created objects to have them
  mixins.forEach(function (mixin) {
    extend(ctor.prototype, mixin.prototype);
  });

  return ctor;
}
