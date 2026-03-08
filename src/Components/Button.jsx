import React from 'react';

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
      className="text-black hover:underline transition-all text-sm font-medium"
    >
      {name}
    </button>
  );
}

export default Button;