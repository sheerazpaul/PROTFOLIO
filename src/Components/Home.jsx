import React, { useState, useEffect } from "react";
import My_Profile from "../My_profile.json";
import { FaMapMarkerAlt, FaGithub, FaLinkedin,} from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { IoArrowDownCircleSharp } from "react-icons/io5";

const Home = () => {
  const { personal,  socialLinks } = My_Profile;

  const [typedName, setTypedName] = useState("");
  const [typedRole, setTypedRole] = useState("");
  const [typedSpecialization, setTypedSpecialization] = useState("");
  const [active, setActive] = useState(null);

  const iconMap = {
    github: FaGithub,
    linkedin: FaLinkedin,
  };

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedName(personal.name.slice(0, i + 1));
      i++;
      if (i === personal.name.length) clearInterval(interval);
    }, 70);
    return () => clearInterval(interval);
  }, [personal.name]);

  useEffect(() => {
    if (typedName === personal.name) {
      let i = 0;
      const interval = setInterval(() => {
        setTypedRole(personal.role.slice(0, i + 1));
        i++;
        if (i === personal.role.length) clearInterval(interval);
      }, 60);
      return () => clearInterval(interval);
    }
  }, [typedName, personal.role]);

  useEffect(() => {
    if (typedRole === personal.role && personal.specialization) {
      let i = 0;
      const interval = setInterval(() => {
        setTypedSpecialization(personal.specialization.slice(0, i + 1));
        i++;
        if (i === personal.specialization.length) clearInterval(interval);
      }, 40);
      return () => clearInterval(interval);
    }
  }, [typedRole, personal.specialization]);

  return (
    <div className=" flex justify-center pt-24 px-4 bg-black">
      <div
        className="w-full max-w-6xl
                   bg-black/95 backdrop-blur-md
                   border
                   rounded-2xl shadow-md
                   px-6 md:px-10 py-12 md:py-16
                   flex flex-col items-center space-y-8 md:space-y-12"
      >
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-white">
            <span className="text-[#4eb1c5]">Sheeraz</span> Paul
          </h2>
          <p className="text-white text-lg sm:text-xl md:text-2xl font-medium">
            {typedRole}
          </p>
          {typedSpecialization && (
            <p className="text-white text-lg sm:text-xl md:text-2xl font-medium">
              {typedSpecialization}
            </p>
          )}
        </div>

        {typedRole === personal.role && (
          <button
            onClick={() => setActive(1)}
            className="px-6 py-2 rounded-xl w-42
                        text-white border-2 border-[#4eb1c5]
                       hover:bg-[#3a8fa0] transition font-bold hover:scale-105"
          >
            View Profile
          </button>
        )}

        {active && (
          <div
            className="w-full max-w-4xl
                       bg-black/95 backdrop-blur-md
                       border border-[#3a8fa0] 
                       rounded-2xl shadow-md
                       p-4 md:p-6
                       flex flex-col md:flex-row gap-4 md:gap-6 text-white"
          >
            <img
              src={personal.profileImage}
              alt="Profile"
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-2xl object-cover"
            />

            <div className="flex-1">
              <p className="text-sm sm:text-base md:text-lg">{personal.ctaText}</p>

              <div className="mt-4 space-y-1 sm:space-y-2 text-gray-600">
                <p className="flex items-center gap-2">
                  <FaMapMarkerAlt className="hover:text-[#4eb1c5]" /> {personal.location}
                </p>
                <p className="flex items-center gap-2">
                  <MdEmail className="hover:text-[#4eb1c5]" /> {personal.email}
                </p>
                <p className="flex items-center gap-2">
                  <MdPhone className="hover:text-[#4eb1c5]" /> {personal.phone}
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-wrap justify-center gap-4">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.icon];
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center
                           rounded-full bg-black border-2 border-[#3a8fa0]
                           hover:bg-[#3a8fa0] transition text-white hover:scale-105 "
              >
                {Icon && <Icon size={20} sm={24} />}
              </a>
            );
          })}
        </div>

     <div
  onClick={() => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  }}
className="text-[#4eb1c5] text-5xl sm:text-6xl md:text-6xl animate-bounce mt-4 md:mt-6 cursor-pointer hover:scale-110 transition-transform duration-300"
>
  <IoArrowDownCircleSharp />
</div>

      </div>
    </div>
  );
};

export default Home;
