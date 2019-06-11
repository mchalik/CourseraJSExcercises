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


function functionName(func) {
    var result = /^function\s+([\w$]+)\s*\(/.exec(func.toString());
    return result[1];
}

function query(collection) {
    var filters = [];
    var selects = [];
    var newCollection = collection;

    for (var i = 0; i < arguments.length; i++) {
        if (functionName(arguments[i]) === 'filterIn') {
            filters.push(arguments[i]);
        } else if (func(arguments[i]) === 'select') {
            selects.push(arguments[i]);
        }
    }
    for (var i = 0; i < filters.length; i++) {
        newCollection = filters[i](newCollection);
    }
    for (var i = 0; i < selects.length; i++) {
        selects[i](newCollection);
    }
    return newCollection;
}

/**
 * @params {String[]}
 */

//     lib.select('name', 'gender', 'email'),
function select() {
    var acceptedProps = [];
    for (var i = 1; i < arguments.length; i++) {
        acceptedProps.push(arguments[i])
    }
    return function select(collection) {
        var newCollection = [];

        for (var i = 0; i < collection.length; i++) {
            var newObject = {};

            var currentCollectionKeys = Object.keys(collection[i]);

            for (var j = 1; j < acceptedProps; j++) {
                var propIndex = currentCollectionKeys.indexOf(acceptedProps[j]);
                if ( propIndex !== -1) {
                    newObject[acceptedProps[j]] = propIndex
                }
            }
            newCollection.push(newObject);

        }
    };
}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
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
//     lib.filterIn('favoriteFruit', ['Яблоко', 'Картофель'])
function filterIn(property, values) {
    // var filterObj = {};
    // filterObj[property] = values;
    return function filterIn(collection) {
        var newCollection = [];
        for (var i = 0; i < collection.length; i++) {
            var currentCollectionKeys = Object.keys(collection[i]);
            var valueIndex = currentCollectionKeys.indexOf(property);

            if (valueIndex !== -1) {
                var currentValue = collection[currentCollectionKeys[valueIndex]];

                if(values.indexOf(currentValue) !== -1) {
                    newCollection.push(JSON.parse(JSON.stringify(collection[i])))
                }
            }

        }
        return newCollection;
    };
}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};
