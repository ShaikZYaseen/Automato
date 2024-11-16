import React from 'react';
import { BackgroundBeams } from './ui/BackgroundBeams';
import tomato from "../../../public/tomato.png";
import Image from 'next/image';

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="text-white h-screen flex items-center justify-center text-[60px]">
      <div className="text-center">
        <p>Automate your workflow</p>
        <div className="flex justify-center items-center">
          with&nbsp;<span className="ml-2 font-extrabold font-bold text-[60px]">Automato</span>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default Hero;
