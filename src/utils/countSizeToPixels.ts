const percent = 100;

export const countSizeToPixels = (width: number, level: number): number => {
  return Math.round((width * level) / percent);
};
