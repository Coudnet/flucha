import {Store} from "./store";
import {View} from "./view";
import {Dispatcher} from "./dispatcher";

class Flucha {
    constructor(props) {
        this.data = props.data;
        const actions = [];
        for (let key in props.actions) {
            actions.push({
                name: key,
                update: props.actions[key].update()
            })
        }
        this.store = new Store(props.data, actions);
        this.view = new View(props.render(), this.store, document.querySelector(props.el));
        this.store.subscribe(this.view);
        this.dispatcher = new Dispatcher();
        this.dispatcher.register(this.store);
    }

    emit(name, props) {
        this.dispatcher.dispatch({
            name: name,
            data: props
        });
    }
}

export {Flucha}