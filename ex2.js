//create array of strings
var tasksArray = [];
//create function addTask
function addTask(task) {
    var length = tasksArray.push(task);
    console.log(task + " has been added to list!");
    return length;
} //addTask
//create function listAllTasks
function listAllTasks() {
    console.log("\nList Items:");
    for (var i = 0; i < tasksArray.length; i++) {
        console.log("Task " + (i + 1) + ": " + tasksArray[i]);
    }
    console.log("");
} //listAllTasks
//create function deleteTask
function deleteTask(task) {
    for (var i = 0; i < tasksArray.length; i++) {
        var index = tasksArray.indexOf(task);
        tasksArray.splice(index, 1);
    }
    return tasksArray.length;
}
//test methods
addTask("Buy Eggs");
listAllTasks();
addTask("Be Silly");
listAllTasks();
deleteTask("Be silly");
listAllTasks();
