import React from "react";
import Header from "./Header";

import MenuList from "../MenuList";

const Wrapper = ({ children }) => {
  return (
    <div className="w-full flex md:flex-row flex-col items-center justify-center h-screen">
      <div className="md:block hidden md:w-[20%] w-full h-full bg-[#0F2C64]">
        <MenuList />
      </div>
      <div className="w-full h-full ">
        <Header />
        <div className="block md:hidden">
          <MenuList />
        </div>
        <div className="w-full h-[87vh] flex items-center justify-start flex-col overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
