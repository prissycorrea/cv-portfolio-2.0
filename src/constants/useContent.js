import { useTranslation } from 'react-i18next';

export default function useContent() {
  const { t } = useTranslation();

  const navLinks = [
    { name: t('nav.work'), link: '#work' },
    { name: t('nav.experience'), link: '#experience' },
    { name: t('nav.skills'), link: '#skills' },
    { name: t('nav.testimonials'), link: '#testimonials' },
  ];

  const words = [
    { text: t('words.ideas'), imgPath: '/images/ideas.svg' },
    { text: t('words.concepts'), imgPath: '/images/concepts.svg' },
    { text: t('words.designs'), imgPath: '/images/designs.svg' },
    { text: t('words.code'), imgPath: '/images/code.svg' },
  ];

  const counterItems = [
    { value: 15, suffix: '+', key: 'years' },
    { value: 200, suffix: '+', key: 'clients' },
    { value: 108, suffix: '+', key: 'projects' },
    { value: 90, suffix: '%', key: 'retention' },
  ];

  const showcaseProjects = [
    {
      imgPath: './images/project1.png',
      title: t('showcase.project01.title'),
      description: t('showcase.project01.description'),
      bg: ''
    },
    {
      imgPath: './images/project2.png',
      title: t('showcase.project02.title'),
      description: '',
      bg: 'bg-[#FFEFDB]'
    },
    {
      imgPath: './images/project3.png',
      title: t('showcase.project03.title'),
      description: '',
      bg: 'bg-[#FFE7EB]'
    }
  ];
  
  const testimonials = [
    {
      imgPath: './images/client1.png',
      name: t('testimonials.testimonial01.name'),
      review: t('testimonials.testimonial01.review'),
      mentions: t('testimonials.testimonial01.mentions')
    },
    {
      imgPath: './images/client2.png',
      name: t('testimonials.project02.name'),
      review: t('testimonials.testimonial02.review'),
      mentions: t('testimonials.testimonial02.mentions')
    },
    {
      imgPath: './images/client3.png',
      name: t('testimonials.project03.name'),
      review: t('testimonials.testimonial03.review'),
      mentions: t('testimonials.testimonial03.mentions')
    }
  ];

  const abilities = [
    {
      imgPath: '/images/seo.png',
      title: t('abilities.quality.title'),
      desc: t('abilities.quality.desc'),
    },
    {
      imgPath: '/images/chat.png',
      title: t('abilities.communication.title'),
      desc: t('abilities.communication.desc'),
    },
    {
      imgPath: '/images/time.png',
      title: t('abilities.delivery.title'),
      desc: t('abilities.delivery.desc'),
    },
  ];

  return {
    navLinks,
    words,
    counterItems,
    showcaseProjects,
    testimonials,
    abilities,
  };
}
