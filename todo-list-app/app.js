!#/bin/bash/env node

// SDelect DOM elements
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

//Loading tasks from local storage
document.addEventListener('DOMContentLoaded', loadTasks);

//Adding task event listener
addTaskButton.addEventListener('click', addTask);

//Adding a new task

function addTask(){
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task!');
        return;

    }



    const taskItem = createTaskElement(taskText);
    taskList.appendingChild(taskItem);

    saveTasksToLocalStorage(taskText);
    taskInput.value = '';


}


//Creating a task element
function createTaskElement(taskText) {
    const li = document.createElement('li');
    li.className = 'task-item';

    const span = document.createElement('span');
    span.textContent = taskText;
    span.addEventListener('click', toggleTaskCompletion);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-button';
    deleteButton.addEventListener('click', deleteTask);

    li.appendChild(span);
    li.appendChild(deleteButton);

    return li;

}

//Toggling task completion
function toggleTaskCompletion(event) {
    const taskItem = event.target.parentElement;
    taskItem.classList.toggle('completed');
}


//Deleting a task
function deleteTask(event) {
    const taskItem = event.target.parentElement;
    taskList.removeChild(taskItem);

    removeTaskFromLocalStorage(taskItem.firstChild.textContent);

}

//Saving tasks to local storage
function saveTasksToLocalStorage(taskText) {
    const tasks = getTasksFromLocalStorage();
    tasks.push(taskText);
    localStorage.setItem('task', JSON.stringify(tasks));
}

//Removing tasks from local storage
function removeTaskFromLocalStorage(taskText) {
    const tasks = getTasksFromLocalStorage();
    const updatedTasks = tasks.filter((task) => task !== taskText)
    localStorage.setItem('task', JSON.stringify(updatedTasks));
}

//Getting tasks from local storage
function getTasksFromLocalStorage() {
    return JSON.parse(localStorage.getItem('task')) || [];
}

//Loading tasks from local storage
function loadTasks() {
    const tasks = getTasksFromLocalStorage();
    tasks.forEach((taskText) => {
        const taskItem = createTaskElement(taskText);
        taskList.appendChild(taskItem);
    });

}
