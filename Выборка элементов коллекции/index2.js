/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */



// // Коллекция данных
// var friends = [
//     {
//         name: 'Керри',
//         gender: 'Женский',
//         email: 'danamcgee@example.com',
//         favoriteFruit: 'Апельсин'
//     },
//     {
//         name: 'Стелла',
//         gender: 'Женский',
//         email: 'waltersguzman@example.com',
//         favoriteFruit: 'Картофель'
//     }
// ];
//
// // Выполняем выборку и фильтрацию с помощью нашего конструктора
// var result = lib.query(
//     friends,
//     lib.select('name', 'gender', 'email'),
//     lib.filterIn('favoriteFruit', ['Яблоко', 'Картофель'])
// );




function query(collection) {
    var collectionCopy = collection.slice();
    for (var i = 0; i < collectionCopy.length; i++) {

    }
    var possibleSelections = collectionCopy;
    var operationSelects = [];
    var operationFilters = [];
    for (var i = 1; i < arguments.length; i++) {
        if (arguments[i].splice) {
            operationSelects.push(arguments[i]);
        } else {
            operationFilters.push(arguments[i]);
        }
    }
    for (var i = 0; i < operationSelects; i++) {
        for (var j = 0; j < collectionCopy.length; j++) {
            for (var k = 0; k < operationSelects[i]; k++) {
                var persons = Object.keys(collectionCopy[j]);
                if (operationSelects[i][k].index)
            }
        }
    }

}

/**
 * @params {String[]}
 */
function select() {
    var acceptedProps = [];
    for (var i = 1; i < arguments.length; i++) {
        acceptedProps.push(arguments[i])
    }
    return acceptedProps;
}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {
    var filterObj = {};
    filterObj[property] = values;
    return filterObj;
}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};
