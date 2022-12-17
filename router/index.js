const Router = require("express").Router;
const router = new Router();
const taskController = require("../controllers/taskController");

router.get("/", taskController.startPage);
router.post("/createTaskList", taskController.createTaskList);
router.post("/deleteTaskList", taskController.deleteTaskList);
router.post("/createTask", taskController.createTask);
router.post("/updateTaskStatus", taskController.updateTaskStatus);


module.exports = router;