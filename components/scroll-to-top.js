import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function ScrollToTop() {
  const scrollStyle = {
    width: "3rem",
    height: "3rem",
    position: "fixed",
    padding: "0.5rem",
    bottom: "40px",
    right: "40px",
    backgroundColor: "#f16c94",
    borderWidth: "0",
    borderRadius: "50%",
    color: "#000",
  };

  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <button id="scroll-to-top" onClick={scrollToTop} style={scrollStyle}>
          <FontAwesomeIcon icon={faArrowUp} size="2x" />
        </button>
      )}
    </>
  );
}
