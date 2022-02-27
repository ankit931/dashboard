import { useRef } from 'react';
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
  const open = () => {
    sidebarRef.current.className = 'navigation-drawer-open';
    mainRef.current.className = 'margin-open';
  };

  const close = () => {
    sidebarRef.current.className = 'navigation-drawer-close';
    mainRef.current.className = 'margin-close';
  };

  return (
    <div>
      <Navbar />
      <div className="d-flex">
        <div className="">
          <Sidebar />
        </div>
        <div className="main p-3">
          <button type="button" class="btn btn-primary" onClick={open}>
            Open
          </button>
          {/* main */}
          <button type="button" class="btn btn-primary ms-auto" onClick={close}>
            close
          </button>
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
  );
}

export default App;
