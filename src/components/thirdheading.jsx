import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const ThirdHeading = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    
    },[])

  return (
      <div className="main flex gap-6 ">
         <AnimatePresence>
        

        <motion.div
        initial={{opacity: 0 , y: 40}}
        animate = {{opacity: 1 , y :0 }}
        exit= {{opacity : 1 , y : 100}}
        transition = {{duration : 0.5 , delay: 0.8}}
        >
    <div className="getnotion  bg-cyan-500	 text-white rounded-md w-32 h-8 items-center flex justify-center  ">
                    
                    Get Notion free
    </div>
        </motion.div>
    
    
        <motion.div
        initial={{opacity: 0 , y: 40}}
        animate = {{opacity: 1 , y :0 }}
        exit= {{opacity : 1 , y : 120}}
        transition = {{duration : 0.5 , delay: 0.8}}
             className="request  bg-white text-cyan-500 rounded-md w-36 h-8 items-center flex gap-2 justify-center  ">
        Request a demo <span><img className='w-4' src="/images/rightarrow.png" alt="" /></span>
        </motion.div>
        </AnimatePresence> 
    </div>
  )
}

export default ThirdHeading