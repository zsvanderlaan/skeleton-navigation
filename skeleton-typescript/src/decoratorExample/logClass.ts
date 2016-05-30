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

// this implementation is wrong, it modifies the constructor.
// find a way to implement which extends the class per our mixin example or use a mixin
// export function logClass(target: any) {
//
//   // save a reference to the original constructor
//   var original = target;
//
//   // a utility function to generate instances of a class
//   function construct(constructor, args) {
//     var c : any = function () {
//       return constructor.apply(this, args);
//     };
//     c.prototype = constructor.prototype;
//     return new c();
//   }
//
//   // the new constructor behaviour
//   var f : any = function (...args) {
//     console.log("New: " + original.name);
//     return construct(original, args);
//   };
//
//   // copy prototype so intanceof operator still works
//   f.prototype = original.prototype;
//
//   // return new constructor (will override original)
//   return f;
// }
