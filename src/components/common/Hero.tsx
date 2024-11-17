"use client";

import React, { useState, useEffect } from 'react';
import { BackgroundBeams } from './ui/BackgroundBeams';
import { TypewriterEffectSmooth } from './ui/typewriter-effect';

type Props = {};

const line1 = [
  { text: "Automate", className: "text-white" },
  { text: "your", className: "text-white" },
  { text: "workflow", className: "text-white" },
];

const line2 = [
  { text: "with", className: "text-white" },
  {
    text: "Automato",
    className: "text-white text-[60px] font-Ga-Maamli font-bold tracking-wider",
  },
];

const Hero = (props: Props) => {
  const [showLine2, setShowLine2] = useState(false);

  useEffect(() => {
    // Set a delay (e.g., 3 seconds) to show the second line
    const timer = setTimeout(() => setShowLine2(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="text-white h-screen flex items-center justify-center text-[60px]">
      <div className="flex-col justify-center items-center">
        {/* First line */}
        <p className="m-0">
          <TypewriterEffectSmooth words={line1} />
        </p>

        {/* Second line appears only after delay */}
        {showLine2 && <TypewriterEffectSmooth words={line2} />}
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default Hero;
