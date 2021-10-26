import { MouseEvent, useContext } from "react";
import { Delete } from "../Icon/Delete";
import { Edit } from "../Icon/Edit";
import { dataContext } from "./dataContext";
const EditArea = () => {
  const context = useContext(dataContext);
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const target = (e.target as HTMLButtonElement).parentElement?.parentElement;

    context?.dispatch({ type: "EDIT_PROCESS", payload: target?.id });
  };
  const handleClick2 = (e: MouseEvent<HTMLButtonElement>) => {
    const target = (e.target as HTMLButtonElement).parentElement?.parentElement;

    context?.dispatch({ type: "DELETE_PROCESS", payload: target?.id });
  };
  return (
    <div className="editArea">
      <button id="edit" onClick={handleClick}>
        <Edit />
      </button>
      <button id="delete" onClick={handleClick2}>
        <Delete />
      </button>
    </div>
  );
};
export { EditArea };
