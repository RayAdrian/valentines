import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import "./SuccessPage.css";

function SuccessPage() {
  const [audio] = useState(new Audio("../assets/palagi.mp3"));

  useEffect(() => {
    // Scroll to hero section when component mounts
    const heroSection = document.querySelector(".hero-section");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const playAudio = async () => {
      try {
        await audio.play();
      } catch (error) {
        console.log("Audio playback failed:", error);
      }
    };

    playAudio();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const textElements = document.querySelectorAll(
      ".memory-text, .future-text"
    );
    textElements.forEach((el) => observer.observe(el));

    return () => {
      audio.pause();
      audio.currentTime = 0;
      lenis.destroy();
      textElements.forEach((el) => observer.unobserve(el));
    };
  }, [audio]);

  return (
    <div className="success-container">
      <div className="heart-bg" data-speed="0.2"></div>
      <section className="hero-section">
        <h1>✨ You've Made Me the Happiest! ✨</h1>
        <div className="hearts-animation">
          {Array(12)
            .fill("❤️")
            .map((heart, index) => (
              <span key={index} className="heart">
                {heart}
              </span>
            ))}
        </div>
      </section>
      <section className="memory-section">
        <div className="parallax-image" data-speed="0.5">
          <img
            src={require("../assets/images/ninyo.jpeg")}
            alt="Romantic moment"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
        <p
          className="memory-text"
          style={{
            color: "#fff",
            position: "relative",
            zIndex: 2,
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
          }}
        >
          We've come so far and done so much.
        </p>
      </section>
      <section className="future-section">
        <div className="parallax-image" data-speed="0.3">
          <img
            src={require("../assets/images/beach.jpeg")}
            alt="Starting couple"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
        <p className="future-text">Yet, our journey together has just begun</p>
      </section>

      <section className="final-section">
        <div className="parallax-image" data-speed="0.7">
          <img
            src={require("../assets/images/sunset.jpeg")}
            alt="Sunset love"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
        <p>To us. Let's enjoy this Valentine's Day 🌹</p>
      </section>
    </div>
  );
}

export default SuccessPage;
