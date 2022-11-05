import React from 'react';

import AnchorLink from 'react-anchor-link-smooth-scroll';

import { Page } from 'enums';
import { ReturnComponentType } from 'types';

interface Props {
  page: Page;
  selectedPage: Page;
  setSelectedPage: (page: Page) => void;
  href: Page;
}

export const Link = ({
  selectedPage,
  setSelectedPage,
  page,
  href,
}: Props): ReturnComponentType => {
  const lowerCasePage = page.toLowerCase();

  return (
    <AnchorLink
      className={`${
        selectedPage.toLowerCase() === lowerCasePage ? 'text-yellow' : ''
      } hover:text-yellow transition duration-500`}
      href={`#${href}`}
      onClick={() => setSelectedPage(page)}
    >
      {page}
    </AnchorLink>
  );
};
