// Встроенный в Node.JS модуль для проверок
var assert = require('assert');

// Подключаем свою функцию
var phoneBook = require('./index.js');

phoneBook('ADD Ivan 555,666');
phoneBook('ADD Alex 777');
phoneBook('ADD Alex 333');
phoneBook('REMOVE_PHONE 555');
console.log('удалили 555');
// console.log(phoneBook('SHOW'));
console.log('удалили 666');
phoneBook('REMOVE_PHONE 666');
console.log(phoneBook('SHOW'));
phoneBook('SHOW');
console.log(phoneBook('SHOW'));