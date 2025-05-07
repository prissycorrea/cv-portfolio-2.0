import React from 'react';
import CountUp from 'react-countup';
import useContent from '../constants/useContent';
import { useTranslation } from 'react-i18next';

const AnimatedCounter = () => {
  const { t } = useTranslation();
  const { counterItems } = useContent(); // <-- pega os dados certos aqui

  return (
    <div id="counter" className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item, index) => (
          <div
            key={item.key || index}
            className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center"
          >
            <div className="counter-number text-white text-5xl font-bold mb-2">
              <CountUp suffix={item.suffix} end={item.value} />
            </div>
            <div className="text-white-50 text-lg">
              {t(`counter.${item.key}`)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
