/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {
    date = new Date(date);

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
        throw new TypeError('Wrong time unit');
    }

    return {
        date: date,
        subtract: function (value, timeUnit) {
            if (value < 0) throw new TypeError('negative value');
            this.date = subtractValue(this.date, value, timeUnit);
            return this;
        },
        add: function (value, timeUnit) {
            if (value < 0) throw new TypeError('negative value');
            this.date = subtractValue(this.date, -value, timeUnit);
            return this;
        },
        get value() {
            var date = this.date;
            var year = date.getFullYear();
            var month = ('0' + (1 + date.getMonth())).slice(-2);
            var day = ('0' + date.getDate()).slice(-2);
            var hours = ('0' + date.getHours()).slice(-2);
            var minutes = ('0' + date.getMinutes()).slice(-2);
            return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes;
        }
    };
};