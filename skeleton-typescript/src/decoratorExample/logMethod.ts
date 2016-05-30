export function logMethod(target: Function, key: string, descriptor: any) {
  var originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {

    var metadataKey = `__log_${key}_parameters`;
    var indices = target[metadataKey];

    if (Array.isArray(indices)) {

      for (var i = 0; i < args.length; i++) {

        if (indices.indexOf(i) !== -1) {

          var arg = args[i];
          var argStr = JSON.stringify(arg) || arg.toString();
          console.log(`${key} arg[${i}]: ${argStr}`);
        }
      }
      var result = originalMethod.apply(this, args);
      return result;
    }
    else {

      var a = args.map(a => (JSON.stringify(a) || a.toString())).join();
      var result = originalMethod.apply(this, args);
      var r = JSON.stringify(result);
      console.log(`Call: ${key}(${a}) => ${r}`);
      return result;
    }
  };
  return descriptor;
}
