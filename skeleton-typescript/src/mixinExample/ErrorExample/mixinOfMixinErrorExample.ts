// /**
//  * Goal: Allow object to be composed from other objects.
//  * Error: Base constructors must all have the same return type.
//  * On: class DropableViewModel extends IComposedDropableViewModel
//  *
//  * This error is confusing to me because IComposedDropableViewModel
//  * extends IViewModel through the inheritance chain, and so is
//  * guaranteed to have all the properties of the base type.
//  *
//  * Sample: https://www.typescriptlang.org/play/index.html#src=%2F**%0D%0A%20*%20Goal%3A%20Allow%20object%20to%20be%20composed%20from%20other%20objects.%0D%0A%20*%20Error%3A%20Base%20constructors%20must%20all%20have%20the%20same%20return%20type.%0D%0A%20*%20On%3A%20class%20DropableViewModel%20extends%20IComposedDropableViewModel%0D%0A%20*%0D%0A%20*%20This%20error%20is%20confusing%20to%20me%20because%20IComposedDropableViewModel%0D%0A%20*%20extends%20IViewModel%20through%20the%20inheritance%20chain%2C%20and%20so%20is%0D%0A%20*%20guaranteed%20to%20have%20all%20the%20properties%20of%20the%20base%20type.%0D%0A%20*%0D%0A%20*%2F%0D%0A%0D%0A%0D%0Aclass%20Activatable%20%7B%0D%0A%0D%0A%20%20%20%20constructor()%20%7B%7D%0D%0A%20%20%20%20%0D%0A%20%20%20%20isActive%20%3D%20false%3B%0D%0A%20%20%20%20%0D%0A%20%20%20%20activate()%20%7B%20this.isActive%20%3D%20true%3B%20%7D%0D%0A%20%20%20%20deactivate()%20%7B%20this.isActive%20%3D%20false%3B%20%7D%0D%0A%7D%0D%0A%0D%0A%0D%0Aclass%20Hideable%20%7B%0D%0A%0D%0A%20%20%20%20constructor()%20%7B%7D%0D%0A%20%20%20%20%0D%0A%20%20%20%20isHidden%20%3D%20false%3B%0D%0A%20%20%20%20%0D%0A%20%20%20%20hide()%20%7B%20this.isHidden%20%3D%20true%3B%20%7D%0D%0A%20%20%20%20show()%20%7B%20this.isHidden%20%3D%20false%3B%20%7D%0D%0A%7D%0D%0A%0D%0A%0D%0Aclass%20Dropable%20%7B%0D%0A%0D%0A%20%20%20%20constructor()%20%7B%7D%0D%0A%0D%0A%20%20%20%20isDropped%20%3D%20false%3B%0D%0A%0D%0A%20%20%20%20drop()%20%7B%20this.isDropped%20%3D%20true%3B%20%7D%0D%0A%20%20%20%20pickup()%20%7B%20this.isDropped%20%3D%20false%3B%20%7D%0D%0A%7D%0D%0A%0D%0A%2F%2F%20Define%20an%20interface%20with%20a%20base%20constructor.%0D%0A%2F%2F%20The%20base%20constructor%20returns%20IViewModel.%0D%0Ainterface%20IViewModel%20extends%20Activatable%2C%20Hideable%20%7B%0D%0A%0D%0A%20%20%20%20new()%3A%20IViewModel%3B%0D%0A%20%20%20%20()%3A%20void%3B%0D%0A%0D%0A%20%20%20%20onActivate()%3B%0D%0A%20%20%20%20onDeactivate()%3B%0D%0A%7D%0D%0A%0D%0A%2F%2F%20Here%20I%20am%20telling%20typescript%20ComposedViewModel%20IS%20IViewModel%0D%0Alet%20ComposedViewModel%20%3D%20compose(Activatable%2C%20Hideable)%20as%20IViewModel%3B%0D%0A%0D%0A%0D%0Aclass%20ViewModel%20extends%20ComposedViewModel%20%7B%0D%0A%0D%0A%20%20%20%20constructor()%20%7B%20super()%3B%20%7D%0D%0A%0D%0A%20%20%20%20onActivate()%20%7B%20this.show()%3B%20%7D%0D%0A%20%20%20%20onDeactivate()%20%7B%20this.hide()%3B%20%7D%0D%0A%7D%0D%0A%0D%0A%2F%2F%20Define%20an%20interface%20with%20a%20base%20constructor.%0D%0A%2F%2F%20The%20base%20constructor%20returns%20IDropableViewModel.%0D%0A%2F%2F%20We%20know%20for%20a%20fact%20that%20IDropableViewModel%20must%20have%20all%20properties%20of%20IViewModel%0D%0A%2F%2F%20This%20is%20because%20IDropableViewModel%20extends%20ViewModel%0D%0A%2F%2F%20And%20ViewModel%20extends%20ComposedViewModel%0D%0A%2F%2F%20And%20ComposedViewModel%20IS%20IViewModel%0D%0Ainterface%20IDropableViewModel%20extends%20ViewModel%2C%20Dropable%20%7B%0D%0A%0D%0A%20%20%20%20new()%3A%20IDropableViewModel%20%2F%2F%20Base%20constructor.%20Returns%20IDropableViewModel%0D%0A%20%20%20%20()%3A%20void%3B%0D%0A%0D%0A%20%20%20%20onDrop()%0D%0A%20%20%20%20onPickup()%0D%0A%7D%0D%0A%0D%0A%0D%0Alet%20IComposedDropableViewModel%20%3D%20compose(ViewModel%2C%20Dropable)%20as%20IDropableViewModel%3B%0D%0A%0D%0A%0D%0Aclass%20DropableViewModel%20extends%0D%0A%20%20%20%20IComposedDropableViewModel%20%2F*Error%20Here%3A%20Base%20constructors%20must%20all%20have%20the%20same%20return%20type%20*%2F%20%7B%0D%0A%0D%0A%20%20%20%20constructor(%20)%20%7B%20super()%3B%20%7D%0D%0A%0D%0A%20%20%20%20onDrop()%20%7B%20this.activate()%3B%20%7D%0D%0A%20%20%20%20onPickup()%20%7B%20this.deactivate()%3B%20%7D%0D%0A%7D%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A%2F%2F%20Returns%20a%20constructor%20for%20a%20class%20implementing%20mixins.%0D%0Aexport%20function%20compose(...mixins%3A%20Array%3CFunction%3E)%3A%20()%20%3D%3E%20any%20%7B%0D%0A%0D%0A%20%20%20%20%2F%2F%20the%20constructor%20that%20will%20be%20called%20every%20time%20a%20new%20composed%20object%20is%20created%0D%0A%20%20%20%20var%20composedClass%20%3D%20function%20()%20%7B%0D%0A%20%20%20%20%20%20%20%20%2F%2F%20call%20the%20constructor%20function%20of%20all%20the%20mixins%0D%0A%20%20%20%20%20%20%20%20mixins.forEach(function%20(mixin)%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20mixin.call(this)%3B%0D%0A%20%20%20%20%20%20%20%20%7D%2C%20this)%3B%0D%0A%20%20%20%20%7D%3B%0D%0A%0D%0A%20%20%20%20%2F%2F%20copy%20the%20mixin%20properties%20to%20the%20composed%20class%0D%0A%20%20%20%20mixins.forEach(function%20(mixin)%20%7B%0D%0A%20%20%20%20%20%20%20%20Object.getOwnPropertyNames(mixin.prototype).forEach(name%20%3D%3E%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20(!composedClass.prototype.hasOwnProperty(name))%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Object.defineProperty(composedClass.prototype%2C%20name%2C%20Object.getOwnPropertyDescriptor(mixin%2C%20name))%3B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0D%0A%20%20%20%20%20%20%20%20%7D)%3B%0D%0A%20%20%20%20%7D)%3B%0D%0A%0D%0A%20%20%20%20return%20composedClass%3B%0D%0A%7D
//  *
//  */
//
//
// class Activatable {
//
//     constructor() {}
//
//     isActive = false;
//
//     activate() { this.isActive = true; }
//     deactivate() { this.isActive = false; }
// }
//
//
// class Hideable {
//
//     constructor() {}
//
//     isHidden = false;
//
//     hide() { this.isHidden = true; }
//     show() { this.isHidden = false; }
// }
//
//
// class Dropable {
//
//     constructor() {}
//
//     isDropped = false;
//
//     drop() { this.isDropped = true; }
//     pickup() { this.isDropped = false; }
// }
//
// // Define an interface with a base constructor.
// // The base constructor returns IViewModel.
// interface IViewModel extends Activatable, Hideable {
//
//     new(): IViewModel;
//     (): void;
//
//     onActivate();
//     onDeactivate();
// }
//
// // Here I am telling typescript ComposedViewModel IS IViewModel
// let ComposedViewModel = compose(Activatable, Hideable) as IViewModel;
//
//
// class ViewModel extends ComposedViewModel {
//
//     constructor() { super(); }
//
//     onActivate() { this.show(); }
//     onDeactivate() { this.hide(); }
// }
//
// // Define an interface with a base constructor.
// // The base constructor returns IDropableViewModel.
// // We know for a fact that IDropableViewModel must have all properties of IViewModel
// // This is because IDropableViewModel extends ViewModel
// // And ViewModel extends ComposedViewModel
// // And ComposedViewModel IS IViewModel
// interface IDropableViewModel extends ViewModel, Dropable {
//
//     new(): IDropableViewModel // Base constructor. Returns IDropableViewModel
//     (): void;
//
//     onDrop()
//     onPickup()
// }
//
//
// let IComposedDropableViewModel = compose(ViewModel, Dropable) as IDropableViewModel;
//
//
// class DropableViewModel extends
//     IComposedDropableViewModel /*Error Here: Base constructors must all have the same return type */ {
//
//     constructor( ) { super(); }
//
//     onDrop() { this.activate(); }
//     onPickup() { this.deactivate(); }
// }
//
//
//
//
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