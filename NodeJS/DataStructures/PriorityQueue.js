'use strict';
class PriorityQueue {

    constructor(){
        this.storage = new Map();
        this.priorities=[];

    }

    push(priority, value){
        this.storage.set(priority, value);
        this.priorities.push(priority);
    }

    _pop(key){
        this.storage.delete(key);
    }
    removePriority(value){
        this.priorities.forEach(function (item, id, array) {
            if(item===value){
                array.splice(id, 1);
            }
        })
    }

    _findMinimalPriority(){
        let min = this.priorities[0];
        this.priorities.forEach(function (item) {
            min = item < min ? item : min;
        });
        return min;
    }

    _findMaximalPriority(){
        let max = this.priorities[0];
        this.priorities.forEach(function (item) {
            max = item > max ? item : max;
        });
        return max;
    }
    extractMinimum() {
        let min = this._findMinimalPriority();
        while(this.storage.has(min)){
            console.log(this.storage.get(min));
            this._pop(min);
        }
        this.removePriority(min);

    }
    extractMaximum(){
        let max = this._findMaximalPriority();
        while (this.storage.has(max)) {
            console.log(this.storage.get(max));
            this._pop(max);
        }
        this.removePriority(max);
    }
}


let prior = new PriorityQueue();
prior.push(1, 4);
prior.push(3, 4);
prior.push(2, 4);
prior.extractMinimum();
prior.extractMaximum();
console.log(prior.priorities.length);

