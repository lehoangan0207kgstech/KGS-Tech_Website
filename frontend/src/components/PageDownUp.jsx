import React, { useState, useEffect } from "react";

const PageDownUp = ({ sections, iconDown = "⩔", iconUp = "⩕" }) => {
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Check if we're at the bottom of the page
      const bottomReached = windowHeight + currentScroll >= documentHeight - 10;

      // Check if we're at the last section
      const sectionOffsets = sections.map((id) => {
        const el = document.getElementById(id);
        return el ? el.offsetTop : null;
      });

      const lastSectionOffset = Math.max(...sectionOffsets.filter(Boolean));
      const isAtLastSection =
        currentScroll + windowHeight >= lastSectionOffset + windowHeight;

      setIsAtBottom(bottomReached || isAtLastSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const handleScroll = () => {
    setIsPressed(true);
    setTimeout(() => setIsPressed(false), 300);

    if (isAtBottom) {
      // Scroll to the top
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      // Scroll to the next section
      const currentScroll = window.scrollY;
      const sectionOffsets = sections.map((id) => {
        const el = document.getElementById(id);
        return el ? el.offsetTop : null;
      });

      const nextSection = sectionOffsets.find(
        (offset) => offset > currentScroll
      );
      if (nextSection !== undefined) {
        window.scrollTo({
          top: nextSection,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <button
      onClick={handleScroll}
      className={`fixed bottom-4 right-4 z-50 bg-gradient-to-r from-[#A8DEE0] to-accent text-white font-bold py-4 px-6 rounded-full shadow-xl transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center backdrop-blur-lg`}
      style={{
        animation: isPressed ? "pulse 0.5s ease" : "none",
      }}
    >
      <span className="text-3xl font-bold animate-bounce">
        {isAtBottom ? iconUp : iconDown}
      </span>
    </button>
  );
};

export default PageDownUp;
