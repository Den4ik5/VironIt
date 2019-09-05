const Stack = (function(EventEmitterClass) {
    class Stack extends EventEmitterClass {
        constructor() {
            super();
            this._values = [];
        }

        push(value) {
            this._values.push(value);
            this.emit('pushStackNode', value);
            return this;
        }

        pop() {
            this._values.pop();
            this.emit('popStackNode', );
            return this._values;
        }
    }

    return Stack;
})(EventEmitter);



