const { curry, prop, compose } = require('lodash/fp');
const Maybe = require('maybe');

const match = curry((reg, str) => String.prototype.match.call(str, reg));
const map = curry((f, any_functor) => any_functor.map(f));
const maybe = curry((x, f, m) => m.isNothing() ? x : f(m.__value));

const add = curry((value, x) => x + value);
const log = x => console.log(x);

// const Maybe = x => {
//   const proto = {
//     isNothing() {
//       return this.__value === null || this.__value === undefined;
//     },
//     map(f) {
//       return this.isNothing() ? Maybe(null) : Maybe(f(this.__value));
//     },
//     inspect() {
//       return this.__value;
//     },
//   };
//
//   return Object.create(proto, {
//     __value: {
//       value: x
//     },
//   });
// };
//
// Maybe.of = (x) => Maybe(x);

const a = Maybe(() => Math.random() < 0.5 || undefined);

const range = x => {
  const a = new Array(x);
  a.fill(null)
  return a;
};

range(20).forEach(() => { log(a.value()); });
