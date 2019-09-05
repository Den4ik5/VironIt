
const createStackManager = function (eeInstance) {
    return class StackManager {
        constructor(stack) {
            this.stack = stack;
        }
        push(value) {
            this.stack.push(value);
            eeInstance.emit('pushStackNode', value);
        }
        pop() {
            const value = this.stack.pop();
            eeInstance.emit('popStackNode', value);
        }
    }
};
