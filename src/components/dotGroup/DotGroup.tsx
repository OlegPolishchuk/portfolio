import React from 'react';

import AnchorLink from 'react-anchor-link-smooth-scroll';

import { Page } from 'enums';
import { ReturnComponentType } from 'types';

interface Props {
  selectedPage: Page;
  setSelectedPage: (page: Page) => void;
}

export const DotGroup = ({
  setSelectedPage,
  selectedPage,
}: Props): ReturnComponentType => {
  const selectStyles =
    'relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full ' +
    'before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]';

  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7">
      <AnchorLink
        className={`${
          selectedPage === Page.HOME ? selectStyles : 'bg-dark-grey'
        } w-3 h-3 rounded-full`}
        href={`#${Page.HOME}`}
        onClick={() => setSelectedPage(Page.HOME)}
      />

      <AnchorLink
        className={`${
          selectedPage === Page.SKILLS ? selectStyles : 'bg-dark-grey'
        } w-3 h-3 rounded-full`}
        href={`#${Page.SKILLS}`}
        onClick={() => setSelectedPage(Page.SKILLS)}
      />

      <AnchorLink
        className={`${
          selectedPage === Page.PROJECTS ? selectStyles : 'bg-dark-grey'
        } w-3 h-3 rounded-full`}
        href={`#${Page.PROJECTS}`}
        onClick={() => setSelectedPage(Page.PROJECTS)}
      />

      <AnchorLink
        className={`${
          selectedPage === Page.Contact ? selectStyles : 'bg-dark-grey'
        } w-3 h-3 rounded-full`}
        href={`#${Page.Contact}`}
        onClick={() => setSelectedPage(Page.Contact)}
      />
    </div>
  );
};
