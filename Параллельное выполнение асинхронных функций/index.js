/**
 * @param {Function[]} operations
 * @param {Function} callback
 */

var results = null;
var errors = null;

function pushToResults(error, result) {
    if (error) {
        if (errors === null) errors = [];
        errors.push(result);
    }
    if (result) {
        if (results === null) results = [];
        results.push(result);
    }
}


module.exports = function (operations, callback) {
    operations.forEach(function (operation) {
        operation(pushToResults);
    });
    callback(errors, results);
};