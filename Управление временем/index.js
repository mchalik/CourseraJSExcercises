/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {
    var date  = new Date(date);
    return {
        subtract : function (value, timeUnit) {
            var date =
            return new Date()
        },
        add : function (value, timeUnit) {
            return
        }
    };

    function millisecondsFromTimeUnit(timeUnit) {
        var units = [];
        for (var i = 0; i <5; i++) {
            units[i] = 0;
        }

        if (timeUnit === 'years') units[0]=1;
        if (timeUnit === 'months') return minute;
        if (timeUnit === 'days') return minute;
        if (timeUnit === 'hours') return minute;
        if (timeUnit === 'minutes') return second;

        years
        months
        days
        hours
        minutes


        throw new TypeError('Ошибка единицы измерения времени');
    }
};
