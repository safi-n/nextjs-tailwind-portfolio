import {v4 as uuid} from 'uuid'
import NodeIcon from '../public/assets/png/NodeJsIcon.png'
import NpmIcon from '../public/assets/png/npmIcon.png'
import RapidIcon from '../public/assets/png/RapidIcon.png'
import FireBIcon from '../public/assets/png/FirebaseIcon.png'
import SanityIcon from '../public/assets/png/SanityIcon.png'
import WordpressIcon from '../public/assets/png/WordPressIcon.png'
const backendSkills = [
  {
    id: uuid(),
    icon: NodeIcon,
    label: 'Node JS'
  },
  {
    id: uuid(),
    icon: NpmIcon,
    label: 'NPM'
  },
  {
    id: uuid(),
    icon: RapidIcon,
    label: 'Rapid API'
  },
  {
    id: uuid(),
    icon: FireBIcon,
    label: 'Firebase'
  },
  {
    id: uuid(),
    icon: SanityIcon,
    label: 'Sanity'
  },
  {
    id: uuid(),
    icon: WordpressIcon,
    label: 'Headless + Wordpres'
  },
]

export default backendSkills