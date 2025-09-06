"use client";

import { motion as Motion } from "framer-motion";
import HeroText from "../../components/homeComponents/HeroText";
import MediaIcons from "../../components/homeComponents/MediaIcons";

const fadeInUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.6 },
});

const Homepage = () => {
  return (
    <section
      id="🏠"
      className="flex min-h-screen items-center justify-center px-4 text-center space-y-6"
    >
      {/* Call the function here to pass the returned object */}
      <Motion.div className="space-y-6" variants={fadeInUp()}>
        <HeroText />
        <MediaIcons />
      </Motion.div>
    </section>
  );
};

export default Homepage;
