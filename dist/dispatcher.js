class Dispatcher {
    constructor() {
        this.stores = [];
    }

    register(store) {
        if(!store) throw new Error("Store is null");
        this.stores.push(store);
    }

    dispatch(action) {
        if(!this.stores.length) throw new Error("No Stores in dispatcher!");
        this.stores.forEach((store) => {
            store.update(action);
        })
    }
}

export {Dispatcher}