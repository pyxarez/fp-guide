const { isEqual } = require('lodash/fp');

const values = [4, 2, 13, 7, 12, 45, 12, 78, 9, 3, 2];
const needToBe = [2, 2, 3, 4, 7, 9, 12, 12, 13, 45, 78];

const sort = (values, from = 0, to = values.length - 1) => {
  if (values.length <= 1 || to - from <= 0) return;

  let pivot = to - Math.round(((to - from) / 2));

  for (let i = from; i <= to; i++) {
    let temp = values[pivot];

    if (values[i] < temp && i > pivot) {
      values[pivot] = values[i];
      values[i] = values[pivot + 1];
      values[pivot + 1] = temp;
      pivot++;
    } else if (values[i] >= temp && i < pivot) {
      values[pivot] = values[i];
      values[i] = values[pivot - 1];
      values[pivot - 1] = temp;
      pivot--;
    }
  }

  sort(values, from, pivot - 1);
  sort(values, pivot + 1, to);
  return values
};

console.log(sort([2, 4, 45, 12]));
console.log(sort(values));

console.log(isEqual(values, needToBe))
