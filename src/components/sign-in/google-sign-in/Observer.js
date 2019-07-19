export class Observer {
  constructor(behavior) {
    // subject.registerObserver(this);
    this._behavior = behavior || null;
    // this.subscribers = [];
  }

  // notify(data) {
  //   this._behavior.forEach(subscriber => subscriber(data));
  // }


  notify(msg) {
    this._behavior(msg);
  }

  set behavior(func) {
    this._behavior = func;
  }
}

// export { Observer };
