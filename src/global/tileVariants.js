const tileVariants = {
  initial: {
    y: 20,
    opacity: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      ease: "easeInOut",
      duration: 0.55,
    },
  },
}

export { tileVariants }
