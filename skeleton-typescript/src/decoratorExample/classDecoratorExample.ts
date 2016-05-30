// DO NOT RETURN DIFFERENT CONSTRUCTOR, EVER!!!
// you think you want to wrap the constructor
// what you really want to do is add a new class to the composition chain
//   example to log the class on instantiation
//   add the InstantiationLogger class as the final class in the composition chain
//   example to break before going through the inheritance chain
//   add the InstantiationDebugger class as the first class in the composition chain

// returning a different constructor messes with the exported method signature
// the exported method signature must stay the same for the Dependency Injection Engine
// further, it is bad form to wrap a constructor and return a different one.

export function AddTestProperty(target: Function): Function {
  Object.defineProperty(target.prototype, 'test', {
    value: function() {
      console.log('test call');
      return 'test result';
    }
  });
  return target;
}
