// Встроенный в Node.JS модуль для проверок
var assert = require('assert');

// Подключаем свою функцию
var isValidTime = require('./index.js');

assert.equal(isValidTime(12.434, 30.23432), false);
assert.equal(isValidTime(23, 59), true);
assert.equal(isValidTime(0, 0), true);
assert.equal(isValidTime('0', '0'), true, 'Время 12:30 валидное.');
assert.equal(isValidTime('0', '0'), true, 'Время 12:30 валидное.');
assert.equal(isValidTime(12, 61), false, 'Время 12:61 невалидное');

console.info('OK!');
