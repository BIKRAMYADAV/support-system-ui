import React, { useState } from "react";
import { motion, useTransform, useMotionValue, useSpring } from "framer-motion";


const items = [
  {
    id: 1,
    image: '../../public/emp-1.jpg',
    name: 'person 1',
    designation: 'Designation 1'
  },
{
    id : 2,
    image : '../../public/emp-2.jpg',
    name : 'person 2',
    designation:'Designation 2',

},
{
    id : 3,
    image : '../../public/emp-3.jpeg',
    name : 'person 3',
    designation:'Designation 3',
    
}
];

export const Tooltip = () => {
  // hoveredIndex is varied with the help of use state and set accordingly
  const [hoveredIndex, setHoveredIndex] = useState(null)

  //Setting up the animation
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0) // going to set this value on mouse move
 
  // rotating the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  )

  // translating the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  )

  //handler function for mouse movement
  const handleMouseMove = (event) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // x value is set, which is then used in transform and rotate
  };

  return (
    <div className="flex">
      {items.map((item) => (
        <div
          className="-mr-4 relative group"
          key={item.id}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {hoveredIndex === item.id && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.6 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 260,
                  damping: 10,
                },
              }}
              exit={{ opacity: 0, y: 20, scale: 0.6 }}
              style={{
                translateX,
                rotate,
                whiteSpace: "nowrap",
              }}
              className="absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
            >
              <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px" />
              <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px" />
              <div className="font-bold text-white relative z-30 text-base">
                {item.name}
              </div>
              <div className="text-white text-xs">{item.designation}</div>
            </motion.div>
          )}
          <img
            onMouseMove={handleMouseMove}
            height={100}
            width={100}
            src={item.image}
            alt={item.name}
            className="object-cover !m-0 !p-0 object-top rounded-full h-14 w-14 border-2 group-hover:scale-105 group-hover:z-30 border-white relative transition duration-500"
          />
        </div>
      ))}
    </div>
  );
};
