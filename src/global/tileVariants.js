const tileVariants = {
    initial : {
        scale: 0.9,
        opacity: 0,
    },
    visible : {
        opacity : 1,
        transition : {
            type : "tween",
            ease: "easeInOut",
            duration : 2,
        },
        
    },
    hover : {
        boxShadow: "0px 0px 10px 10px rgba(0,0,0,0.2)",
        scale : 1.05,
        y: -20
    },
    hoverCenter : {
        boxShadow: "0px 0px 10px 10px rgba(0,0,0,0.2)",
        scale : 1.08,
        
    }
}

export { tileVariants };