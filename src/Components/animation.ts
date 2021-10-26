export const NotifAni = {
  initial: {
    y: 200,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,

    transition: {
      duration: 0.8,
    },
  },
  exit: {
    y: 200,
    opacity: 0,
  },
};

export const container = {
  initial: { opacity: 1, scale: 0 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

export const item = {
  initial: { y: 20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
  },
};

export const Formcontainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,

    transition: {
      delayChildren: 0.3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      delayChildren: 0.3,
    },
  },
};

export const FormItem = {
  initial: { y: 20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
  },
  exit:{
     y: 20, opacity: 0
  }
};
