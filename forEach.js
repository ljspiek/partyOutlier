function findOutlier(int) {
  let even = [],
    odd = [];
  int.forEach(function (num) {
    num % 2 != 0 ? odd.push(num) : even.push(num);
  });
  return odd.length > 1 ? even[0] : odd[0];
}

console.log(findOutlier([0, 1, 2]));
