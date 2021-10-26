import { useContext } from "react";
import { Close } from "../Icon/Close";
import { dataContext } from "./dataContext";

const CloseButton = ({ type }: { type: string }) => {
  const context = useContext(dataContext);

  const handleClick = () => {
    context?.dispatch({ type: type });
  };

  return (
    <button id="close--button" onClick={handleClick}>
      <Close />
    </button>
  );
};
export { CloseButton };
