/*
--- Day 21 ---
 */

const io = require('./utils/io');

const solution1 = function(input) {
  return '';
};

const solution2 = function(input) {
  return '';
};

const advent21 = function(callback) {
  io.readInputAsString('./input21.txt', function(input) {
    let output = 'Day 21: ' + solution1(input) + ' ' + solution2(input);
    callback && callback(output);
  });
};

module.exports = advent21;
