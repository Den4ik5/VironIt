module.exports = class Race {
    constructor(time, description, title){
        this.time = time;
        this.description = description;
        this.title = title;
    }
    getTime(){
        return this.time;
    }
    getDescription(){
        return this.description;
    }
    getTitle(){
        return this.title;
    }
    setId(id){
        this.id = id;
    }
    getId(){
        return this.id;
    }
};