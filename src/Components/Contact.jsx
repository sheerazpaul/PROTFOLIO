import React from "react";
import Profile from "../Profile.json";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  const { contact } = Profile;

  if (!contact) return null;

  return (
    <>
    <div className="w-full max-w-4xl mx-auto bg-zinc-950  rounded-xl shadow-lg mt-20 mb-10 p-8  border hover:border-[#4eb1c5] transition hover:shadow-md  hover:scale-105">
      <h1 className="text-[#4eb1c5] text-3xl font-bold text-center mb-8">
        Let's Contact
      </h1>

      <div className="flex flex-col md:flex-row justify-center gap-8 text-white">
        
        <div className="flex items-center gap-4">
          <FaEnvelope className="text-[#4eb1c5] text-2xl" />
          <span>{contact.email}</span>
        </div>

        <div className="flex items-center gap-4">
          <FaPhoneAlt className="text-[#4eb1c5] text-2xl" />
          <span>{contact.phone}</span>
        </div>

        <div className="flex items-center gap-4">
          <FaMapMarkerAlt className="text-[#4eb1c5] text-2xl" />
          <span>{contact.location}</span>
        </div>

      </div>
    </div>
    <div className="flex justify-center mb-10">
        <h1 className="text-white text-sm">{contact.text}</h1>
    </div>
</>
  );
}

export default Contact;
