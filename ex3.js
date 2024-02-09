var toDoList = /** @class */ (function () {
    function toDoList() {
        this.Tasks = [];
    }
    toDoList.prototype.addTask = function (task) {
        var length = this.Tasks.push(task);
        console.log(task + " has been added to list!");
        return length;
    }; //addTask
    toDoList.prototype.listAllTasks = function () {
        console.log("\nList Items:");
        for (var i = 0; i < this.Tasks.length; i++) {
            console.log("Task " + (i + 1) + ": " + this.Tasks[i]);
        }
        console.log("");
    }; //listAllTasks
    toDoList.prototype.deleteTask = function (task) {
        var index = this.Tasks.indexOf(task);
        if (index > -1) {
            this.Tasks.splice(index, 1);
            console.log(task + " has been removed from Task List!");
        }
        else
            console.log(task + " not found in Task List. . . ");
        return this.Tasks.length;
    }; //deleteTask
    return toDoList;
}()); //class Testing
var myToDoList = new toDoList();
myToDoList.addTask("Feed Cat");
myToDoList.addTask("Walk Dog");
myToDoList.listAllTasks();
myToDoList.deleteTask("Walk Dog");
myToDoList.listAllTasks();
