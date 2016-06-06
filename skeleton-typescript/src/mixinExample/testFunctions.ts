// export function extend<T, M>(source: T, mixin: M): T & M {
//
//     let result = source as T & M;
//
//     Object.getOwnPropertyNames(mixin).forEach(name => {
//         if (name !== "constructor" && !source.hasOwnProperty(name)) {
//             Object.defineProperty(
//                 source
//                 , name
//                 , Object.getOwnPropertyDescriptor(mixin, name));
//         }
//     });
//
//     return result;
// }
//
// export function compose<T, M1, M2, M3, M4, M5, M6, M7, M8, M9>(
//         source, mixin1//, mixin2, mixin3, mixin4, mixin5, mixin6, mixin7, mixin8, mixin9
//     ): (dependencies: any, configuration: any) => T & M1 & M2 & M3 & M4 & M5 & M6 & M7 & M8 & M9 {
//
//     // our constructor function that will be called every time a new composed object is created
//     var composedClassConstructor = function (_dependencies: any, _configuration: any): T & M1 & M2 & M3 & M4 & M5 & M6 & M7 & M8 & M9 {
//
//         return {} as T & M1 & M2 & M3 & M4 & M5 & M6 & M7 & M8 & M9;
//     };
//
//     return composedClassConstructor;
// }
