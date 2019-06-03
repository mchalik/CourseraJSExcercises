// Встроенный в Node.JS модуль для проверок
var assert = require('assert');

// Подключаем свою функцию
var getHashTags = require('./index.js');

assert.deepEqual(
    getHashTags(''),
    [],
    'Строка "Прохожу курс на #coursera по #javascript"' +
    ' должна содержать хэштеги "coursera, javascript"'
);

console.info('OK!');
