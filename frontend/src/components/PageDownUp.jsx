import React, { useState, useEffect } from "react";

const PageDownUp = ({
    sections,
    iconDown = "⩔",
    iconUp = "⩕",
}) => {
    const [isAtBottom, setIsAtBottom] = useState(false);
    const [isPressed, setIsPressed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            const bottomReached =
                window.innerHeight + currentScroll >= document.documentElement.scrollHeight - 10;
            setIsAtBottom(bottomReached);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScroll = () => {
        setIsPressed(true);
        setTimeout(() => setIsPressed(false), 300);

        if (isAtBottom) {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        } else {
            const currentScroll = window.scrollY;
            const sectionOffsets = sections.map((id) => {
                const el = document.getElementById(id);
                return el ? el.offsetTop : null;
            });

            const nextSection = sectionOffsets.find((offset) => offset > currentScroll);
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
            className={`fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 bg-gradient-to-r from-accent to-primary text-white font-bold py-3 px-4 md:py-4 md:px-6 rounded-full shadow-lg transition-all duration-300 transform ${
                isPressed ? "scale-95" : "hover:scale-110"
            } hover:shadow-2xl backdrop-blur-md flex items-center justify-center`}
            style={{
                animation: isPressed ? "pulse 0.5s ease" : "none",
            }}
        >
            <span className="text-2xl md:text-3xl font-bold animate-bounce">
                {isAtBottom ? iconUp : iconDown}
            </span>
        </button>
    );
};

export default PageDownUp;
