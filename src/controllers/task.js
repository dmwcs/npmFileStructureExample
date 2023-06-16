const tasks = [
    {
        id: 1,
        description: 'task 1',
        done: false
    },
    {
        id: 2,
        description: 'task 2',
        done: false
    },
    {
        id: 3,
        description: 'task 3',
        done: false
    }
];

//Get all tasks (allow query params for filtering)
const getAllTasks =  (req, res) => {
    res.json(tasks);
}

const getTaskById = (req, res) => {
    const {id} = req.params;
    const numericId = +id;

    const foundTask = tasks.find((task) => task.id === numericId);

    if (!foundTask) {
        res.status(404).json({error: 'task not found!'});
        return;
    }

    res.status(200).json(foundTask);
};

const updateTaskById = (req, res) => {
    const {id} = req.params;
    const numericId = +id;
    const {description, done} = req.body;

    let foundTask = tasks.find((task) => task.id === numericId);

    foundTask.description = description;
    foundTask.done = done;
    res.status(200).json(tasks);
};

const createNewTask = (req, res) => {
    const {id: bodyId, description, done} = req.body;
    const ifIdFounded = tasks.find((task) => task.id === bodyId);

    //check ifId
    if (ifIdFounded !== undefined) {
        res.status(500).json({error: 'same id'});
        return;
    }

    const obj = {
        id: bodyId,
        description: description,
        done: done
    }

    tasks.push(obj);
    res.status(200).json(tasks);

};

const deleteTaskById = (req, res) => {
    const removedId = Number(req.params.id)
    console.log('removedId:', removedId);
};

module.exports = {
    getAllTasks,
    getTaskById,
    updateTaskById,
    deleteTaskById,
    createNewTask,
}