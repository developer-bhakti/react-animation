// https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg
import React from "react";

function About() {
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className="font-['Neue_Montreal'] text-[4vw] leading-[4.5vw] tracking-tight">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum autem
        quos ducimus repellat corrupti, voluptas et placeat! Facilis, voluptatem
.
      </h1>
      <div className="w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#a1b562]">
        <div className="w-1/2">
            <h1 className="text-7xl">Our approach :</h1>
            <button className=" flex uppercase gap-10 items-center px-10 py-6 mt-10 bg-zinc-900 rounded-full text-white">Read More
                <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
            </button>
        </div>
        <div className="w-1/2 h-[70vh] rounded-3xl bg-[#b0c859]">
        </div>     
      </div>
    </div>
  );
}

export default About;
