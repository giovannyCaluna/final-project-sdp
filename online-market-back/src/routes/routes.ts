import { MainClass } from '../main-class';
import { NextFunction, Request, Response } from 'express';
import { User } from '../model/User';
import { IProduct, Product } from '../model/Product';

module.exports = (passport: any, router: any) => {

    router.get('/', (req: Request, res: Response) => {
        res.status(404).send('This is not an available route, please try /promise or /observable.');
    });

    router.post('/login', (req: Request, res: Response, next: NextFunction) => {
        passport.authenticate('local', (err: any, user: any) => {
            if (err) {
                console.log('New Error', err);
                res.status(500).send('Internal server error.');
            } else {
                req.login(user, (error) => {
                    console.log(user);

                    if (error) {
                        console.log(error);
                        res.status(401).send('Incorrect username or password.');
                    } else {
                        res.status(200).send(user);
                    }
                });
            }
        })(req, res, next);
    });

    router.post('/register', (req: Request, res: Response, next: NextFunction) => {
        const role = req.body.role;
        const userNIckname = req.body.userNIckname;
        const name = req.body.name;
        const lastName = req.body.lastName;
        const email = req.body.email;
        const password = req.body.password;
        const user = new User({ role: role, userNIckname: userNIckname, name: name, lastName: lastName, email: email, password: password });
        user.save().then(data => {
            res.status(200).send(data);
        }).catch(error => {
            res.status(500).send(error);
        });
    });

    router.post('/logout', (req: Request, res: Response, next: NextFunction) => {
        if (req.isAuthenticated()) {
            req.logout(() => {

            });
            res.status(200).send('Successfully logged out.');
        } else {
            res.status(500).send('User is not logged in.');
        }
    });

    router.get('/promise', async (req: Request, res: Response) => {
        let myClass = new MainClass();
        res.setHeader('Content-Type', 'text/html; charset=UTF-8');
        res.setHeader('Transfer-Encoding', 'chunked');
        res.write('Waiting for the result from Promise...\n');
        myClass.greetingPromise().then((data: string) => {
            res.write(data);
            res.status(200).end();
        }).catch((error: string) => {
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
    });

    router.get('/observable', (req: Request, res: Response) => {
        let myClass = new MainClass();
        res.setHeader('Content-Type', 'text/html; charset=UTF-8');
        res.setHeader('Transfer-Encoding', 'chunked');
        myClass.greetingObservable().subscribe((data: string) => {
            res.write(data);
        }, (error: string) => {
            res.status(404).end(error);
        }, () => {
            res.status(200).end();
        });
    });

    router.post('/product/register', (req: Request, res: Response, next: NextFunction) => {
        if (req.isAuthenticated()) {
            const name = req.body.name;
            const description = req.body.description;
            const category = req.body.category;
            const price = req.body.price;
            const user = req.body.seller;
            const image = req.body.image;
            const product = new Product({ name: name, description: description, category: category, price: price, seller: user, image: image });
            product.save().then(data => {
                res.status(200).send(data);
            }).catch(error => {
                res.status(500).send(error);
            });

        } else {
            res.status(401).send('User is not logged in.');
        }
    });

    router.get('/product/products', (req: Request, res: Response, next: NextFunction) => {

        Product.find({ available: { $not: { $eq: false } } })
            .then(
                (data) => {
                    let listProducts: Array<IProduct> = data;

                    listProducts.forEach((prod) => {
                        console.log(prod.seller);

                    });
                    res.status(200).send(listProducts);
                })
            .catch((error) => res.status(400).send(error));
    });

    router.post('/product/updateState', (req: Request, res: Response, next: NextFunction) => {

        const name = req.body.name;
        if (req.isAuthenticated()) {
            Product.updateMany({
                name: name
            }, { available: false }).then(result => {
                console.log("Product Update",result);
                res.status(200).send(result);
            });

        } else {
            res.status(401).send('User is not logged in.');
        }

    });;

    router.post('/product/products', (req: Request, res: Response, next: NextFunction) => {
        const seller = req.body.userNIckname;
        if (req.isAuthenticated()) {
            Product.find({
                
                $and: [
                    { seller: { $not: { $eq: seller } } },
                    { available: { $not: { $eq: false } } }
                ]
            })
                .then(
                    (data) => {
                        let listProducts: Array<IProduct> = data;
    
                        listProducts.forEach((prod) => {
                            console.log(prod.seller);
    
                        });
                        res.status(200).send(listProducts);
                    })
                .catch((error) => res.status(400).send(error));
        } else {
            res.status(401).send('User is not logged in.');
        }
        
    });

    router.post('/user/validateUser', (req: Request, res: Response, next: NextFunction) => {
        const userNIckname = req.body.userNIckname;
        User.find({ userNIckname: { $eq: userNIckname } })
            .then((data) => {
                res.status(200).send(data);
            }).catch((error) => res.status(400).send(error));
    });

    router.post('/user/validateMail', (req: Request, res: Response, next: NextFunction) => {
        const email = req.body.email;
        User.find({ email: { $eq: email } })
            .then((data) => {
                res.status(200).send(data);
            }).catch((error) => res.status(400).send(error));
    });


    return router;

};