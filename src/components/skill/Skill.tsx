import { useMediaQuery } from 'hooks/useMediaQuery/useMediaQuery';
import { ReturnComponentType } from 'types';
import { countSizeToPixels } from 'utils';

interface Props {
  level: number;
  title: string;
  width?: number;
  gradient?: string;
  height?: number;
}

export const Skill = ({
  level,
  title,
  width,
  height,
  gradient,
}: Props): ReturnComponentType => {
  const isAboveSmallScreens = useMediaQuery('(min-width: 768px)');
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');

  const widthForSkill = countSizeToPixels(width || 0, level);
  const heightForSkill = countSizeToPixels(height || 0, level);

  const widthStyle = {
    width: widthForSkill,
  };

  return (
    <div>
      {isAboveSmallScreens ? (
        <div
          className={`flex flex-col-reverse items-center p-3 rounded ${
            isAboveMediumScreens ? 'min-w-[120px]' : 'min-w-[100px]'
          }`}
          style={{
            height: `${heightForSkill}px`,
            backgroundImage: gradient,
            backgroundColor: '#ccc',
          }}
        >
          <p>{title}</p>
          <p>{level}%</p>
        </div>
      ) : (
        <div className="mb-10" style={widthStyle}>
          <p className="text-xl flex justify-between">
            {title} <span className="ml-3">{level}%</span>
          </p>
          <div className="bg-gradient-to-r from-cyan-500 to-red h-1 rounded-sm" />
        </div>
      )}
    </div>
  );
};
