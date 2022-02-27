import {
  faCalendar,
  faClock,
  faFaceGrinTongue,
  faFileCsv,
  faHeartbeat,
  faMessage,
  faWallet,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../css/sidebar.css';

const menus = [
  {
    icon: <FontAwesomeIcon icon={faClock} />,
    label: 'Waiting Room',
  },
  {
    icon: <FontAwesomeIcon icon={faFileCsv} />,
    label: `Pateint's Record`,
  },
  {
    icon: <FontAwesomeIcon icon={faWallet} />,
    label: 'Payments',
  },
  {
    icon: <FontAwesomeIcon icon={faCalendar} />,
    label: 'Schedule',
  },
  {
    // icon: <FaHeartbeat />,
    icon: <FontAwesomeIcon icon={faHeartbeat} />,
    label: 'Labs & Results',
  },
  {
    icon: <FontAwesomeIcon icon={faMessage} />,
    label: 'Chats',
  },
  {
    // icon: <RiAccountCircleLine />,
    icon: <FontAwesomeIcon icon={faFaceGrinTongue} />,
    label: 'My Profile',
  },
];

export const Sidebar = () => {
  return (
    <div>
      <aside className="sidebar">
        <nav className="sidebar-nav">
          <ul>
            {menus.map((item, index) => (
              <li key={index}>
                <a href="/">
                  <i className="ion-bag me-3">{item.icon}</i>
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      {/* <div className="sidenav">
        <a href="/" className="closebtn" >
          &times;
        </a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div> */}
    </div>
  );
};
