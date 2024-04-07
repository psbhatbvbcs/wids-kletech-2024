import React from "react";
import { Button } from "./ui/button";

const Register = () => {
  return (
    <div
      id="events"
      className="flex flex-col justify-center items-center p-10 bg-gray-300 text-center"
    >
      <div className="text-2xl font-medium md:text-3xl mb-4">
        Datathon Workshop 2024
      </div>
      <div className="font-medium text-2xl mb-4">27th April 2024</div>
      <div className="font-medium text-xl mb-4">8:30 am to 11:30 am IST</div>
      <a
        href="https://forms.gle/EZpRc2anBE3YESySA"
        target="_blank"
        rel="noreferrer"
      >
        <Button
          size="lg"
          className="bg-[#4AB969] text-black text-lg hover:bg-gray-100"
        >
          Register Now!
        </Button>
      </a>
    </div>
  );
};

export default Register;
