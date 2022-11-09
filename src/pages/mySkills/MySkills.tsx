import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

import { motion } from 'framer-motion';

import { LineGradient, Skill } from 'components';
import { SkillDiagramHeight, SkillsData } from 'globalConstants';
import { useMediaQuery } from 'hooks/useMediaQuery/useMediaQuery';
import { ReturnComponentType } from 'types';

export const MySkills = (): ReturnComponentType => {
  const [width, setWidth] = useState(0);

  const skillBlockRef = useRef<HTMLDivElement>(null);

  const idAboveSmallScreens = useMediaQuery('(min-width: 768px)');

  useLayoutEffect(() => {
    if (skillBlockRef.current) {
      const currentWidth = skillBlockRef.current.offsetWidth;

      setWidth(+currentWidth);
    }
  }, []);

  useEffect(() => {
    const resize = (): void => {
      if (skillBlockRef.current) {
        const currentWidth = skillBlockRef.current.offsetWidth;

        setWidth(+currentWidth);
      }
    };

    window.addEventListener('resize', resize);

    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <section id="skills" className="pt-10 pb-24">
      <div>
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            My <span className="text-red">Skills</span>
          </p>
          <LineGradient width="w-1/3" />
        </motion.div>

        {idAboveSmallScreens ? (
          <div className="mt-16 flex justify-center items-center">
            <ul className="h-[450px] flex gap-2 items-end">
              <li>
                <div className="mb-[88px]">Jedi</div>
                <div className="mb-[88px]">Ninja</div>
                <div className="mb-[88px]">Geek</div>
                <div className="mb-[88px]">Newbie</div>
              </li>
              {SkillsData.map(skill => (
                <li key={skill.id}>
                  <Skill
                    level={skill.level}
                    title={skill.title}
                    height={SkillDiagramHeight}
                    gradient={skill.gradient}
                  />
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div ref={skillBlockRef} className="mt-16">
            {SkillsData.map(skill => (
              <Skill
                key={skill.id}
                level={skill.level}
                title={skill.title}
                width={width}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
