// // Returns a constructor for a class implementing mixins.
// export function compose(...mixins: Array<Function>): () => any {
//
//     // the constructor that will be called every time a new composed object is created
//     var composedClass = function () {
//         // call the constructor function of all the mixins
//         mixins.forEach(function (mixin) {
//             mixin.call(this);
//         }, this);
//     };
//
//     // copy the mixin properties to the composed class
//     mixins.forEach(function (mixin) {
//         Object.getOwnPropertyNames(mixin.prototype).forEach(name => {
//             if (!composedClass.prototype.hasOwnProperty(name)) {
//                 Object.defineProperty(composedClass.prototype, name, Object.getOwnPropertyDescriptor(mixin, name));
//             }
//         });
//     });
//
//     return composedClass;
// }
