/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {
    var date = new Date(date);

    function subtractValue(date, value, timeUnit) {

        if (timeUnit === 'years') {
            date.setFullYear(date.getFullYear() - value);
            return date;
        }
        if (timeUnit === 'months') {
            date.setMonth(date.getMonth() - value);
            return date;
        }
        if (timeUnit === 'days') {
            date.setDate(date.getDate() - value);
            return date;
        }
        if (timeUnit === 'hours') {
            date.setHours(date.getHours() - value);
            return date;
        }
        if (timeUnit === 'minutes') {
            date.setMinutes(date.getMinutes() - value);
            return date
        }
        throw new SyntaxError('Неверная едеинца времени');
    }

    return {
        date: date,
        subtract: function (value, timeUnit) {
            if (value < 0) new SyntaxError('Нельзя передавать отрицательное число');
            this.date = subtractValue(this.date, value, timeUnit);
            console.log('subtract');
            console.log(this);
            return this;
        },
        add: function (value, timeUnit) {
            if (value < 0) new SyntaxError('Нельзя передавать отрицательное число');
            this.date = subtractValue(this.date, -value, timeUnit);
            console.log('add');
            console.log(this);
            return this;
        },
        toString: function () {
            return date;
        }
    };
};
