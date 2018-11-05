class View {
    constructor(render, store, el) {
        this.render = render;
        this.store = store;
        this.el = el;
        this.data = this.store.getValue();
    }

    notify() {
        this.data = this.store.getValue();
        this.render.call(this);
    }
}

export {View}