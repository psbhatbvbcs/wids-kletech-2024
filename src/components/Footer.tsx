import React from "react";

const Footer = () => {
  return (
    <div className="w-full flex items-center justify-center flex-col">
      <div className="w-full bg-[#4AB969] text-xl p-4 flex justify-center font-normal md:text-xl">
        KLE Technological University, Huballi
      </div>
      <p className="w-full bg-[#4AB969] flex justify-center font-medium pb-2">
        <a href="https://wids.kletech.ac.in/" target="_blank">
          <span className="font-medium">Archive - </span>WiDS Datathon Workshop
          2023
        </a>
      </p>
    </div>
  );
};

export default Footer;
