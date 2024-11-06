import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.png';
import porfolioImage2 from '../images/portfolio/portfolio-2.png';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: "Zaqueu's resume",
  description: 'My resume',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'sobre',
  Contact: 'contato',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'habilidades',
  Stats: 'stats',
  Testimonials: 'frases',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Eu sou Zaqueu.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Sou um estudante de <strong className="text-stone-100">Programação e Eletrônica</strong> baseado em Mossoró/RN.
        Atualmente foco em estudar desenvolvimento web <strong className="text-stone-100">Full Stack</strong>
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        No meu tempo livre eu sou{' '}
        <strong className="text-stone-100">Músico, Escritor e pratico atividades físicas.</strong>
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contato',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Adoro o conceito de open source e acredito que a criação coletiva e a liberdade criativa são os pilares para o avanço da tecnologia. Tenho um interesse especial em desenvolvimento web, e minha jornada tem sido movida pela curiosidade de entender o que há por trás das telas e como criar experiências simples e intuitivas.

Além de programar, sou um grande fã de música e toco violão nas horas vagas – até estou pensando em gravar um álbum lo-fi com algumas músicas que escrevi! Meus objetivos para o futuro incluem trabalhar com equipes internacionais e ganhar experiência prática em projetos reais, onde eu possa aprender com profissionais mais experientes e contribuir para algo significativo.`,
  aboutItems: [
    {label: 'Localização', text: 'Mossoró, RN', Icon: MapIcon},
    {label: 'Idade', text: '18', Icon: CalendarIcon},
    {label: 'Nacionalidade', text: 'Brasileiro', Icon: FlagIcon},
    {
      label: 'Interesses',
      text: 'Criação musical, Programação web, Design, Escrita, Atividade física',
      Icon: SparklesIcon,
    },
    {
      label: 'Estudo',
      text: 'Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Norte(IFRN) - Campus Mossoró',
      Icon: AcademicCapIcon,
    },
    /* {label: 'Employment', text: 'Instant Domains, inc.', Icon: BuildingOffice2Icon}, */
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Línguas faladas',
    skills: [
      {
        name: 'Inglês',
        level: 8,
      },
      {
        name: 'Francês',
        level: 4,
      },
      {
        name: 'Espanhol',
        level: 3,
      },
    ],
  },
  {
    name: 'Desenvolvimento Front-End',
    skills: [
      {
        name: 'React',
        level: 5,
      },
      {
        name: 'Javascript',
        level: 5,
      },
      {
        name: 'Tailwind CSS',
        level: 5,
      },
      {
        name: 'Bootstrap',
        level: 3,
      },
      {
        name: 'Material UI',
        level: 4,
      },
    ],
  },
  {
    name: 'Desenvolvimento Back-End',
    skills: [
      {
        name: 'Node.js',
        level: 3,
      },
      {
        name: 'Java',
        level: 5,
      },
      /* {
        name: 'Golang',
        level: 4,
      }, */
    ],
  },
  {
    name: 'Desenvolvimento Android',
    skills: [
      {
        name: 'Apache Cordova',
        level: 6,
      },
      /* {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
      }, */
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Catálogo de produtos e site pessoal',
    description:
      'Para esse projeto, usei React e Tailwind para criar um site de catálogo de produtos, visando facilitar o acesso e aprimorar a experiência do cliente.',
    url: 'https://elaniamodaintima.vercel.app/Sobre',
    image: porfolioImage1,
  },
  {
    title: 'Suap Notas',
    description:
      'Nesse projeto, usei Javascript e Apache Cordova para criar um aplicativo que calcula a média semestral e anual do sistema SUAP, utilizado no IFRN Campus Mossoró.',
    url: '',
    image: porfolioImage2,
  },
  /*
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  }, */
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Março 2021 - Presente',
    location: 'IFRN - Campus Mossoró',
    title: 'Ensino médio',
    content: (
      <p>
        No IFRN, estou desenvolvendo uma sólida base em fundamentos técnicos e analíticos através do curso de
        Eletrotécnica. Esse programa de formação técnica me permite aprender sobre circuitos elétricos, automação, e
        sistemas de potência, além de trabalhar em projetos práticos que exigem habilidades de resolução de problemas e
        pensamento lógico – competências que são cruciais tanto na eletrotécnica quanto na programação.
      </p>
    ),
  },
  /* {
    date: 'March 2003',
    location: 'School of Business',
    title: 'What did you study 101',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  }, */
];

export const experience: TimelineItem[] = [
  {
    date: '2021 - Presente',
    location: '',
    title: 'Desenvolvedor Freelancer',
    content: (
      <p>
        Sem experiência prévia em empresas. Essa é uma oportunidade única para você ser o primeiro a me contratar :D
        <br></br>
        Até então, fiz alguns projetos para uma loja e para o IFRN.
      </p>
    ),
  },
  /* {
    date: 'March 2007 - February 2010',
    location: 'Garage Startup Studio',
    title: 'Junior bug fixer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  }, */
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Epitecto',
      text: 'Querias ser livre. Para essa liberdade, só há um caminho: o desprezo das coisas que não dependem de nós.',
      image: 'https://www.edipro.com.br/wp-content/uploads/2021/10/epicteto.png',
    },
    {
      name: 'Sêneca',
      text: 'Apressa-te a viver bem e pensa que cada dia é, por si só, uma vida.',
      image:
        'https://midias.correiobraziliense.com.br/_midias/png/2022/11/02/675x450/1_seneca-26775398.png?20221102141552?20221102141552',
    },
    {
      name: 'Marco Aurélio',
      text: 'Se você está sofrendo por coisas externas, não são elas que estão te perturbando, mas o seu próprio julgamento sobre elas. E está em seu poder anular este julgamento agora.',
      image: 'https://th.bing.com/th/id/R.b93363e78ddff767e2a719d7feedbe7f?rik=gQVaQ%2bGa2YnX%2fQ&pid=ImgRaw&r=0',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Entre em contato.',
  description: 'Entre em contato comigo por Email, WhatsApp, ou o que achar melhor.',
  items: [
    {
      type: ContactType.Email,
      text: 'zaqueunilton1@gmail.com',
      href: 'mailto:zaqueunilton1@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Mossoró, RN',
      href: '',
    },
    /* {
      type: ContactType.Instagram,
      text: '@tbakerx',
      href: 'https://www.instagram.com/tbakerx/',
    }, */
    {
      type: ContactType.Github,
      text: 'zaqueu-technology',
      href: 'https://github.com/zaqueu-technology',
    },
    {
      type: ContactType.Phone,
      text: '(84) 9 9145-8984',
      href: 'https://wa.me/5584991458984',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/zaqueu-technology'},
  /* {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'}, */
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/zaqueunilton/'},
  /* {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'}, */
  /* {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'}, */
];
