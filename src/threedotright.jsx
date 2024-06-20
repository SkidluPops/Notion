import React, { useState } from 'react';
import MobileProduct from './MobileProduct';

const Threedotright = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="threedot justify-center  items-end w-[30px] h-[30px] flex flex-col gap-1" onClick={toggleNav}>
      <div className="threedot flex flex-col gap-1">
        <div className="dots w-[15px] h-[2px] bg-black"></div>
        <div className="dots w-[15px] h-[2px] bg-black"></div>
        <div className="dots w-[15px] h-[2px] bg-black"></div>
      </div>
      {isNavOpen && <Navbar />}
    </div>
  );
};

const Navbar = () => {
  return (
    <div className="navbar bg-gray-200 md:w-[110vh] h-[900px] absolute top-[3rem] left-[-1rem] w-[50vh] p-4 shadow-lg">
      <div className="product flex justify-between p-[10px]">
        <MobileProduct />
        <div className="downarrow w-[13px] flex flex-col items-center justify-center">
          <img src="/images/svg-image-35.png" alt="" />
        </div>
      </div>

      <div className="product flex justify-between p-[10px]">
        <div className="leftproduct font-sans font-bold">Solutions</div>
        <div className="downarrow w-[13px] flex flex-col items-center justify-center">
          <img src="public/images/svg-image-35.png" alt="" />
        </div>
      </div>

      <div className="product flex justify-between p-[10px]">
        <div className="leftproduct font-sans font-bold">Resources</div>
        <div className="downarrow w-[13px] flex flex-col items-center justify-center">
          <img src="public/images/svg-image-35.png" alt="" />
        </div>
      </div>

      <div className="product flex justify-between p-[10px]">
        <div className="leftproduct font-sans font-bold">Download</div>
        <div className="downarrow w-[13px] flex flex-col items-center justify-center">
          <img src="public/images/svg-image-35.png" alt="" />
        </div>
      </div>

      <div className="product flex justify-between p-[10px]">
        <div className="leftproduct font-sans font-bold">Pricing</div>
        <div className="downarrow w-[13px] flex flex-col items-center justify-center">
          <img src="public/images/svg-image-35.png" alt="" />
        </div>
      </div>

      <div className="product flex justify-between p-[10px]">
        <div className="leftproduct font-sans font-bold">Request a Demo</div>
        <div className="downarrow w-[13px] flex flex-col items-center justify-center">
          <img src="public/images/svg-image-35.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Threedotright;
