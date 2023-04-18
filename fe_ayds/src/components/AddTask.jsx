import { useState } from "react";
import { useDispatch } from "react-redux";
import { postTask } from "../redux/actionRedux/task";

const AddTask = ({ funcion }) => {
  const [observation, setObservation] = useState("");
  const [task, setTask] = useState("");
  
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postTask({ taskType: task, observation }));
    funcion(false);
  };

  const handleTask = (event) => {
    setTask(event.target.value);
  };
  const handleObservation = (event) => {
    setObservation(event.target.value);
  };
  
  return (
    <div className="w-full">
      <form onSubmit={handleSubmit}>
        <label className="w-full">Tipo de tarea</label>
        <input className="w-full border" onChange={handleTask} />
        <label className="w-full">Observación de la tarea</label>
        <textarea className="w-full border" onChange={handleObservation} />
        <div className="flex justify-end pt-2">
          <button className="bg-black text-white rounded p-2" type="submit">
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
