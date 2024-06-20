import React from 'react'
import { easeInOut, motion, MotionConfig  } from 'framer-motion'
    
// THIS COMPONENT IS USED to HOVER and animate and ONCLICK while animating

export const Gestures = () => {
  return (
    <div className='huhu grid place-content-center h-[180vh] pt-[100px] pb-96 gap-[3.8rem]' >
        
        
        <motion.button
        
        whileHover={{scale: 2.05}}
        whileTap={{ scale: 1.05, rotate: "2.5deg"}}
        transition={{
            duration: 0.1,
            ease: easeInOut
        }}

        
        
        className='example-button' > Click Me! </motion.button>

        <motion.button
        whileHover={{scale: 2.55}}
        whileTap={{ scale: 0.85, rotate: "-10.5deg"}}
        transition={{
            duration: 0.125,
            ease: easeInOut

        }}
        style={{ backgroundColor: "red"}}

        
        
        className='example-button' > Click Me! </motion.button>

        

    </div>
  )
}
export default Gestures

