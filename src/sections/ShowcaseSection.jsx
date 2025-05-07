import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useTranslation } from 'react-i18next';
import useContent from '../constants/useContent';

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const { t } = useTranslation();
  const { showcaseProjects } = useContent();

  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src={showcaseProjects[0].imgPath} alt={showcaseProjects[0].alt} />
            </div>
            <div className="text-content">
              <h2>
                {t('showcase.project01.title')}
              </h2>
              <p className="text-white-50 md:text-xl">
              {t('showcase.project01.description')}
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img src={showcaseProjects[1].imgPath} alt={showcaseProjects[1].alt} />
              </div>
              <h2>{t('showcase.project02.title')}</h2>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
              <img src={showcaseProjects[2].imgPath} alt={showcaseProjects[2].alt} />
              </div>
              <h2>{t('showcase.project03.title')}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseSection;