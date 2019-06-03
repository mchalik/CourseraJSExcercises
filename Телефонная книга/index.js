// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
    var words = command.split(' ');
    var commandName = words[0];

    if (commandName === 'ADD') return addContact(words[1], words[2]);
    if (commandName === 'REMOVE_PHONE') return remove(words[1]);
    if (commandName === 'SHOW') return showContacts();


    function addContact(person, numbers) {
        numbers = numbers.split(',');

        if (phoneBook.hasOwnProperty(person)) {
            for (var i = 0; i < numbers.length; i++) {
                var currentNumber = numbers[i];

                if (phoneBook[person].indexOf(currentNumber) === -1) phoneBook[person].push(currentNumber);
            }
        } else {
            phoneBook[person] = numbers;
        }
    }

    function remove(number) {
        var names = Object.keys(phoneBook);
        for (var i = 0; i < names.length; i++) {
            var currentPerson = names[i];
            var indexOfNumber = phoneBook[currentPerson].indexOf(number);

            if (indexOfNumber !== -1) {
                currentPerson.splice(indexOfNumber, 1);

                if (phoneBook[currentPerson].length === 0) delete phoneBook[currentPerson];

                return true;
            }
        }
        return false;
    }

    function showContacts() {
        var names = Object.keys(phoneBook);
        var output = [];

        names.sort();

        for (var i = 0; i < names.length; i++) {
            var currentPerson = [names[i];

            if (!phoneBook[currentPerson].length) continue;

            var str = '';
            str = currentPerson + ': '+ phoneBook[currentPerson].join(', ');
            output.push(str);
        }

        return names.map(function (name) {
            return name + ': ' + phoneBook[name].join(', ');
        });

    }
};