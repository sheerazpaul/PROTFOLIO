import React, { useState } from "react";
import Button from "./Button";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center">
      <div
        className="w-full max-w-6xl mx-auto
                    backdrop-blur-sm
                   border border-[#3a8fa0] 
                   px-8 py-4 mt-3
                   flex items-center justify-between
                   rounded-2xl shadow-lg"
      >
        <div className="text-2xl font-bold text-white hover:scale-105 transition duration-200">
          <span className="text-[#4eb1c5]">Sheeraz</span> Paul
        </div>

        <div className="hidden md:flex gap-8 mr-8">
          <Button name="Home" target="home" />
          <Button name="About" target="about" />
          <Button name="Skills" target="skill" />
          <Button name="Projects" target="project" />
          <Button name="Experience" target="experience" />
          <Button name="Contact" target="contact" />
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-3xl focus:outline-none"
          >
            {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>

        <a
          href="https://www.linkedin.com/in/sheeraz-paul-5430aa39a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="hidden md:block h-10 px-5 bg-[#4eb1c5] rounded-xl text-white font-semibold hover:bg-[#3a8fa0] transition hover:scale-105">
            Let's connect
          </button>
        </a>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-sm flex flex-col items-center py-4 md:hidden border-t border-[#3a8fa0] rounded-b-2xl space-y-4">
          <Button name="Home" target="home" />
          <Button name="About" target="about" />
          <Button name="Skills" target="skill" />
          <Button name="Projects" target="project" />
          <Button name="Experience" target="Myexperience" />
          <Button name="Contact" target="contact" />
          <button className="h-10 px-5 bg-[#4eb1c5] rounded-xl text-white font-semibold hover:bg-[#3a8fa0] transition">
            Let's connect
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
