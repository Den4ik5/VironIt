
const EventEmitter = (function () {
    class EventEmitter {
        constructor() {
            this.callbackStore = {/* [eventName]: [callback1, callback2]*/};
        }

        on(eventName, callback) {
            this.callbackStore[eventName] = this.callbackStore[eventName] || [];
            this.callbackStore[eventName].push(callback);
            console.log(this.callbackStore);
        }

        emit(eventName, ...params) {
            if (!this.callbackStore[eventName]) {
                return;
            }
            this.callbackStore[eventName].forEach(callback => {
                callback(...params);
            })
        }
    }

    return EventEmitter;
})();