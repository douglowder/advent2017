/*
--- Day 25 ---
 */

const io = require('./utils/io');

const solution1 = function(input) {
  return '';
};

const solution2 = function(input) {
  return '';
};

const advent25 = function(callback) {
  io.readInputAsString('./input25.txt', function(input) {
    let output = 'Day 25: ' + solution1(input) + ' ' + solution2(input);
    callback && callback(output);
  });
};

module.exports = advent25;
