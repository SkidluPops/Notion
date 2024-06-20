import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Clickmain = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const components = [
    { heading: 'AI', subheading: 'Ask anything. Notion will answer.', image: '/images/screenshot.png', smallImage: 'public/images/SPARKLES.png' },
    { heading: 'Docs', subheading: 'Simple, powerful, beautiful. Next-gen notes & docs.', image: '/images/DOCSIMAGE.png', smallImage: 'public/images/DOCS.png' },
    { heading: 'Wikis', subheading: 'Centralized your knowledge. No more hunting for answers.', image: '/images/WIKISIMG.png', smallImage: 'public/images/WIKIS.png' },
    { heading: 'Projects', subheading: 'Connected and flexible, to tackle any project.', image: '/images/PROJECTSIMG.png', smallImage: 'public/images/ARROWPROJECTS.png' },
    { heading: 'Calendars', subheading: 'Manage your time and projects, together.', image: '/images/CALENDARIMG.png', smallImage: 'public/images/CALENDAR.png' },
  ];

  const nextComponent = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % components.length);
  };

  const prevComponent = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + components.length) % components.length);
  };

  return (
    <div className="w-full flex flex-col items-center lg:flex lg:justify-between">
      <div className="headingMAIN flex gap-10 mb-10 lg:mb-0">
        {components.map((component, index) => (
          <div
            key={index}
            className={`items flex flex-col justify-center items-center cursor-pointer transition-all duration-300 ${activeIndex === index ? 'text-black' : 'text-gray-400'}`}
            onClick={() => setActiveIndex(index)}
          >

            <div className={`docsimg transition-all duration-300 ${activeIndex === index ? '' : 'opacity-50'}`}>
              <img className="w-10 hidden md:hidden lg:flex " src={component.smallImage} alt={component.heading} />
            </div>
            <div className={`text-2xl lg:flex hidden md:hidden justify-center tracking-tight items-center font-sans font-medium transition-all duration-300 ${activeIndex === index ? 'text-black' : 'text-gray-400'}`}>
              {component.heading}
            </div>
          </div>
        ))}
      </div>


      <div className="text-center w-full lg:max-w-full overflow-hidden ">
        <motion.div
          key={activeIndex}
          className="relative mx-auto max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, delay: 0.001 }}
        >
          <h1 className="text-3xl mb-2">{components[activeIndex].heading}</h1>
          <h2 className="text-xs font-semibold mb-4">{components[activeIndex].subheading}</h2>

          <motion.img
            key={components[activeIndex].image}
            src={components[activeIndex].image}
            alt={components[activeIndex].heading}
            className="lg:w-[1000px] overflow-hidden w-[500px]  rounded-lg shadow-md"
          />

          <motion.button
            onClick={prevComponent}
            className="absolute left-1 top-[184px] md:top-[215px] w-[40px] top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-800"
          >
            &#8592;
          </motion.button>
          <motion.button
            onClick={nextComponent}
            className="absolute right-1 top-[184px] md:top-[215px] transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full w-[40px] hover:bg-gray-800"
          >
            &#8594;
          </motion.button>
        </motion.div>

        <div className="flex justify-center mt-6">
          {components.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full mx-1 ${activeIndex === index ? 'bg-gray-700' : 'bg-gray-300'}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clickmain;
