"use client";

import HeroText from "../../components/homeComponents/HeroText";
import MediaIcons from "../../components/homeComponents/MediaIcons";

const Homepage = () => {
  return (
    <section
      id="🏠"
      className="flex w-full min-h-screen items-center justify-center px-4 text-center space-y-6"
    >
      {/* Call the function here to pass the returned object */}
      <div className="space-y-6">
        <HeroText />
        <MediaIcons />
      </div>
    </section>
  );
};

export default Homepage;
