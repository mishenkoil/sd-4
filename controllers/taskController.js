const TaskList = require("../model/taskList");
const Task = require("../model/task");

class TaskController {
    async startPage(req, res) {
        res.render("index.ejs", {
            todos: TaskList.getAll()
        });
    }

    async createTaskList(req, res) {
        const taskListTitle = req.body;
        const taskList = new TaskList(taskListTitle);
        taskList.save();

        // redirect back to main page (refresh page)
        res.redirect("/");
    }

    async deleteTaskList(req, res) {
        const taskListId = req.body.taskListId;
        TaskList.delete(taskListId);

        // redirect back to main page (refresh page)
        res.redirect("/");
    }

    async createTask(req, res) {
        const taskListId = req.body.taskListId;
        const taskTitle = req.body.taskTitle;
        const task = new Task(taskTitle);

        TaskList.createTask(task, taskListId)

        // redirect back to main page (refresh page)
        res.redirect("/");
    }

    async updateTaskStatus(req, res) {
        const taskListId = req.body.taskListId;
        const taskId = req.body.taskId;
        const taskDone = req.body.taskDone;

        TaskList.updateTaskStatus(taskListId, taskId, taskDone)

        // redirect back to main page (refresh page)
        res.redirect("/");
    }
}

module.exports = new TaskController();