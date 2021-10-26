import { motion } from "framer-motion";
import { LoaderIcon } from "../Icon/LoaderIcon";
const LoadComp = () => {
  return (
    <motion.div className="loader--overlay" exit={{ opacity: 0 }}>
      <LoaderIcon />
    </motion.div>
  );
};
export { LoadComp };
