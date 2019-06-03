/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
    var lowerArr = [];
    var string = '';

    hashtags = hashtags.map(function (value) {
        return value.toLowerCase();
    });
    return hashtags.filter(function(value, index, array) {
        return array.indexOf(value) == index;
    }).join(', ');
};
