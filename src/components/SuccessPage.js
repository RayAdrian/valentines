import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import "./SuccessPage.css";

function SuccessPage() {
  const [audio] = useState(new Audio(require("../assets/palagi.mp3")));

  useEffect(() => {
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

    return () => {
      audio.pause();
      audio.currentTime = 0;
      lenis.destroy();
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
            src="https://source.unsplash.com/800x600/?romantic"
            alt="Romantic moment"
          />
        </div>
        <p className="memory-text">Our journey together has just begun...</p>
      </section>

      <section className="future-section">
        <div className="parallax-image" data-speed="0.3">
          <img
            src="https://source.unsplash.com/800x600/?couple"
            alt="Happy couple"
          />
        </div>
        <p className="future-text">Looking forward to our beautiful future</p>
      </section>

      <section className="final-section">
        <div className="parallax-image" data-speed="0.7">
          <img
            src="https://source.unsplash.com/800x600/?sunset,love"
            alt="Sunset love"
          />
        </div>
        <p>Let's create beautiful memories together this Valentine's Day 🌹</p>
      </section>
    </div>
  );
}

export default SuccessPage;
