import React from 'react';

import { ImGithub, ImLinkedin2, ImTelegram } from 'react-icons/im';
import { SiCodewars } from 'react-icons/si';

import { SocialURLS } from 'globalConstants';
import { ReturnComponentType } from 'types';

export const SocialMediaIcons = (): ReturnComponentType => {
  return (
    <div className="flex justify-center md:justify-start my-5 gap-7 text-2xl">
      <a
        className="hover:opacity-50 transition duration-500"
        href={SocialURLS.LinkedInURL}
        target="_blank"
        rel="noreferrer"
      >
        <ImLinkedin2 />
      </a>

      <a
        className="hover:opacity-50 transition duration-500"
        href={SocialURLS.GithubUrl}
        target="_blank"
        rel="noreferrer"
      >
        <ImGithub />
      </a>

      <a
        className="hover:opacity-50 transition duration-500"
        href={SocialURLS.TelegramURL}
        target="_blank"
        rel="noreferrer"
      >
        <ImTelegram />
      </a>

      <a
        className="hover:opacity-50 transition duration-500"
        href={SocialURLS.CodeWarsURL}
        target="_blank"
        rel="noreferrer"
      >
        <SiCodewars />
      </a>
    </div>
  );
};
