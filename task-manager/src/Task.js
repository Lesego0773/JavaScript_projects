export default class Task {

    constructor(id, title, description) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.completed = false;
    }

    markAsCompleted() {
        this.completed = true;
    }
}
