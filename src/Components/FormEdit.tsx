import { motion } from "framer-motion";
import { FormEvent, useContext, useRef, useState } from "react";
import { Formcontainer, FormItem } from "./animation";
import { CloseButton } from "./CloseButton";
import { dataContext } from "./dataContext";
import { ImageComp } from "./ImageComp";
const FormEdit = () => {
  const [Data, setData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    isSubmit: true,
  });
  const context = useContext(dataContext);
  const ref = useRef<HTMLFormElement>(null);
  const ref2 = useRef<HTMLInputElement>(null);

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;

    const id = target.id;
    const val = target.value;

    setData({
      ...Data,
      isSubmit: false,
      [id]: val,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const id = ref.current?.id;

    const reqOp = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Data),
    };

    fetch(`https://reqres.in/api/users/${id}?page=2`, reqOp)
      .then((response) => {
        if (!response.ok) {
          throw Error("Failed to fetch the Resource");
        }
        return response.json();
      })
      .then((data) => {
        context?.dispatch({ type: "UPDATE__COMPLETE", payload: { id, data } });
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
      <motion.div className="form--wrapper" variants={FormItem}>
        <div className="close--wrapper">
          <CloseButton type="Close__Process" />
        </div>

        {context?.state.copyData.map((c) => {
          return (
            <form
              action=""
              key={`${c.last_name}--${c.id}`}
              id={c.id.toString()}
              ref={ref}
              onSubmit={handleSubmit}
            >
              <div className="image--comp">
                <ImageComp imageStr={c.avatar} />
              </div>

              <div className="form--control">
                <label htmlFor="first_name">firstname</label>
                <input
                  type="text"
                  id="first_name"
                  name="firstname"
                  defaultValue={c.first_name || ""}
                  onChange={handleChange}
                  ref={ref2}
                />
              </div>
              <div className="form--control">
                <label htmlFor="last_name">lastname</label>
                <input
                  type="text"
                  id="last_name"
                  name="lastname"
                  defaultValue={c.last_name || ""}
                  onChange={handleChange}
                  ref={ref2}
                />
              </div>
              <div className="form--control">
                <label htmlFor="email">email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  defaultValue={c.email || ""}
                  onChange={handleChange}
                  ref={ref2}
                />
              </div>
              <input
                type="submit"
                value="update"
                id="submit"
                disabled={Data.isSubmit}
              />
            </form>
          );
        })}
      </motion.div>
    </motion.div>
  );
};
export { FormEdit };
