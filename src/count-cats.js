module.exports = function countCats(matrix) {
  let catsNum = 0;
  matrix.forEach(function(item) {
    catsNum += item.filter(item => item === "^^").length;
  });
  return catsNum;
};
