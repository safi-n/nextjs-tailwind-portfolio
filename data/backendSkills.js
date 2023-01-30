import {v4 as uuid} from 'uuid'
import NodeIcon from '../public/assets/png/NodeJsIcon.png'
import NpmIcon from '../public/assets/png/npmIcon.png'
import RapidIcon from '../public/assets/png/RapidIcon.png'
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
]

export default backendSkills