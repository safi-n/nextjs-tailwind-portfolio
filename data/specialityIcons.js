import {v4 as uuid} from 'uuid'
import WireframeIcon from '../public/assets/png/wireframeIcon.png'
import UIIcon from '../public/assets/png/UIDesignIcon.png'
import DevelopmentIcon from '../public/assets/png/DevelopmentIcon.png'
const specialityIcons = [
  {
    id: uuid(),
    icon: WireframeIcon,
    title: 'Wireframing the idea',
    description: 'Wireframing is a design process where the basic structure and sketch of a product (such as a website or app) are created using simple shapes and lines to represent content. It helps to visualize and communicate the idea before investing time and resources into actual development.'
  },
  {
    id: uuid(),
    icon: UIIcon,
    title: 'Prototyping & UI/UX Design',
    description: 'Prototyping is a step in the UI/UX design process where a basic working model of an app or website is created to test and refine the design concept. It provides a visual representation of the user interface, interactions, and navigation flows..'
  },
  {
    id: uuid(),
    icon: DevelopmentIcon,
    title: 'Development',
    description: 'The development phase is the process of converting the approved prototype into a functioning web application. This involves writing code, integrating technologies and features, and ensuring the design elements are properly implemented.'
  },
]

export default specialityIcons