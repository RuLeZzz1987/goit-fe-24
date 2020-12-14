class StringBuilder {
  constructor(str = '') {
    this._value = [str];
  }

  get value() {
    return this._value.join('');
  }

  set value(str) {
    this._value = [str];
  }

  append(str) {
    this._value.push(str);
  }

  prepend(str) {
    this._value.unshift(str);
  }

  pad(str) {
    this.append(str);
    this.prepend(str);
  }
}

console.log(typeof StringBuilder);
// 'function'



const builder = new StringBuilder();

builder.value = '.';

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='
