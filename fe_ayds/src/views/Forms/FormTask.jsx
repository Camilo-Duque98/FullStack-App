import { useState } from "react";
import { useDispatch } from "react-redux";
import { updatedTask } from "../../redux/actionRedux/task";

const FormTask = ({ ...props }) => {
  const dispatch = useDispatch();
  const [task, setTask] = useState(props.task);
  const [observation, setObservation] = useState(props.observation);
  //controlando el evento
  const handleSubmit = (event) => {
    event.preventDefault();
    //acá debemos mandar lo que editamos
    dispatch(
      updatedTask(props.id, { taskType: task, observation: observation })
    );
    props.funcion(false);
  };
  const handleTitle = (event) => {
    setTask(event.target.value);
  };
  const handleObservation = (event) => {
    setObservation(event.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="w-full">title</label>
          <input
            className="border w-full"
            type="text"
            value={task}
            onChange={handleTitle}
          />
          <label className="w-full">observaciones</label>
          <textarea
            className="border w-full"
            typte="text"
            value={observation}
            onChange={handleObservation}
          />
        </div>
        <div className="flex justify-end pt-2">
          <button className="bg-black text-white rounded p-2" type="submit">
            Editar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormTask;
