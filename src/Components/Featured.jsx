import { motion } from "framer-motion";
import { Power4} from "gsap/all";
import React, { useState } from "react";

const Featured = () => {
  const [ishovering, setHovering] = useState(false);

  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className='text-8xl font-["Nenu_Montreal"] tracking-tight'>
          Featured Projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <div
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className="cardcontainer relative w-1/2 h-[75vh]"
          >
            <h1 className="absolute flex text-[#CDEA68] overflow-hidden right-full translate-x-1/2 -translate-y-1/2 top-1/2 z-[9] leading-none tracking-tighter text-6xl">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={ishovering ? { y: "0" } : { y: "100%" }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index*.06 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png"
                alt=""
              />
            </div>
          </div>
          <div className="cardcontainer relative rounded-xl w-1/2 h-[75vh] ">
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <h1 className="absolute flex overflow-hidden text-[#CDEA68] right-full translate-x-1/2 -translate-y-1/2 top-1/2 z-[9] leading-none tracking-tighter text-6xl">
                {"VISE".split("").map((item, index) => (
                  <motion.span
                  initial={{ y: "100%" }}
                  animate={ishovering ? { y: "0" } : { y: "100%" }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index*.06 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
                ))}
              </h1>
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
