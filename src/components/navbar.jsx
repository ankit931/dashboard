import React from 'react';
import '../css/navbar.css';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container-fluid ">
          <a className="navbar-brand" href="/">
            <img
              src="/Ziggle-Tech-logo.jpg"
              className="logo"
              alt="logo"
              height={40}
            />
          </a>
          <div className="d-flex align-item-center">
            <a className="nav-link" href="/">
              <FontAwesomeIcon icon={faBell} />
            </a>

            <div className="dropdown">
              <img
                src="/amit.png"
                className="rounded-circle"
                alt="avatar"
                width={40}
                height={40}
              />
              <div className="dropdown-btn">
                <div className="title">Amit Dhuliya</div>
                <div className="subtitle">neurologist</div>
                <ul class="dropdown-nav">
                  <li>
                    <a href="/">Available</a>
                    <div>
                      <input type="checkbox" id="checkbox2" />
                      <label for="checkbox2"></label>
                    </div>
                  </li>
                  <li>
                    <a href="/">Log Out</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
