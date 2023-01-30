import { v4 as uuid } from 'uuid';
import GhIcon from '../public/assets/svg/Icon awesome-github.svg'
import BeIcon from '../public/assets/svg/Behance.svg'
import LInIcon from '../public/assets/svg/Icon awesome-linkedin-in.svg'
import UnSIcon from '../public/assets/svg/unsplashIcon.svg'
const socialMediaIcons = [
  {
    id: uuid(),
    label: 'Github',
    img: GhIcon,
    link: 'https://github.com/safi-n'
  },
  {
    id: uuid(),
    label: 'Behance',
    img: BeIcon,
    link: 'https://github.com/safi-n'
  },
  {
    id: uuid(),
    label: 'LinkedIn',
    img: LInIcon,
    link: 'https://github.com/safi-n'
  },
  {
    id: uuid(),
    label: 'Un Splash',
    img: UnSIcon,
    link: 'https://github.com/safi-n'
  },
];

export default socialMediaIcons