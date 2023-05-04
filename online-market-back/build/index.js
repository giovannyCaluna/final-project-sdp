"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const passport_1 = __importDefault(require("passport"));
const passport_local_1 = __importDefault(require("passport-local"));
const express_session_1 = __importDefault(require("express-session"));
const User_1 = require("./model/User");
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 3000;
const dbUrl = 'mongodb://localhost:5000/my_db';
mongoose_1.default.connect(dbUrl).then(_ => {
    console.log('Successfully connected to MongoDB');
}).catch(error => {
    console.log(error);
});
// const whiteList = ['http://localhost:4200'];
const whiteList = ['*'];
const corsOptions = {
    origin: (origin, callback) => {
        if (whiteList.indexOf(origin) !== -1 || whiteList.includes('*')) {
            callback(null, true);
        }
        else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true
};
app.use((0, cors_1.default)(corsOptions));
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, cookie_parser_1.default)());
passport_1.default.serializeUser((user, done) => {
    console.log('user is serialized', user);
    done(null, user);
});
passport_1.default.deserializeUser((user, done) => {
    console.log('user is deserialized', user);
    done(null, user);
});
// passport.use('local', new passportLocal.Strategy((email, password, done) => {
//     /* if (email === 'test@test.com' && password === 'testpw') {
//         return done(null, new User(email, password));
//     } else {
//         return done('Incorrect username or password. Please, try it again!');
//     } */
//     User.findOne({ email: email }).then((user: User) => {
//         if (!user) {
//             return done(null, undefined);
//         } (password, (err: any, isMatch: boolean) => {
//             if (err) {
//                 return done(err);
//             }
//             return done(null, user);
//         });
//     }).catch(error => {
//         return done(error)
//     });
// }));
passport_1.default.use('local', new passport_local_1.default.Strategy((email, password, done) => {
    /* if (email === 'test@test.com' && password === 'testpw') {
        return done(null, new User(email, password));
    } else {
        return done('Incorrect username or password. Please, try it again!');
    } */
    // db query
    User_1.User.findOne({ email: email }, (err, user) => {
        if (err) {
            return done(err);
        }
        if (!user) {
            return done(null, undefined);
        }
        user.comparePassword(password, (err, isMatch) => {
            if (err) {
                return done(err);
            }
            return done(null, user);
        });
    });
}));
app.use((0, express_session_1.default)({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: false
}));
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
app.use('/app', require('./routes/routes')(passport_1.default, express_1.default.Router()));
app.listen(port, () => {
    console.log('App is listening on port 3000...');
});
