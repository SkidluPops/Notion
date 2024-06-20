import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";

function Firstheading() {
  const [loaded, setLoaded] = useState(false);
  

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="container flex flex-col justify-center  items-center text-center ">
      <AnimatePresence>
        {loaded && (
        //   <motion.div
        //     initial={{ opacity: 0, y: 30 }}
        //     animate={{ opacity: 1, y: 0 }}
        //     exit={{ opacity: 0, y: 300 }}
        //     transition={{ duration: 0.8 }}
        //     className="word-slide-in"
        //   >
            <div className=' flex flex-col lg:flex-row  justify-center items-center lg:w-[full] text-center' >

              <h1 className='flex flex-col lg:flex-row  justify-center items-center lg:w-[full] text-center' >
                <div className='flex flex-col lg:flex-row  text-center justify-center lg:w-[full] '>
                <div className="widthadjust  flex justify-center items-center lg:w-[full] ">

                <motion.div 
                 initial={{ opacity: 0, y: 40 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: 100 }}
                 transition={{ duration: 0.5, delay: 0 }}
                 > 
                  Write, &nbsp;
                </motion.div>{" "}
                <motion.div 
                 initial={{ opacity: 0, y: 40 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: 100 }}
                 transition={{ duration: 0.5, delay: 0.1 }}
                 > 
                  plan,  
                </motion.div>{" "}
                 </div>
                 <div className='flex'>

                <motion.div 
                 initial={{ opacity: 0, y: 40 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: 100 }}
                 transition={{ duration: 0.5, delay: 0.2 }}
                 className="emphasis"
                 >
                  organize, &nbsp;
                </motion.div>
                {" "}
                <motion.div 
                 initial={{ opacity: 0, y: 40 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: 100 }}
                 transition={{ duration: 0.5,  delay: 0.3 }}
                 className="emphasis"
                 >
                  play.
                </motion.div>
                    </div>
            </div>
                
              </h1>
            </div>
        //   </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Firstheading;
