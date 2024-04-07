import Image from "next/image";
import React from "react";

const Speakers = () => {
  return (
    <div className="w-full flex items-center justify-center flex-col" id="speakers">
      <div className="w-full bg-[#4AB969] text-3xl p-10 flex justify-center font-normal md:text-4xl">
        Speakers
      </div>
      <div className="w-full flex flex-col md:flex-row items-center justify-evenly p-10">
        <div className="flex flex-col items-center justify-center max-w-[500px] text-center m-5 md:m-0">
          <img
            src="/srujana-speaker1.png"
            alt="srujana speaker 1"
            className="w-[270px] h-[270px] rounded-full m-5"
          />
          <p className="text-2xl font-medium">Ms Srujana Kaddevarmuth</p>
          <p className="font-normal mb-4">
            AI Leader at Walmart Global Tech, USA
          </p>
          <p className="text-lg font-normal mb-4">
            Building Next Gen AI & Machine Learning Enterprises, Futurist,
            Speaker, AI Thought Leader & Investor -{" "}
            <a
              href="https://www.linkedin.com/in/srujana-kaddevarmuth-37a32b18/"
              target="_blank"
              className="text-blue-600 underline"
            >
              LinkedIn
            </a>
          </p>
          <p className="text-lg font-normal">
            <span className="font-semibold underline">Topic</span>: Generative
            AI applications in Retail
          </p>
          <p className="text-lg font-normal">
            <span className="font-semibold underline">Time</span>: 8:30am to
            9:30am IST
          </p>
        </div>
        <div className="flex flex-col items-center justify-center max-w-[500px] text-center">
          <img
            src="/ashwini-speaker2.png"
            alt="ashwini speaker 2"
            className="w-[270px] h-[270px] rounded-full m-5"
          />
          <p className="text-2xl font-medium">Ms Ashwini Chandrashekharaiah</p>
          <p className="font-normal mb-4">
            Senior Manager, Data Science at Walmart Global Tech India
          </p>
          <p className="text-lg font-normal mb-4">
            {/* Building Next Gen AI & Machine Learning Enterprises, Futurist,
            Speaker, AI Thought Leader & Investor -{" "} */}
            <a
              href="https://www.linkedin.com/in/ashwini-chandrashekharaiah/"
              className="text-blue-600 underline"
            >
              LinkedIn
            </a>
          </p>
          <p className="text-lg font-normal">
            <span className="font-semibold underline">Topic</span>: How to
            attempt and ace the datathon: Equity in healthcare
          </p>
          <p className="text-lg font-normal">
            <span className="font-semibold underline">Time</span>: 9:30am to
            10:30am IST
          </p>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
