import Observable from "../src/components/sign-in/google-sign-in/Observable";

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
        const observer = () => {};

        observable.subscribe(observer);
        observable.unsubscribeObserver(observer);

        expect(observable._observers.length).toEqual(0);
    });
    it("should notify observers with notify()",() => {
        const mockObserver = {
            notify: jasmine.createSpy('notify')
        };

        observable.subscribe(mockObserver);
        observable.notifyObservers('data');

        expect(mockObserver.notify).toHaveBeenCalled();
    });

});
