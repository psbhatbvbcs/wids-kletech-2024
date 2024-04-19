import React from "react";
import Speakers from "./Speakers";

const About = () => {
  return (
    <div className="flex flex-col w-full md:flex-row">
      <div className="w-full md:w-1/2 p-4 md:p-10 text-justify">
        <span className="font-semibold">WiDS Hubballi</span> is independently
        organized by KLE Technological University to be part of the mission to
        increase participation of women in data science and to feature
        outstanding women doing outstanding work.
        <p>
          <br />

          <span className="font-semibold">
            {" "}
            The 7th Annual WiDS Datathon 2024 Challenge: Equity in Health Care
          </span>
        </p>
        <p>
          <br />
          The WiDS Datathon encourages women worldwide to hone their data
          science skills, creating a supportive environment for women to connect
          with others in their community who share their interests. Data
          scientists of all levels are invited to participate in the datathon,
          including beginners. In support of the global Datathon challenge, WiDS
          Hubballi is hosting a Datathon Workshop to assist the participants to
          enhance the required data science skillsets and participate
          effectively. Data science experts will engage in the sessions during
          this workshop and provide insights into analytical solutions for real
          world problems.
        </p>
      </div>
      <div className="w-full md:w-1/2 p-4 md:p-10 flex flex-col items-center justify-center h-[300px] md:h-auto mb-3">
        <div className="font-medium text-2xl underline">Updates</div>
        <img
          src="/Event-Hero-Image.jpg"
          className="h-[300px] rounded-lg absolute opacity-30"
        />
        <div className="font-normal">Coming soon!</div>
      </div>
    </div>
  );
};

export default About;
