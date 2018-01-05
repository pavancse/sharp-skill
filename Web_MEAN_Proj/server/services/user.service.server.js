module.exports = function (app, userModel) {


    var bcrypt = require("bcrypt-nodejs");
    var passport = require('passport');
    var LocalStrategy = require('passport-local').Strategy;

    // var auth = authorized;

    passport.use('user',new LocalStrategy(localStrategy));
    passport.serializeUser(serializeUser);
    passport.deserializeUser(deserializeUser);



    app.post("/api/user/register", register);
    app.post("/api/user/login", passport.authenticate('user','local'), login);



    function localStrategy(username, password, done) {

        userModel.findUserByEmail(username)
            .then(
                function(user) {
                    if(user && bcrypt.compareSync(password, user.password)) {
                        return done(null, user);
                    } else {
                        return done(null, false);
                    }
                },
                function(err) {
                    if (err) { return done(err); }
                }
            );
    }


    function authorized (req, res, next) {
        if (!req.isAuthenticated()) {
            res.send(401);
        } else {
            next();
        }
    }

    function serializeUser(user, done) {
        done(null, user);
    }

    function deserializeUser(user, done) {
        userModel
            .findUserById(user._id)
            .then(
                function (user) {
                    done(null, user);
                },
                function (err) {
                    done(err, null);
                }
            );
    }

    function login(req, res) {
        // var user = req.body;
        // userModel
        //     .findUserByCredentials(user.username, user.password)
        //     .then(function (user) {
        //         res.json(user);
        //     }, function (err) {
        //         res.status(400).send(err);
        //     });
        var user = req.user;
        res.json(user);
    }

    function register(req, res) {
        var user = req.body;
        user.password = bcrypt.hashSync(user.password);
        console.log("register now"+user);
        userModel
            .createUser(user)
            .then(function(user){
            if(user){
                req.login(user, function(err) {
                    if(err) {
                        res.status(400).send(err);
                    } else {
                        res.json(user);
                    }
                });
            }
            console.log(user);
        });
    };
};