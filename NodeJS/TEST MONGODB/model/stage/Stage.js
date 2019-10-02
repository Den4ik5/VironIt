module.exports = class Stage {
    constructor(title, description, place) {
        this.title = title;
        this.description = description;
        this.place = place;
    }

    getTitle() {
        return this.title;
    }

    getDescription() {
        return this.description;
    }

    getPlace() {
        return this.place;
    }

    setId(id) {
        this.id = id;
    }

    getId() {
        return this.id;
    }
};