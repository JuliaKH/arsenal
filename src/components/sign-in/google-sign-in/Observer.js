export default class Observer {
  constructor(behavior) {
    this._behavior = behavior || null;
  }

  notify(msg) {
    this._behavior(msg);
  }

  set behavior(func) {
    this._behavior = func;
  }
}

