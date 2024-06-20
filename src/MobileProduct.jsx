import React, { useState } from 'react';

const MobileProduct = () => {
  const [isSubNavOpen, setIsSubNavOpen] = useState(false);

  const toggleSubNav = () => {
    setIsSubNavOpen(!isSubNavOpen);
  };

  return (
    <div>
      <div className="leftproduct font-sans font-bold" onClick={toggleSubNav}>
        Product
      </div>
      {isSubNavOpen && <SubNav />}
    </div>
  );
};

const SubNav = () => {
  return (
    <div className="subnav bg-gray-100 p-2 shadow-lg mt-2">
      <div>This is a representation of the sub-menu.</div>
      {/* Add more items here as needed */}
    </div>
  );
};

export default MobileProduct;
