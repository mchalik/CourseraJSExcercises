/**
 * @param {Number} hours
 * @param {Number} minutes
 * @returns {Boolean}
 */
module.exports = function (hours, minutes) {
    var hoursNum = Number(hours);
    var minutesNum = Number(minutes);

    if (!Number.isInteger(hoursNum) || !Number.isInteger(minutesNum)) return false;

    var isHoursValid = hoursNum >= 0 && hoursNum < 24;
    var isMinutesValid = minutesNum >= 0 && minutesNum < 60;

    return isMinutesValid && isHoursValid;
};