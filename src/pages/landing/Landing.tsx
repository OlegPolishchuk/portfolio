import React from 'react';

import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { SocialMediaIcons } from 'components';
import { Page } from 'enums';
import { ReturnComponentType } from 'types';

interface Props {
  setSelectedPage: (page: Page) => void;
}

export const Landing = ({ setSelectedPage }: Props): ReturnComponentType => {
  return (
    <section
      id={Page.HOME}
      className="flex justify-center items-center min-w-full h-full gap-16 py-10"
    >
      <div className="mt-32 sm:flex flex-col justify-center items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="text-6xl font-playfair text-center sm:flex sm:justify-center">
            <p className="relative z-30">Polishchuk</p>
            <p
              className="relative sm:text-deep-blue sm:font-semibold z-20
              before:content-brush before:absolute before:z-[-1] before:top-[-75px] before:left-[calc(50%-125px)]
              sm:before:-top-[75px] sm:before:-left-[53px] mt-[30px] sm:mt-0 sm:ml-6"
            >
              Oleg
            </p>
          </div>

          <p className="text-xl mt-10 text-center">Hi, I am a Front-End Developer</p>
        </motion.div>

        <motion.div
          className="flex mt-10 justify-center md: justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7
            font-semibold hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedPage(Page.Contact)}
            href={`#${Page.Contact}`}
          >
            Contact me
          </AnchorLink>

          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => setSelectedPage(Page.Contact)}
            href={`#${Page.Contact}`}
          >
            <div
              className="bg-deep-blue hover:text-red transition duration-500 w-full
             h-full flex items-center justify-center font-playfair px-10"
            >
              lets talk
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex mt-10 justify-center md: justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};
