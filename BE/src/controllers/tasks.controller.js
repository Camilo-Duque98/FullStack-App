const Tasks = require("../models/Tasks.js");

//obtener todas las tareas
const getTask = async (req, res) => {
  const AllTask = await Tasks.findAll({});
  res.send(AllTask).status(200);
};

//obtener una tarea
const getOneTask = async (req, res) => {
  const id = req.params;
  const task = await Tasks.findAll({ where: id });
  res.status(200).json(task);
};

//crear una tarea
const createTask = async (req, res) => {
  const { taskType, observation } = req.body;

  if (!taskType || !observation) {
    return res.status(400).json({ error: "content missing" });
  }
  const taskCreate = await Tasks.create({
    taskType,
    observation,
  });

  res.status(200).json(taskCreate);
};

// Actualizar una tarea

const putTask = async (req, res) => {
  const { id } = req.params;
  const { taskType, observation } = req.body;
  console.log(req.body);
  try {
    const task = await Tasks.findOne({ where: { id } });
    if (!task) {
      return res.status(404).send("Task ot find");
    }

    task.taskType = taskType;
    task.observation = observation;
    await task.save();
    return res.json(task);
  } catch (error) {
    return res.status(500);
  }
};

//eliminar una tarea
const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Tasks.findOne({ where: { id } });

    if (!task) {
      return res.status(404).send("Task not find");
    }
    await task.destroy();
    res.status(204).json("delete Task");
  } catch (error) {
    res.status(500);
  }
};

module.exports = { getTask, getOneTask, createTask, putTask, deleteTask };
