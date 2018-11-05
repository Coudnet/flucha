class Store {
    constructor(data, actionTypes) {
        this.data = data;
        this.actions = actionTypes;
        this.subscribers = [];
    }
    subscribe(subscriber) {
        this.subscribers.push(subscriber);
    }
    getValue() {
        return this.data;
    }
    update(action) {
        this.actions.forEach((currentActions) => {
            if(currentActions.name === action.name) {
                currentActions.update.call(this, action.data)
            }
        });
        this.notifyAll();
    }
    notifyAll() {
        if(!this.subscribers.length) return null;
        this.subscribers.forEach((subscriber) => {
            subscriber.notify();
        })
    }
}

export {Store};