import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import Lottie from "lottie-react";
import animationData from "../assets/lottie.json";
import "./ValentinesProposal.css";

function ValentinesProposal() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const navigate = useNavigate();
  const lottieRef = useRef();
  const yesButtonSize = noCount * 20 + 16;

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

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleYesClick = () => {
    setYesPressed(true);
    navigate("/success");
  };

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };
  console.log("Lottie animation data:", animationData);
  return (
    <div className="proposal-container">
      <section className="intro-section">
        <div className="parallax-image" data-speed="0.5">
          <img
            src={require("../assets/images/couple.jpeg")}
            alt="romantic roses"
          />
        </div>
        <h1 className="main-title">Will you be my Valentine? 💝</h1>
      </section>
      <section className="lottie-section">
        <div className="lottie-background">
          <Lottie
            lottieRef={lottieRef}
            animationData={animationData}
            autoplay={true}
            loop={true}
            speed={0.1}
          />
        </div>
      </section>
      <section className="decision-section">
        <div className="buttons-container">
          <button
            className="yes-button"
            style={{ fontSize: `${yesButtonSize}px` }}
            onClick={handleYesClick}
          >
            Yes! 🥰
          </button>
          <button
            className="no-button"
            style={{ fontSize: `${Math.max(16 - noCount * 2, 8)}px` }}
            onClick={handleNoClick}
          >
            No 😢
          </button>
        </div>
      </section>
    </div>
  );
}
export default ValentinesProposal;
