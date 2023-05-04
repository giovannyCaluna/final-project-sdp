"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const main_class_1 = require("../main-class");
const User_1 = require("../model/User");
const Product_1 = require("../model/Product");
module.exports = (passport, router) => {
    router.get('/', (req, res) => {
        res.status(404).send('This is not an available route, please try /promise or /observable.');
    });
    router.post('/login', (req, res, next) => {
        passport.authenticate('local', (err, user) => {
            if (err) {
                console.log('New Error', err);
                res.status(500).send('Internal server error.');
            }
            else {
                req.login(user, (error) => {
                    console.log(user);
                    if (error) {
                        console.log(error);
                        res.status(401).send('Incorrect username or password.');
                    }
                    else {
                        res.status(200).send(user);
                    }
                });
            }
        })(req, res, next);
    });
    router.post('/register', (req, res, next) => {
        const role = req.body.role;
        const userNIckname = req.body.userNIckname;
        const name = req.body.name;
        const lastName = req.body.lastName;
        const email = req.body.email;
        const password = req.body.password;
        const user = new User_1.User({ role: role, userNIckname: userNIckname, name: name, lastName: lastName, email: email, password: password });
        user.save().then(data => {
            res.status(200).send(data);
        }).catch(error => {
            res.status(500).send(error);
        });
    });
    router.post('/logout', (req, res, next) => {
        if (req.isAuthenticated()) {
            req.logout(() => {
            });
            res.status(200).send('Successfully logged out.');
        }
        else {
            res.status(500).send('User is not logged in.');
        }
    });
    router.get('/promise', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        let myClass = new main_class_1.MainClass();
        res.setHeader('Content-Type', 'text/html; charset=UTF-8');
        res.setHeader('Transfer-Encoding', 'chunked');
        res.write('Waiting for the result from Promise...\n');
        myClass.greetingPromise().then((data) => {
            res.write(data);
            res.status(200).end();
        }).catch((error) => {
            res.write(error);
            res.status(404).end();
        });
        /*
        // async-await (same as Promise above)
        try {
            const data = await myClass.greetingPromise();
            res.write(data);
            res.status(200).end();
        } catch (error: any) {
            res.write(error);
            res.status(404).end();
        } */
    }));
    router.get('/observable', (req, res) => {
        let myClass = new main_class_1.MainClass();
        res.setHeader('Content-Type', 'text/html; charset=UTF-8');
        res.setHeader('Transfer-Encoding', 'chunked');
        myClass.greetingObservable().subscribe((data) => {
            res.write(data);
        }, (error) => {
            res.status(404).end(error);
        }, () => {
            res.status(200).end();
        });
    });
    router.post('/product/register', (req, res, next) => {
        if (req.isAuthenticated()) {
            const name = req.body.name;
            const description = req.body.description;
            const category = req.body.category;
            const price = req.body.price;
            const user = req.body.seller;
            const image = req.body.image;
            const product = new Product_1.Product({ name: name, description: description, category: category, price: price, seller: user, image: image });
            product.save().then(data => {
                res.status(200).send(data);
            }).catch(error => {
                res.status(500).send(error);
            });
        }
        else {
            res.status(401).send('User is not logged in.');
        }
    });
    router.get('/product/products', (req, res, next) => {
        Product_1.Product.find({ available: { $not: { $eq: false } } })
            .then((data) => {
            let listProducts = data;
            listProducts.forEach((prod) => {
                console.log(prod.seller);
            });
            res.status(200).send(listProducts);
        })
            .catch((error) => res.status(400).send(error));
    });
    router.post('/product/updateState', (req, res, next) => {
        const name = req.body.name;
        if (req.isAuthenticated()) {
            Product_1.Product.updateMany({
                name: name
            }, { available: false }).then(result => {
                console.log("Product Update", result);
                res.status(200).send(result);
            });
        }
        else {
            res.status(401).send('User is not logged in.');
        }
    });
    ;
    router.post('/product/products', (req, res, next) => {
        const seller = req.body.userNIckname;
        if (req.isAuthenticated()) {
            Product_1.Product.find({
                $and: [
                    { seller: { $not: { $eq: seller } } },
                    { available: { $not: { $eq: false } } }
                ]
            })
                .then((data) => {
                let listProducts = data;
                listProducts.forEach((prod) => {
                    console.log(prod.seller);
                });
                res.status(200).send(listProducts);
            })
                .catch((error) => res.status(400).send(error));
        }
        else {
            res.status(401).send('User is not logged in.');
        }
    });
    router.post('/user/validateUser', (req, res, next) => {
        const userNIckname = req.body.userNIckname;
        User_1.User.find({ userNIckname: { $eq: userNIckname } })
            .then((data) => {
            res.status(200).send(data);
        }).catch((error) => res.status(400).send(error));
    });
    router.post('/user/validateMail', (req, res, next) => {
        const email = req.body.email;
        User_1.User.find({ email: { $eq: email } })
            .then((data) => {
            res.status(200).send(data);
        }).catch((error) => res.status(400).send(error));
    });
    return router;
};
