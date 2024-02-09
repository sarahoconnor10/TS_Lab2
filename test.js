console.log("Hello Lab 2!");
//create array of strings
var tasksArray = [];
//create function addTask
function addTask(task) {
    var numTasks = tasksArray.length;
    //tasksArray.push(task);        /*ALSO WORKS*/
    tasksArray[numTasks - 1] = task;
    console.log("Task has been added to list!");
    numTasks++;
    return numTasks;
} //addTask
//create function listAllTasks
function listAllTasks() {
    for (var i = 0; i < tasksArray.length; i++) {
        console.log("Task " + (i + 1) + ": " + tasksArray[i]);
    }
} //listAllTasks
//create function deleteTask
function deleteTask(task) {
    for (var i = 0; i < tasksArray.length; i++) {
        if (tasksArray[i] == task) {
            delete tasksArray[i];
            console.log("Task has been deleted!");
        }
    }
    return tasksArray.length;
}
//test methods
addTask("Buy Eggs");
listAllTasks();
addTask("Be silly");
listAllTasks();
deleteTask("Be silly");
listAllTasks();
