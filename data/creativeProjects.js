import {v4 as uuid} from 'uuid'
import logo1 from '../public/assets/imgs/MarkYourHome.jpg'
import logo2 from '../public/assets/imgs/Meteros.jpg'
import logo3 from '../public/assets/imgs/TetraClick-05.jpg'
import poster1 from '../public/assets/imgs/poster_01.jpg'
import poster2 from '../public/assets/imgs/poster_02.jpg'
import poster3 from '../public/assets/imgs/poster_03.jpg'
const creativeProjects = [
  {
    id: uuid(),
    img: logo1,
    title: 'logo',
    tags: ''
  },
  {
    id: uuid(),
    img: logo2,
    title: 'logo',
    tags: ''
  },
  {
    id: uuid(),
    img: logo3,
    title: 'logo',
    tags: ''
  },
  // posters area
  {
    id: uuid(),
    img: poster1,
    title: 'Poster',
    tags: ''
  },
  {
    id: uuid(),
    img: poster2,
    title: 'Poster',
    tags: ''
  },
  {
    id: uuid(),
    img: poster3,
    title: 'Poster',
    tags: ''
  },
  // Brand ID
  // {
  //   id: uuid(),
  //   img: logo3,
  //   title: 'Brand ID',
  //   tags: ''
  // },
  // {
  //   id: uuid(),
  //   img: logo3,
  //   title: 'Brand ID',
  //   tags: ''
  // },
  // {
  //   id: uuid(),
  //   img: poster2,
  //   title: 'Brand ID',
  //   tags: ''
  // },
]

export default creativeProjects