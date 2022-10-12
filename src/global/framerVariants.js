const headerVariants = {
  hidden: {
    height: 0,
    opacity: 0,
  },
  visible: {
    height: "auto",
    opacity: 1,
    transition: {
      height: {
        duration: 0.8,
      },
      opacity: {
        duration: 0.25,
        delay: 0.15,
      },
    },
  },
  exit: {
    height: 0,
    transition: {
      type: "easeInOut",
    },
  },
}

const headerImageVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 0.75,
    transition: {
      type: "easeInOut",
      delay: 0.2,
      duration: 0.5,
    },
  },
  hover: {
    scale: 1.05,
    opacity: 1,
  },
}

const mainVariants = {
  initial: {},
}

export { headerVariants, headerImageVariants, mainVariants }
