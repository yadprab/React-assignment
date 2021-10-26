import { motion } from "framer-motion";
import { useContext, useRef } from "react";
import { Formcontainer, FormItem } from "./animation";
import { dataContext } from "./dataContext";
import { ImageComp } from "./ImageComp";

const DeleteComp = () => {
  const context = useContext(dataContext);
  const ref = useRef<HTMLDivElement>(null);
  const handleCancel = () => {
    context?.dispatch({ type: "Close__Process__Del" });
  };

  const handleDelete = () => {
    const id = ref.current?.id;

    fetch(`https://reqres.in/api/users/${id}?page=2`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw Error("Failed to fetch the Resource");
        }
        if (response.status === 204) {
          context?.dispatch({ type: "Delete__Complete", payload: id });
        } else {
          return;
        }
      })
      .catch((err) => {
        context?.dispatch({ type: "ERROR", payload: err.message });
      });
  };
  return (
    <motion.div
      className="overlay--wrapper"
      variants={Formcontainer}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.div className="inner--wrapper" variants={FormItem}>
        <div className="top--wrapper">
          <h1>ARE YOU SURE ? </h1>
          <p>You want to delete the user</p>
        </div>
        <div className="bottom--wrapper">
          {context?.state.copyData.map((cd) => {
            return (
              <div
                className="data--wrapper"
                key={`${cd.id}--${cd.last_name}`}
                id={cd.id.toString()}
                ref={ref}
              >
                <div className="image--comp">
                  <ImageComp imageStr={cd.avatar} />
                </div>
                <p>
                  {cd.first_name} {cd.last_name}
                </p>
              </div>
            );
          })}
          <div className="button--wrapper">
            <button id="yes" onClick={handleDelete}>
              Delete
            </button>
            <button id="cancel" onClick={handleCancel}>
              cancel
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
export { DeleteComp };
