import { motion } from "framer-motion";
import { IData2 } from "../Interface/Interface";
import { item } from "./animation";
import { EditArea } from "./EditArea";
import { ImageComp } from "./ImageComp";
import { NameComp } from "./NameComp";
const List = ({ d }: { d: IData2 }) => {
  return (
    <motion.li
      className="users--area"
      id={d.first_name}
      variants={item}
      exit={{ y: 20, opacity: 0 }}
    >
      <div className="top--wrapper">
        <ImageComp imageStr={d.avatar} />
        <NameComp name={`${d.first_name} ${d.last_name}`} email={d.email} />
      </div>
      <EditArea />
    </motion.li>
  );
};
export { List };
