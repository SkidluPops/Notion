import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const SecondHeading = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    
        }, []); /*empty brackets used to pass an array only once*/
  return (
    <div className="container flex justify-center items-center ">
        <AnimatePresence>

        {loaded && 
        (
            


                <div className='lg:w-[21rem] md:w-[28rem] w-[18rem] leading-7 text-center ' >

                    <motion.div
                    initial={{opacity: 0 , y: 40}}
                    animate = {{opacity: 1 , y :0 }}
                    exit= {{opacity : 1 , y : 100}}
                    transition = {{duration : 0.5 , delay: 0.6}}
                    >    
                    Turn ideas into action
                    with Notion’s AI-powered workspace.
                    </motion.div> {" "}

                 </div>
        )
        }
        </AnimatePresence>
    <motion.div
    
    >

    </motion.div>
        </div>
  )
}

export default SecondHeading