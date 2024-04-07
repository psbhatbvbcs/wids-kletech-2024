import React from "react";
import Speakers from "./Speakers";

const About = () => {
  return (
    <div className="flex flex-col w-full md:flex-row">
      <div className="w-full md:w-1/2 p-4 md:p-10 text-justify">
        <span className="font-semibold">
          Women in Data Science (WiDS) Datathon
        </span>{" "}
        is a global initiative led by Stanford University, which aims to inspire
        women worldwide to learn more about data science. The WiDS Datathon
        encourages women worldwide to hone their data science skills, creating a
        supportive environment for women to connect with others in their
        community who share their interests. Data scientists of all levels are
        invited to participate in the datathon, including beginners.
        <p>
          <br />
          The 7th Annual WiDS Datathon 2024 Challenge is on
          <span className="font-semibold">
            {" "}
            &quot;Equity in Healthcare&quot;
          </span>
        </p>
        <p>
          <br />
          &quot;WiDS Hubballi is an independent event that is organized by KLE
          Technological University as part of the annual WiDS Worldwide
          conference, the WiDS Datathon, and an estimated 200 WiDS Regional
          Events worldwide. Everyone is invited to attend all WiDS conference
          and WiDS Datathon Workshop events which feature outstanding women
          doing outstanding work.&rdquo; <br />
          KLE Technological University, (WiDS Hubballi) is hosting a workshop in
          support of the global Datathon challenge to assist the participants to
          hone the required data science skillsets and participate effectively.
          Data science experts will engage in the sessions during this workshop
          and provide insights into analytical solutions for real world
          problems.
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
