// import  SignInObservable  from '../src/components/sign-in/google-sign-in/Observable';
// import {signInFormCloseObserver} from "../src/components/sign-in/google-sign-in/google-sign-in";

import Observable from "../src/components/sign-in/google-sign-in/Observable";
import Observer from "../src/components/sign-in/google-sign-in/Observer";

describe("Observable", () => {
    // let obs  = null;
    // // let observers = [];
    // beforeEach(function() {
    //     obs = {
    //         observers: [],
    //         val: 1,
    //         foo: function(value) {this.val = value},
    //         subscribe: function (subscriber) {
    //             this.observers.push(subscriber);
    //         },
    //         unsubscribeObserver(observer) {
    //             this._observers = this._observers.filter(obs => obs !== observer);
    //         }
    //     };
    //     spyOn(obs, 'subscribe');
    //     spyOn(obs, 'unsubscribeObserver');
    //
    // });
    //
    // it("tracks that the subscribe was called", () => {
    //     obs.subscribe(function () {});
    //     expect(obs.subscribe).toHaveBeenCalled();
    // });
    // it("tracks that the subscribe was called 3 times", function() {
    //     obs.subscribe(function () {});
    //     obs.subscribe(function () {});
    //     obs.subscribe(function () {});
    //     expect(obs.subscribe).toHaveBeenCalledTimes(3);
    // });
    // it("tracks that the spy was called 3 times", function() {
    //     spyOn(obs, 'push');
    //     obs.subscribe('123');
    //     expect(obs.observers.length).toEqual(1);
    // });
    //
    // it("tracks that the unsubscribeObserver was called", function() {
    //     obs.unsubscribeObserver(function () {});
    //     expect(obs.unsubscribeObserver).toHaveBeenCalled();
    // });
    // it("val", function() {
    //     obs.foo(5);
    //     expect(obs.val).toEqual(5);
    // });
    let obs = null;
    beforeEach(function() {obs = new Observable()} );
    it("should push the observer", function() {
        // let obs = new Observable();
        obs.subscribe(function () {});
        obs.subscribe(function () {});
        expect(obs._observers.length).toEqual(2);
    });
    it("should unpush the observer", function() {
        obs.subscribe('123');
        obs.subscribe('333');
        obs.subscribe('555');
        obs.unsubscribeObserver('123');
        expect(obs._observers.length).toEqual(2);
    });
    // it("should notify observers", function() {
    //     let observer  = new Observer(function () {return 5});
    //     obs.subscribe(observer);
    //     obs.notifyObservers('123');
    //     expect(observer._behavior).toBe(function () {return 5});
    // });


});
