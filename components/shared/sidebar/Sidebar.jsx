import {
  faGithub,
  faBehance,
  faLinkedin,
  faUnsplash,
  faDribbble,
} from "@fortawesome/free-brands-svg-icons";
import { icon } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
faGithub;
const Sidebar = () => {
  return (
    <>
      <div className="sidebar-container fixed  top-[45%] mx-12">
        <ul className="text-white">
          <li>
            <a href="https://github.com/safi-n" target="_blank">
              <FontAwesomeIcon icon={icon({name: 'coffee', style: 'white'})} size="5x"/>
            </a>
          </li>
          <li>
            <a href="https://github.com/safi-n" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <a href="https://github.com/safi-n" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <a href="https://github.com/safi-n" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <a href="https://github.com/safi-n" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
