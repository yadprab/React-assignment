import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { IFormData } from "../Interface/Interface";
import { CloseButton } from "./CloseButton";
import { dataContext } from "./dataContext";
import { ErrorComp } from "./ErrorComp";
import { schema } from "./schema";
import { Formcontainer, FormItem } from "./animation";
import { motion } from "framer-motion";
const PostForm = () => {
  const context = useContext(dataContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: IFormData) => {
    const reqOP = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    fetch("https://reqres.in/api/users?page=2/post", reqOP)
      .then((response) => {
         if (!response.ok) {
           throw Error("Failed to fetch the Resource");
         }
        return response.json();
      })
      .then((data) => {
        context?.dispatch({ type: "POST__COMPLETED", payload: data });
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
      exit='exit'
    >
      <motion.div className="form--wrapper" variants={FormItem}>
        <div className="close--wrapper">
          <CloseButton type="Close__Add" />
        </div>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="title">
            <p>Enter User Details</p>
          </div>

          <div className="form--control">
            <label htmlFor="first_name">firstname</label>
            <input
              type="text"
              id="first_name"
              {...register("first_name")}
              className={errors.first_name ? "error" : ""}
            />
            {errors.first_name && (
              <ErrorComp message={errors.first_name.message} />
            )}
          </div>
          <div className="form--control">
            <label htmlFor="last_name">lastname</label>
            <input
              type="text"
              id="last_name"
              {...register("last_name")}
              className={errors.last_name ? "error" : ""}
            />
            {errors.last_name && (
              <ErrorComp message={errors.last_name.message} />
            )}
          </div>
          <div className="form--control">
            <label htmlFor="email">email</label>
            <input
              type="email"
              id="email"
              {...register("email")}
              className={errors.email ? "error" : ""}
            />
            {errors.email && <ErrorComp message={errors.email.message} />}
          </div>
          <div className="form--control">
            <label htmlFor="avatar">avatar</label>
            <input
              type="url"
              id="avatar"
              {...register("avatar")}
              className={errors.avatar ? "error" : ""}
            />
            {errors.avatar && <ErrorComp message={errors.avatar.message} />}
          </div>
          <input type="submit" value="submit" id="submit" />
        </form>
      </motion.div>
    </motion.div>
  );
};
export { PostForm };
