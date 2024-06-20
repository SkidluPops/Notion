import React, { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'; 

export const Viewbasedanimations = () => {
    const crazy  = useRef(null);
    const isInView = useInView(crazy,{once:false});

    useEffect(() => {
      console.log("Is in view ->", isInView);
    }, [isInView]);

  return (

    <>
    <div style={{height: "150vh"}} >Viewbasedanimations</div>
    <motion.div 
    style={{ height : "100vh", background: "black" }}

    initial={{ opacity: 0 }}

    whileInView={{opacity: 1}} 
    
    transition={{ duration: 2}}
    
    ></motion.div>
    
    <motion.div

    
    ref={crazy}
    // initial={{background:"red"}}
    // // whileInView={{background:"blue"}}
    // animate={{background: isInView ? " blue" : "red"}}
    // transition={{duration: 2}}
    style={{
      height: "100vh",
      background : isInView? "blue" : "red",
      transition : "2s background",
    }}
    >

</motion.div>
    </>
  );
};
export default Viewbasedanimations;