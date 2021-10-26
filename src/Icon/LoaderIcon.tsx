import { motion } from "framer-motion";
import { useContext } from "react";
import { dataContext } from "../Components/dataContext";
const LoaderIcon = () => {
  const context = useContext(dataContext);
  return (
    <svg
      width={96}
      height={108}
      viewBox="0 0 96 108"
      fill="none"
      id="Loader"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_48:2)">
        <motion.path
          d="M95.8677 69.7804C95.8677 90.8337 74.5071 107.896 48.1547 107.896C23.1515 107.896 2.63735 92.5299 0.605775 72.9746H0.404731V10.3694C0.402993 9.02331 0.751552 7.69011 1.43049 6.44598C2.10943 5.20184 3.10545 4.07114 4.36167 3.11845C5.61789 2.16576 7.10971 1.40974 8.75192 0.893572C10.3941 0.377401 12.1546 0.111189 13.9327 0.110138C15.7923 0.111452 17.6333 0.390032 19.3506 0.929972C21.0679 1.46991 22.628 2.26064 23.9416 3.257C25.2553 4.25336 26.2969 5.43586 27.0069 6.73696C27.7169 8.03806 28.0814 9.43229 28.0797 10.84V68.1183C28.0109 68.6657 27.9765 69.2197 27.9765 69.7804C27.9765 70.3432 28.0109 70.8959 28.0797 71.4426C29.1246 79.5651 37.7112 85.9013 48.1547 85.9013C57.9423 85.9013 66.0792 80.3502 67.9362 72.9786C68.5225 70.6406 68.4585 68.2357 67.7484 65.9174V10.3694C67.7456 7.65097 69.1692 5.04298 71.7061 3.11904C74.243 1.19511 77.6855 0.112792 81.2764 0.110138C85.0319 0.110669 88.6335 1.24019 91.2893 3.25039C93.9451 5.26059 95.4378 7.98692 95.4392 10.83V64.5777C95.7308 66.3031 95.8739 68.041 95.8677 69.7804Z"
          initial={{
            pathLength: 0,
            fill: "none",
          }}
          animate={{
            pathLength: 1,
            fill: "url(#paint0_linear_48:2)",
            strokeWidth: 2,
            stroke: "white",
          }}
          exit={{
            pathLength: 0,
            fill: "",
            strokeWidth: 0,
            stroke: "",

            transition: { duration: 0.6 },
          }}
          transition={{ duration: 1.5, repeat: 1 }}
          strokeMiterlimit={10}
          onAnimationComplete={() => {
            context?.dispatch({ type: "INITIAL_LOADER" });
          }}
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_48:2"
          x1="48.1363"
          y1="0.110138"
          x2="48.1363"
          y2="107.896"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#33064D" />
          <stop offset={1} stopColor="#8612CB" />
        </linearGradient>
        <clipPath id="clip0_48:2">
          <rect width={96} height={108} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
export { LoaderIcon };
