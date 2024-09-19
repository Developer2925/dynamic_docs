import React, { useRef, useState } from "react";
import Card from "./Card";

const Foreground = () => {
  const foreGroundRef = useRef();
  const data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      fileSize: "0.9 mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Upload",
        tagColor: "bg-blue-600",
      },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing.",
      fileSize: "1.2 mb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Download now",
        tagColor: "bg-green-500",
      },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur iorem ipsum dolor sit amet consectetur adipisicing.",
      fileSize: "0.4 mb",
      close: true,
      tag: {
        isOpen: false,
        tagTitle: "Upload",
        tagColor: "bg-blue-600",
      },
    },
  ];
  return (
    <>
      <div
        ref={foreGroundRef}
        className="fixed top-0 left-0 p-5 w-full h-full z-[3] flex gap-10 flex-wrap"
      >
        {data.map((item, index) => (
          <Card data={item} reference={foreGroundRef} />
        ))}
      </div>
    </>
  );
};

export default Foreground;
