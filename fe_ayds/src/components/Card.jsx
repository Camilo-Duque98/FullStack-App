import Button from "./Button";

const Card = ({ id, title }) => {
  return (
    <div className="flex justify-around h-32 shadow rounded bg-gray">
      <div className="flex items-center w-1/4 px-4">{id}</div>
      <div className="w-1/2 p-5">{title}</div>
      <div className="flex w-1/4 items-center justify-end p-7">
        <div className="px-3">
          <Button name={"editar"} />
        </div>
        <div className="px-3">
          <Button name={"borrar"} />
        </div>
      </div>
    </div>
  );
};

export default Card;
