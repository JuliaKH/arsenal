import Observable from "../src/components/sign-in/google-sign-in/Observable";
import Observer from "../src/components/sign-in/google-sign-in/Observer";

describe("Observable", () => {

    let observable = null;
    beforeEach(() =>  {
        observable = new Observable()
    });

    it("should add new observer",() =>  {
        const observer = () => {};

        observable.subscribe(observer);

        expect(observable._observers.length).toEqual(1);
    });
    it("should unsubscribe the observer",() => {
        const observer = () => 5;

        observable.subscribe(observer);
        observable.unsubscribeObserver(observer);

        expect(observable._observers.length).toEqual(0);
    });
    it("should notify observers with notifyObservers",() => {
        let behavior = (msg) =>  msg;
        let observer = new Observer(behavior);
        spyOn(observer, 'notify');

        observable.subscribe(observer);
        observable.notifyObservers('data');

        expect(observer.notify).toHaveBeenCalled();
    });

});
