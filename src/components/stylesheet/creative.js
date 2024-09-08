import React from 'react';
import Myself from "../images/lakshya.png"
import myself2 from "../images/paresh(2).png"
import myself3 from "../images/sid.png"


const sharedClasses = {
  textColor: 'text-zinc-900 dark:text-zinc-100',
  textSecondaryColor: 'text-zinc-500 dark:text-zinc-400',
  textTertiaryColor: 'text-zinc-600 dark:text-zinc-400',
  bgPrimaryColor: 'bg-black',
  maxWidth: 'max-w-7xl',
  marginAuto: 'mx-auto',
  paddingX: 'px-4 sm:px-6 lg:px-8',
  textAlignCenter: 'text-center',
  marginY: 'my-20',
  gridCols: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  gap: 'gap-8',
  spaceY: 'space-y-4',
  imgSize: 'h-64 w-64',
  roundedFull: 'rounded-full',
};

const TeamMember = ({ name, role, imgSrc, altText }) => (
  <div className={sharedClasses.spaceY}>
    <img className={`mx-auto ${sharedClasses.imgSize} ${sharedClasses.roundedFull}`} src={imgSrc} alt={altText} />
    <div className={sharedClasses.textAlignCenter}>
      <h3 className={`text-lg leading-6 font-medium ${sharedClasses.textColor}`}>{name}</h3>
      <p className={`text-sm ${sharedClasses.textSecondaryColor}`}>{role}</p>
    </div>
  </div>
);

const OurCreativeMind = () => {
  return (
    <div className={sharedClasses.bgPrimaryColor + ' py-12'}>
      <div className={`${sharedClasses.maxWidth} ${sharedClasses.marginAuto} ${sharedClasses.paddingX} ${sharedClasses.textAlignCenter}`}>
        <h2 className={` underline underline-offset-4 text-4xl font-bold ${sharedClasses.textColor}`}>OUR CREATIVE MIND</h2>
        <p className={`mt-4 text-xl leading-10 py-20  ${sharedClasses.textTertiaryColor}`}>
        We are a group of dedicated professionals committed to delivering exceptional solutions. Each member brings distinct skills and perspectives to our shared purpose of innovation and achievement. We want to create a platform that meets and surpasses our users' expectations. Meet the talented individuals who make it all possible.
        </p>
        <div className={`${sharedClasses.marginY} ${sharedClasses.gridCols} ${sharedClasses.gap}`}>
          <TeamMember name="LAKSHYA MUKHIJA" imgSrc={Myself} altText="Profile 1" />
          <TeamMember name="PARESH JAISINGHANI" imgSrc={myself2} altText="Profile 2" />
          <TeamMember name="SIDDHARTH YADAV" imgSrc={myself3} altText="Profile 3" />
        </div>
      </div>
    </div>
  );
};

export default OurCreativeMind;