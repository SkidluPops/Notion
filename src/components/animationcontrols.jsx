import React from 'react'
import { motion, useAnimationControls } from 'framer-motion'
// THIS COMPONENT is used to animate one particular compoment and the other one gets edited

export const Animationcontrols = () => {
   const Controls /*random name*/  = useAnimationControls();


   const handleClick = () => {
      // do some thing
      Controls.start("flip");
   };


    
  return (

         <div className='huhu grid place-content-center h-[100vh] gap-[0.8rem]'>
         Animation controls

            <button
            onClick={handleClick}
             className='example-button bg-purple-400   ' > Flip it
                </button>


         <motion.div
         style={{
            width: 150,
            height: 150,
            background: "black",
         }}

         variants={{
            
            intial: {
               rotate: '0deg'
            
            },

            flip: {
               rotate : '360deg',
            },
         }}
         initial="initial"
         animate={Controls}
         ></motion.div>
    </div>
  )
}
export default Animationcontrols