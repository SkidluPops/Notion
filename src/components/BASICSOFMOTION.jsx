import React, { useState } from 'react'
import { AnimatePresence, backInOut, motion } from 'framer-motion'
const BASICSOFMOTION = () => {
    const [isVisible, setIsVisible] = useState(true);
  return (

    <div className='huhu grid place-content-center pt-[500px] h-[100vh] gap-[0.8rem]' >
        BASICS OF MOTION
    <button 
    onClick={() => setIsVisible(!isVisible)}

    className={`example-button bg-purple-700 text-white font-[1.8rem] rounded-[0.4ewm] border-none p[0.4rem] cursor-pointer
      `}
      > 
    SHOW/HIDE 
     </button>
     <AnimatePresence>
        {/* ANIMATE PRESENCE IS USED TO WORK THE EXIT ANIMATION IN EXIT */}

    { isVisible && <motion.div 
    className={`huhuneww w-[150px] h-[150px] bg-black 
        `}
        initial={{
            rotate: "0deg",
            scale : 0,
             y : 0,
            }}
            animate={{
                rotate:"360deg",
                scale : 1,
                y : [0, 150, -150, -150, 0],
                duration: 2
                    }}
                exit={{
                    rotate: "0deg",
                    scale : 0,

                    }}
                    
                    transition={{
                        duration: 1,
                        ease: "easeInOut", 
                        times : [0, 0.25, 0.5, 0.85, 1]
                        }}
                        >
        SIKEEEEEE
    </motion.div>}
        </AnimatePresence>
    </div>
  )
}

export default BASICSOFMOTION