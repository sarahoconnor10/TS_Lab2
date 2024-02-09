interface ListInterface{
    Tasks:string[];
    addTask(task:string):number;
    listAllTasks():void;
    deleteTask(task:string):number;
}//interface

class toDoList implements ListInterface{
    Tasks:string[] = [];

    addTask(task:string):number{
        let length:number = this.Tasks.push(task);
        console.log(task +" has been added to list!");
        return length;
    }//addTask
    listAllTasks():void{
        console.log("\nList Items:");
        for(let i:number = 0; i < this.Tasks.length; i++)
        {
            console.log("Task " + (i+1) + ": " + this.Tasks[i]);
        }
        console.log("");
    }//listAllTasks
    deleteTask(task:string):number{

        let index:number = this.Tasks.indexOf(task);
        if(index > -1)
        {
            this.Tasks.splice(index,1);
            console.log(task + " has been removed from Task List!");
        }
        else
            console.log(task + " not found in Task List. . . ");

        return this.Tasks.length;
    }//deleteTask
}//class Testing

//test the methods
let myToDoList = new toDoList();    /*create object to use methods*/
myToDoList.addTask("Feed Cat");
myToDoList.addTask("Walk Dog");
myToDoList.listAllTasks();
myToDoList.deleteTask("Walk Dog");
myToDoList.listAllTasks();

