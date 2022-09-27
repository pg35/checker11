export function makeEnum(arr) {
  let obj = {};
  for (let val of arr) {
    obj[val] = val; //Symbol(val);
  }
  return Object.freeze(obj);
}
