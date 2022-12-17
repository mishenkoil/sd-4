const todos = [];

module.exports= class TaskList{
    constructor(taskListTitle){
        this.taskListTitle = taskListTitle;
        this.taskListId = String(Math.floor(Math.random() * 100000));
        this.taskList = [];
    }

    save(){
        todos.push(this);
    }

    static delete(taskListId){
        const idxToDelete = todos.findIndex(el => el.taskListId === taskListId);
        if (idxToDelete > -1) {
            todos.splice(idxToDelete, 1);
        }
    }

    static getAll(){
        return todos;
    }

    static createTask(task, taskListId){
        const idxToUpdate = todos.findIndex(el => el.taskListId === taskListId);
        if (idxToUpdate > -1) {
            todos[idxToUpdate].taskList.push(task);
        }
    }

    static updateTaskStatus(taskListId, taskId, taskDone){
        const idxOfTaskListToUpdate = todos.findIndex(el => el.taskListId === taskListId);
        if (idxOfTaskListToUpdate > -1) {
            const taskList = todos[idxOfTaskListToUpdate].taskList;
            const idxOfTaskToUpdate = taskList.findIndex(el => el.taskId === taskId);
            if (idxOfTaskToUpdate > -1) {
                taskList[idxOfTaskToUpdate].taskDone = taskDone ? true : false;
            }
        }
    }

}