/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
    var words = tweet.split(' ');
    return words.filter(hashtagFilter)
                .map(getRidHash);

};

function hashtagFilter(arr) {
    return arr.startsWith('#');
}
function getRidHash(str) {
    return str.slice(1);
}