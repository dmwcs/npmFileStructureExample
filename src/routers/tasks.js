const express = require('express');
const {getAllTasks, getTaskById, createNewTask, updateTaskById, deleteTaskById} = require("../controllers/task");

const taskRouter = express.Router();




//tasks

taskRouter.get('/', getAllTasks);
taskRouter.get('/:id',getTaskById);
taskRouter.put('/:id',updateTaskById);
taskRouter.delete('/:id',deleteTaskById);
taskRouter.post('/', createNewTask);

// module.taskRouter;
module.exports = taskRouter;