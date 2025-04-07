import Task from "./Task.js";

export default class TaskManager {
    constructor(){
        this.tasks = [];
        this.nextId = 1;
    }

    addTask(title, description) {
        const task = new Task(this.nextId++, title, description);
        this.tasks.push(task);
        
    }

    completeTask(id) {
        const task = this.tasks.find((task) => task.id === id);
        if (task) {
            task.markAsCompleted();
        }
    }

    getAllTasks() {
        return this.tasks;
    }

    getCompletedTasks() {
        return this.tasks.filter((task) => task.completed);
    }


}
