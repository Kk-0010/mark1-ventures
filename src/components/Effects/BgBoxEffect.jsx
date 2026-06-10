import React from "react";

const BgBoxEffect = ({
  leftFromColor,
  leftToColor,
  rightFromColor,
  rightToColor,
}) => {
  return (
    <>
      {/* Left */}
      <div className="absolute top-0 left-0">
        <div
          className={`absolute size-32 bg-gradient-to-tr ${leftFromColor} ${leftToColor} border-t border-r border-white opacity-10 lg:opacity-7 -top-10 -left-10`}
        />
        <div
          className={`absolute size-32 bg-gradient-to-tr ${leftFromColor} ${leftToColor} border-t border-r border-white opacity-16 lg:opacity-10 top-22 left-22`}
        />
        <div
          className={`absolute size-32 bg-gradient-to-tr ${leftFromColor} ${leftToColor} border-t border-r border-white opacity-20 lg:opacity-12 top-54 left-54`}
        />
        <div
          className={`absolute size-32 bg-gradient-to-tr ${leftFromColor} ${leftToColor} border-t border-r border-white opacity-6 lg:opacity-5 top-54 -left-10`}
        />
        <div
          className={`absolute size-32 bg-gradient-to-tr ${leftFromColor} ${leftToColor} border-t border-r border-white opacity-20 lg:opacity-12 top-86 left-86`}
        />
        <div
          className={`absolute size-32 bg-gradient-to-tr ${leftFromColor} ${leftToColor} border-t border-r border-white opacity-10 lg:opacity-7 top-86 left-22`}
        />
        <div
          className={`absolute size-32 bg-gradient-to-tr ${leftFromColor} ${leftToColor} border-t border-r border-white opacity-10 lg:opacity-1 top-118 -left-10 block md:hidden`}
        />
        <div
          className={`absolute size-32 bg-gradient-to-tr ${leftFromColor} ${leftToColor} border-t border-r border-white opacity-10 lg:opacity-3 top-118 left-54 block md:hidden`}
        />
        <div
          className={`absolute size-32 bg-gradient-to-tr ${leftFromColor} ${leftToColor} border-t border-r border-white opacity-10 lg:opacity-5 top-118 left-118 block md:hidden`}
        />
      </div>

      {/* Right */}
      <div className="absolute top-0 right-0 hidden lg:block">
        <div
          className={`absolute size-32 bg-gradient-to-tr ${rightFromColor} ${rightToColor} border-t border-l border-white opacity-10 top-54 right-54`}
        />
        <div
          className={`absolute size-32 bg-gradient-to-tr ${rightFromColor} ${rightToColor} border-t border-l border-white opacity-5 top-54 -right-10`}
        />
        <div
          className={`absolute size-32 bg-gradient-to-tr ${rightFromColor} ${rightToColor} border-t border-l border-white opacity-7 top-86 right-22`}
        />
      </div>
    </>
  );
};

export default BgBoxEffect;
