/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
    minutes += interval;
    hours += Math.floor(minutes / 60);
    minutes %= 60;
    hours %=24;
    function timeToStrign(val) {
        return val >= 10 ? val : '0' + val;
    }
    return timeToStrign(hours)+ ':' + timeToStrign(minutes);

};
