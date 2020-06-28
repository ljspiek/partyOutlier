function findOutliers(int) {
  return int.slice(0, 3).reduce((a, b) => (b % 2 === 0 ? a : a + 1), 0) >= 2
    ? int.find((i) => i % 2 === 0)
    : int.find((i) => i % 2 !== 0);
}

console.log(findOutliers([0, 1, 2]));
