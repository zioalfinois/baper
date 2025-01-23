const values = [1, 2, 3, 4, 5, 6];

const value = values.find(function (elemen) {
  return elemen <5;
});

console.log(value); // 1