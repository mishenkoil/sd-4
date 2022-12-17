module.exports= class Task{
    constructor(taskTitle){
        this.taskTitle = taskTitle;
        this.taskDone = false;
        this.taskId = String(Math.floor(Math.random() * 100000));
    }
}