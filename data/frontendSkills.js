import {v4 as uuid} from 'uuid'
import JSIcon from '../public/assets/png/JavascriptLogo.png'
import TCIcon from '../public/assets/png/TailwindCSSLogo.png'
import RjsIcon from '../public/assets/png/ReactLogo.png'
import VJsIcon from '../public/assets/png/VuejsLogo.png'
import NjsIcon from '../public/assets/png/NextJsLogo.svg'
import MUIicon from '../public/assets/png/MUIicon.png'
import FramerIcon from '../public/assets/svg/framerMotionIcon.svg'
const frontEndSkills = [
  {
    id: uuid(),
    icon: JSIcon,
    label: 'Javascript'
  },
  {
    id: uuid(),
    icon: RjsIcon,
    label: 'React JS'
  },
  {
    id: uuid(),
    icon: NjsIcon,
    label: 'Next JS'
  },
  {
    id: uuid(),
    icon: VJsIcon,
    label: 'Vue JS'
  },
  {
    id: uuid(),
    icon: TCIcon,
    label: 'Tailwind CSS'
  },
  {
    id: uuid(),
    icon: MUIicon,
    label: 'Material UI'
  },
  {
    id: uuid(),
    icon: FramerIcon,
    label: 'Framer Motion'
  },
] 

export default frontEndSkills;
