import {v4 as uuid} from 'uuid'
import logo_scriptsun from '../public/assets/png/logo_scriptsun.png'
import logo_fintelion from '../public/assets/imgs/logo_fintelion.png'
import logo_sbg from '../public/assets/imgs/SBGlogo.png'
import logo_rassoul from '../public/assets/imgs/logo_rassoul.jpg'
import logo_envato from '../public/assets/png/envato_logo.png'
import logo_meteors from '../public/assets/png/logo_meteors.jpeg'

const techProjects = [
  {
    id: uuid(),
    logo: logo_scriptsun,
    company: 'ScriptSun',
    description: "ScriptSun is a leading global vendor of computer software & mobile and hosting systems. ScriptSun's Largest projects are WoWonder, UltaHost Services, PlayTube, DeepSound, PixelPhoto and more.",
    link: 'https://scriptsun.com/'
  },
  {
    id: uuid(),
    logo: logo_fintelion,
    company: 'Fintelion',
    description: 'Fintelion is a Turkey based company aiming to invest in new ideas and startups. We diversify our investment in the areas of real estate, health, tourism, agriculture and technology.',
    link: 'https://fintelion.com.tr'
  },
  {
    id: uuid(),
    logo: logo_sbg,
    company: 'SBGroup',
    description: 'SBGroup has built a unique status among its valued clients. Our expert and capable staff provide professional services in consultancy, survey & design, procurement, logistics.',
    link: 'https://sadatbg.com/'
  },
  {
    id: uuid(),
    logo: logo_envato,
    company: 'DoughzLight',
    description: 'Envato is a world-leading online community for creative assets, tools and talent. Millions of people around the world visit Envato to buy and sell creative assets, use smart design templates or even hire freelancers.',
    link: 'https://codecanyon.net/user/doughouzlight'
  },
  {
    id: uuid(),
    logo: logo_envato,
    company: 'DoughDark',
    description: 'Envato is a world-leading online community for creative assets, tools and talent. Millions of people around the world visit Envato to buy and sell creative assets, use smart design templates or even hire freelancers.',
    link: 'https://codecanyon.net/user/doughouzdark'
  },
  {
    id: uuid(),
    logo: logo_rassoul,
    company: 'Ras soul',
    description: "une maison d'édition numérique autodidacte et indépendante basée à Lyon, en France, qui cherche à fournir un contenu exclusif et de qualité à notre communauté de lecteurs dans le monde entier.",
    link: "https://rassoul.fr/accueil-2/"
  },
  {
    id: uuid(),
    logo: logo_meteors,
    company: 'Meteors',
    description: "We are meteors, Inc. a multidisciplinary cultural company with a customer-centric mentality working across business, design, development, and technology that Creates Awesome HTML & Wordpress & Script.",
    link: "https://codecanyon.net/user/meteros"
  },
]

export default techProjects