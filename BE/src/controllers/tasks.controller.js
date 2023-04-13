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

const putTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { taskType, observation } = req.body;
    if (!taskType || !observation) {
      return res.status(400).json({ error: "content missing" });
    }
    const task = await Tasks.update(
      { taskType, observation },
      {
        where: { id },
      }
    );

    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ error: "content missing" });
  }
};

//eliminar una tarea
const deleteTask = async (req, res) => {
  const { id } = req.params;

  await Tasks.destroy({
    where: {
      id,
    },
  });

  res.status(204);
};

module.exports = { getTask, getOneTask, createTask, putTask, deleteTask };
