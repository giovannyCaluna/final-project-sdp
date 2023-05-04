import { Observable, Subscriber } from 'rxjs';

export class MainClass {

    securityThreshold = 70;

    constructor() {
        console.log('It works');
    }

    greeting() {
        return "Please use /promise or /observable.";
    }

    // Promise, Observable (reactive programming), (callback)

    greetingPromise(): Promise<string> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const randAvailability = Math.random() * 100;
                if (randAvailability < this.securityThreshold) {
                    reject('Error: availability is ' + randAvailability.toString() + '%');
                } else {
                    resolve('Successful request, availability is: ' + randAvailability.toString() + '%');
                }
            }, 2000);
        });
    }

    greetingObservable(): Observable<string> {
        let counter = 0;
        return new Observable((subscriber: Subscriber<string>) => {
            subscriber.next('Waiting for response from database...\n');
            const interval = setInterval(() => {
                const randAvailability = Math.random() * 100;
                if (randAvailability < this.securityThreshold) {
                    subscriber.error('Error: availability is ' + randAvailability.toString() + '%');
                } else {
                    subscriber.next('Successful request, availability is: ' + randAvailability.toString() + '%');
                }
                counter++;
                console.log(counter);
                if (counter == 5) {
                    clearInterval(interval);
                    subscriber.complete();
                }
            }, 2000);
        });
    }
}