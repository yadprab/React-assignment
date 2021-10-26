import { motion } from "framer-motion";
import { Success } from "../Icon/Succes";
import { NotifAni } from "./animation";
import { CloseButton } from "./CloseButton";
const Notification = ({ message, type }: { message: string; type: string }) => {
  return (
    <motion.div
      className="notif--outer--wrapper"
      variants={NotifAni}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="notif--inner--wrapper">
        <div className="top--notif--wrapper">
          <Success />
          <p>{message}</p>
        </div>
        <CloseButton type={type} />
      </div>
    </motion.div>
  );
};
export { Notification };
