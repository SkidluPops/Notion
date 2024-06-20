import { useState } from 'react'
import './App.css'
import Product from './components/product'
import Download from './components/Download'
import Solutions from './components/solutions'
import Pricing from './components/Pricing'
import Resources from './components/Resources'
import { motion } from "framer-motion"
import BASICSOFMOTION from './components/BASICSOFMOTION'
import Gestures from './components/gestures'
import Animationcontrols from './components/animationcontrols'
import Viewbasedanimations from './components/viewbasedanimations'
import Scrollbasedanimations from './components/scrollbasedanimations'
import Firstheading from './components/firstheading'
import SecondHeading from './components/secondheading'
import ThirdHeading from './components/thirdheading'
import Threedotright from './threedotright'
import Clickmain from './components/Clickmain.jsx'



function App() {
  const [hovered, setHovered] = useState(0)

  return (
<div className="containerr w-full h-[12rem] sm:[0px 32px] ">
    
    <div className="navbarall p-[19px] lg:hidden  flex w-full bg-white items-center h-[50px] justify-between ">
      <div className="leftNOTION">
        <img src="/images/NOTION.png" alt=""/>
      </div>

      <div className="rightmain flex flex-col justify-end text-center items-center 
      "> 
      <Threedotright/>

      
      </div>
    </div>


    <div className="navbar hidden lg:flex w-full bg-gray-200 items-center   h-[50px] justify-between">
      
    

      <div className="leftside flex justify-center items-center p-5 gap-5">

        <div className="NOTION">
        <img src="/images/NOTION.png" alt="" />
        </div>

        <div className="leftnavbarmain">
          <div className="lefticons gap-7 flex">

            {/* CREATING A PARENT DIV FOR EVERY ITEM */}

            <div className="product relative ">


            <div className="item transition-colors duration-300 hover:bg-gray-300 rounded-[5px] " onMouseEnter={() =>{setHovered(1)} }
            onMouseLeave={() =>{setHovered(0)}}
            >Product </div>
            </div>


            <div className="download relative"
             >
            <div className="item transition-colors duration-300 hover:bg-gray-300 rounded-[5px] ease-in-out " 
            onMouseEnter={() => {setHovered(2)}}
            onMouseLeave={() => {setHovered(0)}} 
            >Download</div>
            </div>



            <div className="solutions relative ">
            <div className="item transition-colors duration-300 hover:bg-gray-300 rounded-[5px] " onMouseEnter={() =>{setHovered(3)} }
            onMouseLeave={() =>{setHovered(0)} }
            >Solutions</div>
            </div>


            <div className="resources relative ">
            <div className="item transition-colors duration-300 hover:bg-gray-300  rounded-[5px] " onMouseEnter={() =>{setHovered(4)} }
            onMouseLeave={() =>{setHovered(0)} }
            >Resources</div>
            </div>


            <div className="pricing relative ">
            <div className="item transition-colors duration-300 hover:bg-gray-300 rounded-[5px] " onMouseEnter={() =>{setHovered(5)} }
            onMouseLeave={() =>{setHovered(0)} }
            >Pricing</div>
            </div>
          </div>
        </div>


        <div className={`hoverout absolute top-14 left-1 ${hovered==1?"block":"hidden"} `}> <Product/> 
        </div>

        <div className={`hoverout absolute top-14 left-1 ${hovered==2?"block":"hidden"} `}> <Download/> 
        </div>

        <div className={`hoverout absolute top-14 left-1 ${hovered==3?"block":"hidden"} `}> <Solutions/> 
        </div>

        <div className={`hoverout absolute top-14 left-1 ${hovered==4?"block":"hidden"} `}> <Resources/> 
        </div>

        <div className={`hoverout absolute top-14 left-1 ${hovered==5?"block":"hidden"} `}> <Pricing/> 
        </div>
        </div>


      <div className="rightMAIN pr-4">
        <div className="rightitems flex gap-9 ">
          <div className="yoss">Request a demo</div>
          <div className="yoss">Log In</div>
          <div className="yoss bg-black text-white rounded-md w-32 h-8 items-center flex justify-center ">Get Notion Free</div>
        </div>
      </div>
    </div>

    <div className="MAINPARA flex pt-16 sm:pt-9 text-5xl md:text-6xl lg:text-6xl lg:flex justify-center text-center tracking-tight items-center font-sans font-medium">
   
      <h1 className='w-full  ' >
     <Firstheading/>
      </h1> 
      
    </div>

    <div className="MAINtext pt-6 w-23 text-2xl flex justify-center tracking-tight items-center font-sans font-medium ">


    <h3 className='lg:w-[21rem] w-[18rem] leading-7 text-center ' >
    <SecondHeading/>
     </h3>
    </div>


    <div className="bluebuttons gap-4 p-7 flex justify-center items-center  ">
      <ThirdHeading/>
    </div>


{/* mobile image */}
    <div className="mainpage md:hidden lg:hidden flex justify-center items-center text-center   overflow-x-hidden ">
      <img className='w-full   object-left justify-center items-center flex ' src="public/images/Screenshot 2024-06-13 at 5.17.49 PM.png" alt="" />
    </div>


{/* TABLET IMAGE */}
    <div className="mainpage hidden md:flex lg:hidden w-[90vh] md-[80vh] justify-center items-center text-center   overflow-x-hidden ">
      <img className='w-[80vh] md:w-[80vh]  object-left justify-center items-center flex ' src="/images/TABLETGIRLPICTURE.png" alt="" />
    </div>


    {/* laptop img */}
    <div className="mainpage hidden md:hidden lg:flex justify-center items-center text-center   overflow-x-hidden ">
      <img className='w-full   object-left justify-center items-center flex ' src="public/images/LAPTOPLADY.png" alt="" />
    </div>

  <div className='secondpage h-[600px] sm:[300px] justify-center jus flex flex-col '>

    <div className="FORBESHEADING lg:w-full font-serif gap-6 lg:pt-[800px] pt-[800px] text-4xl flex flex-col justify-center tracking-tight items-center  font-medium ">
      <div className="AI  gap-9 flex justify-center text-center items-center ">

    <div className="forbesyaaar flex  lg:w-full flex-col  ">

      <div className='   flex justify-center text-center  tracking-tight items-center ' >
          "Your AI everything app." 
        </div>
      </div>
    </div>

    <div className="forbes items-center flex justify-center ">
      <img className='w-16' src="/images/forbes.png" alt=""/>
    </div>
    </div>
    <div className="spacer h-32 ">

    </div>


    <div className="maindocs lg:flex  justify-center items-center ">
    <div className="itemlist gap-9 pt-[83px] flex flex-col justify-center items-center ">
     
     
        {/* <div className="headingMAIN flex gap-10 ">

        <div className="items hidden lg:flex flex-col justify-center items-center ">
          <div className="docsimg">
            <img className='w-10' src="/images/DOCS.png" alt="" />
          </div>
          <div className="DOCS text-2xl flex justify-center tracking-tight items-center font-sans font-medium  ">
            Docs
          </div>
        </div>

        <div className="items hidden lg:flex  flex-col justify-center items-center ">
        <div className="docsimg">
            <img className='w-10' src="/images/WIKIS.png" alt="" />
          </div>
          <div className="Wikis  text-2xl flex justify-center tracking-tight items-center font-sans font-medium ">
            Wikis
          </div>
        </div>


        <div className="items hidden lg:flex  flex-col justify-center items-center ">
        <div className="docsimg">
            <img className='w-10' src="/images/ARROWPROJECTS.png" alt="" />
          </div>
          <div className="Projects text-2xl flex justify-center tracking-tight items-center font-sans font-medium  ">
            Projects
          </div>
        </div>


        <div className="items hidden lg:flex flex-col justify-center items-center ">
          <div className="docsimg">
            <img className='w-10 flex justify-center items-center' src="/images/CALENDAR.png" alt="" />
          </div>  
          <div className="Calendar text-2xl flex justify-center tracking-tight items-center font-sans font-medium">
            Calendar
          </div>
          </div>

    </div> */}
        <div >
      <Clickmain/>
      </div>
      </div>
    </div>

    <div className="afterlist hidden lg:flex p-6 flex-col justify-center items-center text-center ">
      <h1 className='w-[20rem]' >Ask anything. Notion will answer. <span className='text-indigo-600 ' > Learn more </span> </h1>
    </div>

    <div className="afterlist flex lg:hidden p-6 flex-col justify-center items-center text-center ">
      <h1 className='w-[20rem]' >Ask anything. Notion will answer. 
        <div className='text-indigo-600 text-[18px] ' > Learn more 
          </div> </h1>
    </div>



<div className="millions pt-16 text-5xl flex justify-center tracking-tight text-center items-center font-sans font-medium ">
  Millions run on Notion every day
</div>

<div className="para flex pt-5 flex-col justify-center w-full  items-center text-center  ">
  <h1 className='w-[20rem] items-center text-center flex justify-center' >

Powering the world’s best teams, from next-generation startups to established enterprises.
  </h1>
</div>
<div className="mains">

<div className="request  bg-white text-cyan-500 rounded-md  h-8 items-center flex flex-col justify-center ">
       <h1 className='w-52 flex items-center justify-center gap-2 '>
        Read customer stories <span><img className='w-4'  src="/images/rightarrow.png" alt="" /></span>
        </h1>
    </div>

    <div className="logos flex justify-center p-4 items-center overflow-hidden   ">
    <img className='w-[1000px] md:w-[1000px]' src="public/images/Screenshot 2024-06-19 at 6.31.37 PM.png" alt="" />
    </div>
  </div>
</div>



        <div  className='pt-[145px]' >
          <BASICSOFMOTION/> 
        </div>


        <div className="gestures">
          <Gestures/>
        </div>

        <div className="animationcontrols">
          <Animationcontrols/>
        </div>

        <div className="animationcontrols">
          <Viewbasedanimations/>
        </div>

        <div className="scrollbasedanimations">
        <Scrollbasedanimations/>
        </div>
</div>

  )
}

export default App