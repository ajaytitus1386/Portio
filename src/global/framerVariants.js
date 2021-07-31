const headerVariants = {
    hidden : {
      height:0,
    },
    visible : {
      height:"600px",
      transition: {
        type: "easeInOut",
        duration: 0.5,
      },
    },
    exit : {
      height: 0,
      transition : {
        type: "easeInOut",
      }
    }
}

const headerImageVariants = {
  hidden : {
    opacity: 0,
  },
  visible : {
    opacity : 0.75,
    transition : {
      type : "easeInOut",
      delay : 0.2,
      duration : 0.5,
    },
  },
  hover : {
    scale : 1.05,
    opacity : 1
  },

}

export { headerVariants, headerImageVariants };

