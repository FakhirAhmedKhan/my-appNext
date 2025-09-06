import React from "react";

const HeroText = () => {
  return (
    <>
      <div>
        <h1 className="text-5xl font-extrabold tracking-tighter md:text-7xl lg:text-8xl text-neutral-900 dark:text-white">
          <span className="block">Hello, I'm</span>
          <span className="block bg-gradient-to-r from-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
            Fakhir Ahmed Khan
          </span>
        </h1>

        <p className="mx-auto max-w-2xl text-lg text-neutral-700 md:text-xl dark:text-neutral-400">
          A passionate web developer intern on a mission to build beautiful,
          functional, and futuristic web experiences. Welcome to my playground.
        </p>
      </div>
    </>
  );
};

export default HeroText;
