import React from 'react';

import { SocialMediaIcons } from 'components';
import { ReturnComponentType } from 'types';

export const Footer = (): ReturnComponentType => {
  return (
    <footer className="bg-red py-10">
      <div className="w-5/6 mx-auto flex flex-col justify-center items-center">
        <SocialMediaIcons />
        <div className="text-center">
          <p className="font-playfair font-semibold text-2xl text-yellow">
            &#169;Polishuk Oleg
          </p>
        </div>
      </div>
    </footer>
  );
};
