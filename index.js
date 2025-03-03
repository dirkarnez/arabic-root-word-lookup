class RegExp1 extends RegExp {
  [Symbol.match](str) {
    const result = RegExp.prototype[Symbol.match].call(this, str);
    if (result) {
      return "VALID";
    }
    return "INVALID";
  }
}
const a = "ك";
const b = "ت";
const c = "ب";
console.log("كَتَبَ".match(new RegExp1(`${a}.*${b}.*${c}`)));
