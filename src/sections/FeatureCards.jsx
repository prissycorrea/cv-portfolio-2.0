import React from 'react';
import { useTranslation } from 'react-i18next';
import { abilities } from '../constants';

function FeatureCards() {
    const { t } = useTranslation();
  
    return (
      <div className="w-full padding-x-lg">
        <div className="mx-auto grid-3-cols">
          {abilities.map(({ key, imgPath }) => (
            <div key={key} className="card-border rounded-xl p-8 flex flex-col gap-4">
              <div className="size-14 flex items-center justify-center rounded-full">
                <img src={imgPath} alt={t(`abilities.${key}.title`)} />
              </div>
              <h3 className="text-white text-2xl font-semibold mt-2">{t(`abilities.${key}.title`)}</h3>
              <p className="text-white-50 text-lg">{t(`abilities.${key}.desc`)}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

export default FeatureCards;
