import { useState } from 'react'
import './App.css'
import Product from './components/product'
import Download from './components/Download'
import Solutions from './components/solutions'
import Pricing from './components/Pricing'
import Resources from './components/Resources'


function App() {
  const [hovered, setHovered] = useState(0)

  return (
   <div className="containerr w-full h-[12rem] ">

    <div className="navbar w-full bg-white items-center flex h-[50px] justify-between">
      

      <div className="leftside flex justify-center items-center p-5 gap-5">

        <div className="NOTION">
        <img src="/images/NOTION.png" alt="" />
        </div>

        <div className="leftnavbarmain">
          <div className="lefticons gap-7 flex">

            {/* CREATING A PARENT DIV FOR EVERY ITEM */}

            <div className="product relative ">


            <div className="item transition-colors duration-300 hover:bg-gray-300 rounded-[5px] " onMouseEnter={() =>{setHovered(1)} }
            onMouseLeave={() =>{setHovered(0)} }
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

    <div className="MAINPARA pt-24 text-6xl flex justify-center tracking-tight items-center font-sans font-medium">
    Write, plan, organize, play.
    </div>

    <div className="MAINtext pt-6 w-23 text-2xl flex justify-center tracking-tight items-center font-sans font-medium ">

    <h3 className='w-[1px] leading-7 text-center ' >
    Turn ideas into action
    with Notion’s AI-powered workspace.
    </h3>
    </div>


    <div className="bluebuttons gap-4 p-7 flex justify-center items-center  ">
      <div className="getnotion  bg-cyan-500	 text-white rounded-md w-32 h-8 items-center flex justify-center  ">
      Get Notion free
      </div>
      <div className="request  bg-white text-cyan-500 rounded-md w-36 h-8 items-center flex justify-center  ">
        Request a demo <span><img className='w-4  ' src="/images/rightarrow.png" alt="" /></span>
      </div>
    </div>


    <div className="mainpage">
      <img src="/images/MAINPICHUGE.png" alt="" />
    </div>

  <div className='secondpage h-[600px] justify-center flex flex-col '>

    <div className="FORBESHEADING font-serif  pt-24 text-4xl flex justify-center tracking-tight items-center  font-medium ">
      "Your AI everything app."
    </div>

    <div className="forbes items-center flex justify-center ">
      <img className='w-16' src="/images/forbes.png" alt="" />
    </div>

    <div className="spacer h-32 ">

    </div>

    <div className="itemlist gap-16 flex justify-center items-center ">
      <div className="items flex flex-col justify-center items-center ">
        <div className="aiimg">
        <img className='w-10' src="/images/SPARKLES.png" alt="" />
        </div>
        <div className="ai text-2xl flex justify-center tracking-tight items-center font-sans font-medium  ">
          AI
        </div>
      </div>

      <div className="items flex flex-col justify-center items-center ">
        <div className="docsimg">
          <img className='w-10' src="/images/DOCS.png" alt="" />
        </div>
        <div className="DOCS text-2xl flex justify-center tracking-tight items-center font-sans font-medium  ">
          Docs
        </div>
      </div>

      <div className="items flex flex-col justify-center items-center ">
      <div className="docsimg">
          <img className='w-10' src="/images/WIKIS.png" alt="" />
        </div>
        <div className="Wikis  text-2xl flex justify-center tracking-tight items-center font-sans font-medium ">
          Wikis
        </div>
      </div>


      <div className="items flex flex-col justify-center items-center ">
      <div className="docsimg">
          <img className='w-10' src="/images/ARROWPROJECTS.png" alt="" />
        </div>
        <div className="Projects text-2xl flex justify-center tracking-tight items-center font-sans font-medium  ">
          Projects
        </div>
      </div>


    <div className="items flex flex-col justify-center items-center ">
      <div className="docsimg">
          <img className='w-10 flex justify-center items-center ' src="/images/CALENDAR.png" alt="" />
        </div>
        <div className="Calendar text-2xl flex justify-center tracking-tight items-center font-sans font-medium  ">
          Calendar
        </div>
      </div>
    </div>

    <div className="afterlist flex p-6 flex-col justify-center  items-center text-center ">
      <h1 className='w-[22rem]' >Ask anything. Notion will answer. <span className='text-indigo-600 	' > Learn more </span> </h1>
    </div>

<div className="newimg w-[200px] h-[130px] justify-center flex items-center ">
  <img src="public/images/Screenshot 2024-06-10 at 4.12.52 PM.png" alt="" />
</div>

  </div>

  </div>

  )
}

export default App
