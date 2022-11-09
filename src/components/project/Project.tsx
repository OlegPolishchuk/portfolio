import React from 'react';

import { motion } from 'framer-motion';

import { ReturnComponentType } from 'types';

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

interface Props {
  title: string;
  description: string;
  imgSrc: string;
}

export const Project = ({ title, description, imgSrc }: Props): ReturnComponentType => {
  const overlayStyles =
    'absolute h-full w-full opacity-0 hover:opacity-90 transition ' +
    'duration-500 bg-grey z-30 flex flex-col justify-center items-center tet-center p-16 ' +
    'text-deep-blue cursor-pointer';

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">{description}</p>
      </div>

      <img
        className="w-full h-full max-w-[400px] max-h-[400px]"
        src={imgSrc}
        alt="projectTitle"
      />
    </motion.div>
  );
};
