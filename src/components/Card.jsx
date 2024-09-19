import React from "react";
import { FaRegFileLines } from "react-icons/fa6";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

const Card = ({ data, reference }) => {
  return (
    <>
      <motion.div
        drag
        whileDrag={{ scale: 1.1 }}
        dragConstraints={reference}
        className="relative flex-shrink-0 overflow-hidden w-60 h-72 rounded-[40px] text-[#f6f6f6] bg-zinc-700/80 px-8 py-10"
      >
        <FaRegFileLines className="" />
        <p className=" text-sm mt-5 gilroy-l leading-tight">{data.desc}</p>
        <div className="cardFooter absolute bottom-0 left-0 w-full">
          <div
            className={`py-2 px-8 ${
              data.tag.isOpen ? "" : "mb-4"
            } flex items-center justify-between text-[12px] gilroy-m`}
          >
            <h5 className="">{data.fileSize}</h5>
            <span className=" w-5 h-5 rounded-full flex items-center justify-center bg-sky-200 text-[#212121]">
              {data.close ? <IoClose /> : <LuDownload />}
            </span>
          </div>
          {data.tag.isOpen && (
            <div className={`tag w-full ${data.tag.tagColor} p-3`}>
              <h3 className="text-sm gilroy-m text-center">
                {data.tag.tagTitle}
              </h3>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default Card;
