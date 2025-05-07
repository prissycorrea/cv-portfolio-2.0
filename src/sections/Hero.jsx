import React from 'react';
import { words } from '../constants';
import Button from '../components/Button';
import HeroExperience from '../components/HeroModels/HeroExperience';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import AnimatedCounter from '../components/AnimatedCounter';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
    useGSAP(() => {
        gsap.fromTo('.hero-text h1', {
            y: 50,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.2,
            ease: 'power2.out',
            delay: 0.5
        })
    })
  return (
    <section id="hero" className="relative overflow-hidden">
    {/* Background Image */}
        <div className="absolute top-0 left-0 z-10">
            <img src="./images/bg.png" alt="background" className="w-full h-full object-cover" />
        </div>

        <div className="hero-layout">
        {/* Left: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
              {t('hero.text-before')}
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>{t('hero.text-after1')}</h1>
              <h1>{t('hero.text-after2')}</h1>
              <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
                {t('hero.about')}
              </p>
            </div>
              <Button className="md:w-80 md:h-16 w-60 h-12" id="button" text={t('hero.button-text')} />
            </div>
        </header>

        {/* Right: 3d model */}
        <figure>
            <div className="hero-3d-layout">
                <HeroExperience />
            </div>
        </figure>
        </div>
        <AnimatedCounter />
    </section>
  )
}

export default Hero