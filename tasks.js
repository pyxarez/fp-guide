const object = [
  { name: 'A', age: 10 },
  { name: 'B', age: 15 },
  { name: 'B', age: 14 },
  { name: 'A', age: 20 },
  { name: 'A', age: 15 },
];

const keys = ['name', 'key'];

// sortBy by with Insert sort;
// sortBy = (keys, a) => {
//   const l = a.length;
//   for (let i = 1; i < l; i++) {
//     const element = a[i];
//     for (let j = i - 1; j >= -1; j--) {
//       const tmp = a[j];
//       let order = false;
//
//       for (let i = 0; i < keys.length; i++) {
//           const key = keys[i];
//           if (tmp[key] > element[key]) {
//               order = true;
//               break;
//           }
//
//           if (tmp[key] < element[key]) {
//               break;
//           }
//       }
//
//       if (order) {
//           a[j + 1] = tmp;
//       } else {
//           a[j + 1] = element;
//           break;
//       }
//     }
//   }
// };

const sortBy = (keys, a) => a.sort((b, c) => {
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (b[key] < c[key]) return -1;
    if (b[key] > c[key]) return 1;
  }
  return 0;
});

sortBy(keys, object);

console.log(object);
