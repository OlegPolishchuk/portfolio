import React, { useEffect, useState } from 'react';

import { DotGroup, LineGradient, Navbar } from 'components';
import { Page } from 'enums';
import { useMediaQuery } from 'hooks/useMediaQuery/useMediaQuery';
import { Landing, MySkills, Projects } from 'pages';
import { ReturnComponentType } from 'types';

const App = (): ReturnComponentType => {
  const [selectedPage, setSelectedPage] = useState(Page.HOME);
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');

  useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app bg-deep-blue">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />

      <div className="w-5/6 mx-auto h-full">
        {isAboveMediumScreens && (
          <DotGroup selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        )}
        <Landing setSelectedPage={setSelectedPage} />
      </div>
      <LineGradient />

      <div className="w-5/6 mx-auto min-h-full">
        <MySkills />
      </div>

      <div className="w-5/6 mx-auto">
        <Projects />
      </div>
    </div>
  );
};

export default App;
