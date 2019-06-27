/**
 * @param {Function[]} operations
 * @param {Function} callback
 */

module.exports = function (operations, callback) {

    var promises = [];

    operations.forEach(function (operation) {
         promises.push(
             new Promise(function (resolve, reject)  {
                 operation(pushToResults);

                 function pushToResults(error, result) {
                     if (error) {
                         reject(error);
                     }
                     if (result) {
                         resolve(result);
                     }
                 }
             })
         )
    });
    Promise
        .all(promises)
        .then(function (result) {
                callback(null, result)
            },
            function (error) {
                callback(error)
            }
        );
};