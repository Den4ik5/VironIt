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

    pop(key){
        this.storage.delete(key);
    }
    removePriority(value){
        this.priorities.forEach(function (item, id, array) {
            if(item===value){
                array.splice(id, 1);
            }
        })
    }

    findMinimalPriority(){
        let min = this.priorities[0];
        this.priorities.forEach(function (item) {
            min = item < min ? item : min;
        });
        return min;
    }

    findMaximalPriority(){
        let max = this.priorities[0];
        this.priorities.forEach(function (item) {
            max = item > max ? item : max;
        });
        return max;
    }
    extractMinimum() {
        let min = this.findMinimalPriority();
        while(this.storage.has(min)){
            console.log(this.storage.get(min));
            this.pop(min);
        }
        this.removePriority(min);

    }
    extractMaximum(){
        let max = this.findMaximalPriority();
        while (this.storage.has(max)) {
            console.log(this.storage.get(max));
            this.pop(max);
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

