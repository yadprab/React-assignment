import { AnimatePresence, motion } from "framer-motion";
import { IData } from "../Interface/Interface";
import { container } from "./animation";
import { List } from "./List";

const Users = ({ data }: { data: IData["state"] }) => {
  return (
    <div className="users--wrapper">
      <motion.ul variants={container} initial="initial" animate="animate" >
        {data.map((d) => {
          return (
            <AnimatePresence exitBeforeEnter key={d.id}>
              <List d={d} />
            </AnimatePresence>
          );
        })}
      </motion.ul>
    </div>
  );
};
export { Users };
