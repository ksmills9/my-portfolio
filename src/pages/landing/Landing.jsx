import Hero from "../../components/Hero";
import { AnimatedBackground } from "animated-backgrounds"
import Button from "../../components/Button"

/**
 * Represents the Landing page component.
 * Displays the main landing page content including Hero, Drawing, and About sections.
 *
 * @component
 * @param {string} name - The name of the user displayed in the Hero section.
 */

const Landing = ({ name }) => {
  // Inline styles for the main landing container
  const styles = {
    landing: {
      height: "calc(100% - 93px)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };


  return (
    <>
      {/* Main Landing Page */}
      <main className="landing container" style={styles.landing}>
        <AnimatedBackground animationName="neuralNetwork"/>

        {/* Display the hero component */}
        <Hero name={name} />
      </main>

      {/* Display the about section */}
      {/* <About /> */}
    </>
  );
};

export default Landing;
