import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState } from 'react';
import './App.css';
import BaseCard from './components/baseCard';
import InfoCard from './components/infoCard';
import ListGroup from './components/listGroup';
import { Navbar } from './components/navbar';
import ProfileCard from './components/profileCard';
import { Sidebar } from './components/sidebar';

function App() {
  const sidebarRef = useRef(null);
  const mainRef = useRef(null);
  const [toggle, setToggle] = useState(false);
  const open = () => {
    sidebarRef.current.className =
      'md-navigation-drawer-open sm-navigation-drawer-open';
    mainRef.current.className = 'margin-open';
    setToggle(true);
  };

  const close = () => {
    sidebarRef.current.className =
      'md-navigation-drawer-close sm-navigation-drawer-close ';
    mainRef.current.className = 'margin-close';
    setToggle(false);
  };

  return (
    <div>
      <Navbar />
      <div className="d-flex">
        <div
          className="md-navigation-drawer-open sm-navigation-drawer-close"
          ref={sidebarRef}
        >
          <Sidebar />
        </div>
        <div className="main margin-close " ref={mainRef}>
          <div className="p-3">
            {toggle ? (
              <button
                type="button"
                className="btn btn-primary ms-auto mb-2"
                onClick={close}
              >
                <FontAwesomeIcon icon={faBars} />
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-primary mb-2"
                onClick={open}
              >
                <FontAwesomeIcon icon={faBars} />
              </button>
            )}

            <div className="row">
              <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                <ProfileCard />
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                <InfoCard />
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-sm-4 col-md-4 col-lg-4">
                <BaseCard title="My Template" />
              </div>
              <div className="col-12 col-sm-4 col-md-4 col-lg-4">
                <BaseCard title="My Smart Phrases" />
              </div>
              <div className="col-12 col-sm-4 col-md-4 col-lg-4">
                <ListGroup title="Notifications" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
