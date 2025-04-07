import TaskManager from './TaskManager';

//Initializing the TaskManager
const taskManager = new TaskManager();

//Adding Task
taskManager.addTask('Complete the project report', '2023-10-15', 'High');
taskManager.addTask('Prepare for the meeting', '2023-10-12', 'Medium');

// Marking the first task as completed
taskManager.completeTask(0); 

// Displaying all tasks
console.log('All Tasks:');
console.log(taskManager.getTasks());

// Displaying completed tasks
console.log('Completed Tasks:');
console.log(taskManager.getCompletedTasks());
