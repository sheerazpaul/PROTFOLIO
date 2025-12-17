import React from 'react'
function Button({ name, target }) {
  const handleClick = () => {
    const section = document.getElementById(target);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleClick}
      className="text-white font-medium hover:text-[#4eb1c5] transition hover:scale-105"
    >
      {name}
    </button>
  );
}

export default Button;
