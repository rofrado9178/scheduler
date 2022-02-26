const array = [1, 2, 3, 4, 5];
const b = (prev) => {
  [...prev.slice(0, array.length - 1), 7];
};
console.log(b);
