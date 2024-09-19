import React from "react";
import Background from "./components/Background";
import Foreground from "./components/Foreground";

const App = () => {
  return (
    <>
      <div className="relative w-full h-screen bg-[#212121] gilroy-sb">
        <Background />
        <Foreground />
      </div>
    </>
  );
};

export default App;
