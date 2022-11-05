import React, { useState } from 'react';

// @ts-ignore
import closeIcon from 'assets/close-icon.svg';
// @ts-ignore
import menuIcon from 'assets/menu-icon.svg';
import { Link } from 'components/link/Link';
import { Page } from 'enums';
import { useMediaQuery } from 'hooks/useMediaQuery/useMediaQuery';
import { ReturnComponentType } from 'types';

interface Props {
  isTopOfPage: boolean;
  selectedPage: Page;
  setSelectedPage: (page: Page) => void;
}

export const Navbar = ({
  isTopOfPage,
  setSelectedPage,
  selectedPage,
}: Props): ReturnComponentType => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  const isAboveSmallScreens = useMediaQuery('(min-width: 768px)');
  const navbarBackground = isTopOfPage ? '' : 'bg-red';

  return (
    <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-playfair text-3xl font-bold">JE</h4>

        {isAboveSmallScreens ? (
          <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
            <Link
              href={Page.HOME}
              page={Page.HOME}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />

            <Link
              href={Page.SKILLS}
              page={Page.SKILLS}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              href={Page.PROJECTS}
              page={Page.PROJECTS}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              href={Page.Contact}
              page={Page.Contact}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        ) : (
          <button
            className="rounded-full bg-red p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
            type="button"
          >
            <img alt="menu-icon" src={menuIcon} />
          </button>
        )}

        {!isAboveSmallScreens && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]">
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)} type="button">
                <img alt="close-icon" src={closeIcon} />
              </button>
            </div>

            <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
              <Link
                href={Page.HOME}
                page={Page.HOME}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />

              <Link
                href={Page.SKILLS}
                page={Page.SKILLS}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                href={Page.PROJECTS}
                page={Page.PROJECTS}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                href={Page.Contact}
                page={Page.Contact}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
