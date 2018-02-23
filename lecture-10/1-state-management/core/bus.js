export const EventBus = {

    _handlers: [],

    subscribe(eventID, action) {
        this._handlers.push({
            id: eventID,
            handler: action
        })
    },

    fire(eventID, data) {
        const handlers = this._handlers.filter(v => v.id === eventID);
        handlers.forEach(h => h.handler(data));
    }
};

