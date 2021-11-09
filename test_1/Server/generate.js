module.exports = function() {
    let faker = require("faker");
    let _ = require("lodash");
    return {
        people: _.times(100, function (n) {
            return {
                id: n,
                name: faker.name.findName(),
                avatar: faker.internet.avatar()
            }
        })
    }
}