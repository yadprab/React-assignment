import { useContext } from "react";
import IMG from "../Images/ErrorRobot.png";
import { dataContext } from "./dataContext";
const ErrorState = () => {
  const context = useContext(dataContext);
  return (
    <div className="error--wrapper">
      <img src={IMG} alt="illustration" />
      <p>{context?.state.error}</p>
    </div>
  );
};
export { ErrorState };
