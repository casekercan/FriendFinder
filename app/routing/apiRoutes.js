// Your `apiRoutes.js` file should contain two routes:

// * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
// * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
var path = require("path");
var friends = require("../data/friends.js");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {

        var curUser = req.body;
        var match;
        var diff = 50;

        for (i = 0; i < friends.length; i++) {
            var curDiff = 0;
            for (j = 0; j < 10; j++) {
                curDiff += Math.abs(friends[i].scores[j] - curUser.scores[j]);
            }
            if (curDiff <= diff) {
                diff = curDiff
                match = friends[i];
            } else {
                console.log(friends[i].name + "Score = " + curDiff + "Diff to beat is: " + diff)
            }

        }
        res.json(match)

    });


};


