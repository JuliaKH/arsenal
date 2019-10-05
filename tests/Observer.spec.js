import Observer from "../src/components/sign-in/google-sign-in/Observer";

describe('Observer',  () => {
    let expectedResult;
    let observableMock;


    beforeEach(() => {
        observableMock = {
            notifyObservers: jasmine.createSpy('notifyObservers'),
            subscribe: jasmine.createSpy('subscribe')
        }
    });

    it("should call observer constructor with arguments",() => {
        expectedResult = () => 5;
        let observer  = new Observer(expectedResult);

        expect(observer._behavior).toBe(expectedResult);
    });
    it("should call observer constructor without arguments",() => {
        expectedResult = () => 5;
        let observer  = new Observer();

        expect(observer._behavior).toBe(null);
    });

    it("should notify observers with notifyObservers()",() => {
        let notifyResult;
        let behavior = (msg) => { notifyResult = msg};

        let observer  = new Observer(behavior);

        observableMock.subscribe(observer);
        observer.notify('data');

        expect(notifyResult).toEqual('data');
    });
});
