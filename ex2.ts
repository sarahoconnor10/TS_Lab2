//create array of strings
let tasksArray: string[] = [];

//create function addTask
function addTask(task:string):number{

    let length:number = tasksArray.push(task);
    console.log(task +" has been added to list!");
    return length;
}//addTask

//create function listAllTasks
function listAllTasks():void{
    console.log("\nList Items:");
    for(let i:number = 0; i < tasksArray.length; i++)
    {
        console.log("Task " + (i+1) + ": " + tasksArray[i]);
    }
    console.log("");
}//listAllTasks

//create function deleteTask
function deleteTask(task:string):number{
    
        let index:number = tasksArray.indexOf(task);
        if(index > -1)
        {
            tasksArray.splice(index,1);
            console.log(task + " has been removed from Task List!");
        }
        else
            console.log(task + " not found in Task List. . . ");
    
    return tasksArray.length;
}

//test methods
addTask("Buy Eggs");
listAllTasks();
addTask("Be Silly");
listAllTasks();
deleteTask("Be Silly");
listAllTasks();
