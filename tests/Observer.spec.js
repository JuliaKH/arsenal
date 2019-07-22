import Observable from "../src/components/sign-in/google-sign-in/Observable";
import Observer from "../src/components/sign-in/google-sign-in/Observer";

describe('Observer',  () => {
    let observable = null;
    let expectedResult;
    let observableMock;

    function getMock(Observable) {
        Object.getOwnPropertyNames(Observable.prototype).forEach(m => spyOn(Observable.prototype, m));

        return new Observable();
    }


    beforeEach(() => {
        // observable = new Observable();
        observableMock = getMock(Observable);
        expectedResult = () => 5
    });

    it("should call observer constructor with arguments",() => {
        let observer  = new Observer(expectedResult);

        expect(observer._behavior).toBe(expectedResult);
    });
    it("should call observer constructor without arguments",() => {
        let observer  = new Observer();

        expect(observer._behavior).toBe(null);
    });

    it("should notify observers",() => {
        let notifyResult;
        let behavior = (msg) => { notifyResult = msg};

        let observer  = new Observer(behavior);

        observableMock.subscribe(observer);
        observableMock.notifyObservers(5);

        expect(notifyResult).toEqual(5);
    });
});
