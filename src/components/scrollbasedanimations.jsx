import { useScroll, motion, useTransform } from 'framer-motion'
import React, { useRef } from 'react'
// scrolling animations



export const Scrollbasedanimations = () => {
const crazyy=useRef()
    const{scrollYProgress} = useScroll({target:crazyy});


        const background = useTransform(scrollYProgress,
            [0, 1],
            ["rgb(86,1,245)","rgb(1,245,13)"] )
            // these rgb colours are very important.
            // can be accessed from google HEX VALUES OR RGB COLOURS

  return (
    <div ref={crazyy} 
    
    style={{
        padding: "4.2rem",
        position: "sticky",
    }}>

        <motion.div
         
         style={{   
            scaleX: scrollYProgress,
            transformOrigin:"left",
            background: background,
            position: 'sticky',
            top: 0,
            left: 0,
            width: "100%",
            height: "20px",
         }}

         >
            
        </motion.div>





        <div  style={{
            maxWidth: "700px",
            margin: "auto",
            gap: "330px"

            

        }} >
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem facilis illo suscipit amet quia dolore sapiente, possimus a praesentium ipsum, reiciendis id, maiores voluptas distinctio aperiam consequatur explicabo mollitia eos accusamus aspernatur illum laboriosam harum delectus tempore? Adipisci, pariatur veritatis enim cum nulla consequatur quos expedita accusamus eligendi atque debitis cupiditate, vero id perspiciatis rerum? Voluptate.</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dicta eius aliquid ex delectus, dolor sunt illo? Fugiat et placeat veritatis impedit, dicta esse culpa corrupti minus fuga neque tempora voluptatibus quae corporis, officia dolore non consequatur repellendus excepturi repudiandae porro doloremque recusandae. Unde, aperiam veniam eligendi voluptatibus ratione error perferendis officia tempora, nemo magni accusantium?</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dicta eius aliquid ex delectus, dolor sunt illo? Fugiat et placeat veritatis impedit, dicta esse culpa corrupti minus fuga neque tempora voluptatibus quae corporis, officia dolore non consequatur repellendus excepturi repudiandae porro doloremque recusandae. Unde, aperiam veniam eligendi voluptatibus ratione error perferendis officia tempora, nemo magni accusantium?</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dicta eius aliquid ex delectus, dolor sunt illo? Fugiat et placeat veritatis impedit, dicta esse culpa corrupti minus fuga neque tempora voluptatibus quae corporis, officia dolore non consequatur repellendus excepturi repudiandae porro doloremque recusandae. Unde, aperiam veniam eligendi voluptatibus ratione error perferendis officia tempora, nemo magni accusantium?</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dicta eius aliquid ex delectus, dolor sunt illo? Fugiat et placeat veritatis impedit, dicta esse culpa corrupti minus fuga neque tempora voluptatibus quae corporis, officia dolore non consequatur repellendus excepturi repudiandae porro doloremque recusandae. Unde, aperiam veniam eligendi voluptatibus ratione error perferendis officia tempora, nemo magni accusantium?</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dicta eius aliquid ex delectus, dolor sunt illo? Fugiat et placeat veritatis impedit, dicta esse culpa corrupti minus fuga neque tempora voluptatibus quae corporis, officia dolore non consequatur repellendus excepturi repudiandae porro doloremque recusandae. Unde, aperiam veniam eligendi voluptatibus ratione error perferendis officia tempora, nemo magni accusantium?</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dicta eius aliquid ex delectus, dolor sunt illo? Fugiat et placeat veritatis impedit, dicta esse culpa corrupti minus fuga neque tempora voluptatibus quae corporis, officia dolore non consequatur repellendus excepturi repudiandae porro doloremque recusandae. Unde, aperiam veniam eligendi voluptatibus ratione error perferendis officia tempora, nemo magni accusantium?</p>


                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dicta eius aliquid ex delectus, dolor sunt illo? Fugiat et placeat veritatis impedit, dicta esse culpa corrupti minus fuga neque tempora voluptatibus quae corporis, officia dolore non consequatur repellendus excepturi repudiandae porro doloremque recusandae. Unde, aperiam veniam eligendi voluptatibus ratione error perferendis officia tempora, nemo magni accusantium?</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dicta eius aliquid ex delectus, dolor sunt illo? Fugiat et placeat veritatis impedit, dicta esse culpa corrupti minus fuga neque tempora voluptatibus quae corporis, officia dolore non consequatur repellendus excepturi repudiandae porro doloremque recusandae. Unde, aperiam veniam eligendi voluptatibus ratione error perferendis officia tempora, nemo magni accusantium?</p>



                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dicta eius aliquid ex delectus, dolor sunt illo? Fugiat et placeat veritatis impedit, dicta esse culpa corrupti minus fuga neque tempora voluptatibus quae corporis, officia dolore non consequatur repellendus excepturi repudiandae porro doloremque recusandae. Unde, aperiam veniam eligendi voluptatibus ratione error perferendis officia tempora, nemo magni accusantium?</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dicta eius aliquid ex delectus, dolor sunt illo? Fugiat et placeat veritatis impedit, dicta esse culpa corrupti minus fuga neque tempora voluptatibus quae corporis, officia dolore non consequatur repellendus excepturi repudiandae porro doloremque recusandae. Unde, aperiam veniam eligendi voluptatibus ratione error perferendis officia tempora, nemo magni accusantium?</p>


                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dicta eius aliquid ex delectus, dolor sunt illo? Fugiat et placeat veritatis impedit, dicta esse culpa corrupti minus fuga neque tempora voluptatibus quae corporis, officia dolore non consequatur repellendus excepturi repudiandae porro doloremque recusandae. Unde, aperiam veniam eligendi voluptatibus ratione error perferendis officia tempora, nemo magni accusantium?</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dicta eius aliquid ex delectus, dolor sunt illo? Fugiat et placeat veritatis impedit, dicta esse culpa corrupti minus fuga neque tempora voluptatibus quae corporis, officia dolore non consequatur repellendus excepturi repudiandae porro doloremque recusandae. Unde, aperiam veniam eligendi voluptatibus ratione error perferendis officia tempora, nemo magni accusantium?</p>



                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dicta eius aliquid ex delectus, dolor sunt illo? Fugiat et placeat veritatis impedit, dicta esse culpa corrupti minus fuga neque tempora voluptatibus quae corporis, officia dolore non consequatur repellendus excepturi repudiandae porro doloremque recusandae. Unde, aperiam veniam eligendi voluptatibus ratione error perferendis officia tempora, nemo magni accusantium?</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dicta eius aliquid ex delectus, dolor sunt illo? Fugiat et placeat veritatis impedit, dicta esse culpa corrupti minus fuga neque tempora voluptatibus quae corporis, officia dolore non consequatur repellendus excepturi repudiandae porro doloremque recusandae. Unde, aperiam veniam eligendi voluptatibus ratione error perferendis officia tempora, nemo magni accusantium?</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dicta eius aliquid ex delectus, dolor sunt illo? Fugiat et placeat veritatis impedit, dicta esse culpa corrupti minus fuga neque tempora voluptatibus quae corporis, officia dolore non consequatur repellendus excepturi repudiandae porro doloremque recusandae. Unde, aperiam veniam eligendi voluptatibus ratione error perferendis officia tempora, nemo magni accusantium?</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dicta eius aliquid ex delectus, dolor sunt illo? Fugiat et placeat veritatis impedit, dicta esse culpa corrupti minus fuga neque tempora voluptatibus quae corporis, officia dolore non consequatur repellendus excepturi repudiandae porro doloremque recusandae. Unde, aperiam veniam eligendi voluptatibus ratione error perferendis officia tempora, nemo magni accusantium?</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dicta eius aliquid ex delectus, dolor sunt illo? Fugiat et placeat veritatis impedit, dicta esse culpa corrupti minus fuga neque tempora voluptatibus quae corporis, officia dolore non consequatur repellendus excepturi repudiandae porro doloremque recusandae. Unde, aperiam veniam eligendi voluptatibus ratione error perferendis officia tempora, nemo magni accusantium?</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dicta eius aliquid ex delectus, dolor sunt illo? Fugiat et placeat veritatis impedit, dicta esse culpa corrupti minus fuga neque tempora voluptatibus quae corporis, officia dolore non consequatur repellendus excepturi repudiandae porro doloremque recusandae. Unde, aperiam veniam eligendi voluptatibus ratione error perferendis officia tempora, nemo magni accusantium?</p>


                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dicta eius aliquid ex delectus, dolor sunt illo? Fugiat et placeat veritatis impedit, dicta esse culpa corrupti minus fuga neque tempora voluptatibus quae corporis, officia dolore non consequatur repellendus excepturi repudiandae porro doloremque recusandae. Unde, aperiam veniam eligendi voluptatibus ratione error perferendis officia tempora, nemo magni accusantium?</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dicta eius aliquid ex delectus, dolor sunt illo? Fugiat et placeat veritatis impedit, dicta esse culpa corrupti minus fuga neque tempora voluptatibus quae corporis, officia dolore non consequatur repellendus excepturi repudiandae porro doloremque recusandae. Unde, aperiam veniam eligendi voluptatibus ratione error perferendis officia tempora, nemo magni accusantium?</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dicta eius aliquid ex delectus, dolor sunt illo? Fugiat et placeat veritatis impedit, dicta esse culpa corrupti minus fuga neque tempora voluptatibus quae corporis, officia dolore non consequatur repellendus excepturi repudiandae porro doloremque recusandae. Unde, aperiam veniam eligendi voluptatibus ratione error perferendis officia tempora, nemo magni accusantium?</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dicta eius aliquid ex delectus, dolor sunt illo? Fugiat et placeat veritatis impedit, dicta esse culpa corrupti minus fuga neque tempora voluptatibus quae corporis, officia dolore non consequatur repellendus excepturi repudiandae porro doloremque recusandae. Unde, aperiam veniam eligendi voluptatibus ratione error perferendis officia tempora, nemo magni accusantium?</p>
        </div>



    </div>
  )
}
export default Scrollbasedanimations