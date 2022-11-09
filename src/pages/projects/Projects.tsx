import React from 'react';

import { motion } from 'framer-motion';

import adminDashboardProjectImg from 'assets/admin-dashboard.png';
import countriesProjectImg from 'assets/countries-app.png';
import newsProjectImg from 'assets/news-app.png';
import weatherProjectImg from 'assets/weather-app.png';
import { LineGradient, Project } from 'components';
import { Page } from 'enums';
import { ReturnComponentType } from 'types';

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

export const Projects = (): ReturnComponentType => {
  return (
    <section id={Page.PROJECTS} className="pt-48 pb-48">
      <motion.div
        className="md:w-2/4 mx-auto text-center mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>
      </motion.div>

      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-2 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          <div
            className="flex justify-center text-center items-center p-10 bg-red
          max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            USER INTERFACES
          </div>

          <Project title="News" description="News app" imgSrc={newsProjectImg} />

          <Project
            title="Weather app"
            description="Weather app"
            imgSrc={weatherProjectImg}
          />

          <Project
            title="Countries"
            description="Countries app"
            imgSrc={countriesProjectImg}
          />

          <Project
            title="Admin dashboard"
            description="Admin dashboard app"
            imgSrc={adminDashboardProjectImg}
          />

          <div
            className="flex justify-center text-center items-center p-10 bg-blue
          max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};
