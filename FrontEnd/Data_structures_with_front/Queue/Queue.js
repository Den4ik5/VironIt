const PriorityQueue = (function(EventEmitterClass){
    class PriorityQueue extends EventEmitter{

        constructor() {
            super();
            this.storage = new Map();
            this.priorities = [];

        }

        push(priority, value) {
            this.storage.set(priority, value);
            this.priorities.push(priority);
            this.emit
        }

        _pop(key) {
            this.storage.delete(key);
        }

        removePriority(value) {
            this.priorities.forEach(function (item, id, array) {
                if (item === value) {
                    array.splice(id, 1);
                }
            })
        }

        _findMinimalPriority() {
            let min = this.priorities[0];
            this.priorities.forEach(function (item) {
                min = item < min ? item : min;
            });
            return min;
        }

        _findMaximalPriority() {
            let max = this.priorities[0];
            this.priorities.forEach(function (item) {
                max = item > max ? item : max;
            });
            return max;
        }

        extractMinimum() {
            let min = this._findMinimalPriority();
            while (this.storage.has(min)) {
                this.emit('extractMinimum',  this.storage.get(min));
                this._pop(min);
            }
            this.removePriority(min);
        }

        extractMaximum() {
            let max = this._findMaximalPriority();
            while (this.storage.has(max)) {
                this.emit('extractMaximum', this.storage.get(max));
                this._pop(max);
            }

            this.removePriority(max);
        }
    }
    return PriorityQueue;
})(EventEmitter);