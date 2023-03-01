import {v4 as uuid} from 'uuid'
import logo_fintelion from '../public/assets/imgs/logo_fintelion.png'
import logo_sbg from '../public/assets/imgs/SBGlogo.png'
import logo from '../public/assets/png/JavascriptLogo.png'

const techProjects = [
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
    description: 'SBGroup has built a unique status among its valued clients. Our expert and capable staff provide professional services in consultancy, survey & design, procurement, logistics.'
  },
  {
    id: uuid(),
    logo: logo,
    company: 'Ras soul',
    description: "une maison d'édition numérique autodidacte et indépendante basée à Lyon, en France, qui cherche à fournir un contenu exclusif et de qualité à notre communauté de lecteurs dans le monde entier.",
    link: "https://rassoul.fr/accueil-2/"
  },
  {
    id: uuid(),
    logo: logo,
    company: 'Ras soul',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem pariatur rerum ad mollitia eius molestiae accusamus nam est natus magnam.'
  },
  {
    id: uuid(),
    logo: logo,
    company: 'Ras soul',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem pariatur rerum ad mollitia eius molestiae accusamus nam est natus magnam.'
  },
  {
    id: uuid(),
    logo: logo,
    company: 'Ras soul',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem pariatur rerum ad mollitia eius molestiae accusamus nam est natus magnam.'
  },
]

export default techProjects