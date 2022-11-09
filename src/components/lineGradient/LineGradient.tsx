import React from 'react';

import { ReturnComponentType } from 'types';

interface Props {
  width?: string;
}

export const LineGradient = ({ width = 'w-full' }: Props): ReturnComponentType => {
  return <div className={`h-0.5 ${width} bg-gradient-rainblue`} />;
};
