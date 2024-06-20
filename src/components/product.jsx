import React from 'react'

const Product = () => {
  return (
    <div className=' bg-neutral-100 h-[220px] relative left-[128px] flex top-[10px] text-black justify-around w-[500px]  rounded-[6px] transition-all ease-in-out duration-500'>
      <div className="leftproduct relative left-[-10px] flex flex-col">

        <div className="leftitems1 flex gap-2 ">
          <div className="1stsvg flex flex-col items-center justify-center">
            <img class="w-9" src="/images/SPARKLES.png" alt=""/>
          </div>
          <div className="AIandINFO flex flex-col leading-5 ">
            <div className="AI font-semibold">
              AI
            </div>
            <div className="INFO font-extralight text-sm ">
              Integrated AI assistant
            </div>
          </div>
        </div>


        <div className="leftitems2 flex gap-2 ">
          <div className="1stsvg flex flex-col items-center justify-center">
            <img class="w-9" src="/images/DOCS.png" alt=""/>
          </div>
          <div className="AIandINFO flex flex-col leading-5 ">
            <div className="AI font-semibold">
              Docs
            </div>
            <div className="INFO font-extralight text-sm ">
              Simple & powerful
            </div>
          </div>
        </div>


        <div className="leftitems3 flex gap-2">
        <div className="1stsvg flex flex-col items-center justify-center">
            <img class="w-9" src="/images/WIKIS.png" alt=""/>
          </div>
          <div className="AIandINFO flex flex-col leading-5 ">
            <div className="AI font-semibold">
              Wikis
            </div>
            <div className="INFO font-extralight text-sm ">
              Centralize your knowledge
            </div>
          </div>
        </div>


        <div className="leftitems4 flex gap-2">
        <div className="1stsvg flex flex-col items-center justify-center">
            <img class="w-9" src="/images/ARROWPROJECTS.png" alt=""/>
          </div>
          <div className="AIandINFO flex flex-col leading-5 ">
            <div className="AI font-semibold">
              Projects
            </div>
            <div className="INFO font-extralight text-sm ">
              Connected, flexible workflows
            </div>
          </div>
        </div>


        <div className="leftitems5 flex gap-2">
        <div className="1stsvg flex flex-col items-center justify-center">
            <img class="w-9" src="/images/CALENDAR.png" alt=""/>
          </div>
          <div className="AIandINFO flex flex-col leading-5 ">
            <div className="AI font-semibold">
              Calendar
            </div>
            <div className="INFO font-extralight text-sm ">
              Time and work, together
            </div>
          </div>
        </div>

      </div>

      <div className="middleline w-[0.5px] h-[220px] justify-center flex flex-col items-center relative left-[-28px] bg-white">

      </div>
    <div className=' rightmain flex flex-col relative left-[-55px] ' >
    <div className="rightproduct flex flex-col  ">

      <div className="rightitems1 flex gap-2">
          <div className="AIandINFO flex flex-col leading-5 ">
            <div className="AI font-semibold">
              Template gallery
            </div>
            <div className="INFO font-extralight text-sm ">
              Setups to get you started
            </div>
          </div>
      </div>
      </div>

      <div className="rightitems2 flex gap-2">
          <div className="AIandINFO flex flex-col leading-5 ">
            <div className="AI font-semibold">
              Customer stories
            </div>
            <div className="INFO font-extralight text-sm ">
              See how teams use Notion
            </div>
          </div>
      </div>

      <div className="rightitems3 flex gap-2">
          <div className="AIandINFO flex flex-col leading-5 ">
            <div className="AI font-semibold">
              Connections
            </div>
            <div className="INFO font-extralight text-sm ">
              Connect your tools to Notion
            </div>
          </div>
      </div>

      </div>
{/* --- */}
    </div>
  )
}

export default Product
