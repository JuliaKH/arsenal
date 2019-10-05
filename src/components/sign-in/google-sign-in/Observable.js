export default class SignInObservable {
    constructor() {
        this._observers = [];
    }
    subscribe(subscriber) {
        this._observers.push(subscriber);
    }

    unsubscribeObserver(subscriber) {
        this._observers = this._observers.filter(obs => obs !== subscriber);
    }

    notifyObservers(data) {
        this._observers.forEach(observer => observer.notify(data));
    }
}
