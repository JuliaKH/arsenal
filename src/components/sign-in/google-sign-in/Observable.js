export class SignInObservable {
    constructor() {
        this._observers = [];
    }

    subscribe(subscriber) {
        this._observers.push(subscriber);
    }
    registerObserver(observer) {
        this._observers.push(observer);
    }

    unregisterObserver(observer) {
        this._observers = this._observers.filter(obs => obs !== observer);
    }

    notifyObservers(data) {
        this._observers.forEach(observer => observer.notify(data));
    }
}

// export {SignInObservable}