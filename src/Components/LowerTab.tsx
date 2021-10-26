import { useContext } from "react";
import { Add } from "../Icon/Add";
import { Github } from "../Icon/Github";
import { Moon } from "../Icon/Moon";
import { Sun } from "../Icon/Sun";
import { dataContext } from "./dataContext";

const LowerTab = () => {
  const context = useContext(dataContext);
  const handleAdd = () => {
    context?.dispatch({ type: "POST__PROCESS" });
  };

  const handleTheme = () => {
    context?.dispatch({ type: "THEME__PROCESS" });
  };
  return (
    <div className="lower--tab">
      <button id="theme" onClick={handleTheme}>
        {context?.state.isTheme ? <Sun /> : <Moon />}
      </button>
      <button id="add--button" onClick={handleAdd}>
        <Add />
      </button>
      <a
        href="https://github.com/yadprab/React-assignment"
        target="_blank"
        rel="noOpener noReferrer"
      >
        <Github />
      </a>
    </div>
  );
};
export { LowerTab };
