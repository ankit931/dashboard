import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const profileDetails = [
  {
    label: 'location',
    text: 'San Diego. DA',
  },
  {
    label: 'Language',
    text: 'English',
  },
  {
    label: 'Visit Cost',
    text: '$459',
  },
];

function ProfileCard(props) {
  return (
    <div>
      <div className="profile-card">
        <div class="card-body d-flex align-items-center ">
          <img
            src="/amit.png"
            className="avatar-rounded rounded-circle"
            alt="avatar"
          />
          <div className="card-body">
            <div className="d-flex align-items-center">
              <h5 className="card-title text:white ms-2">Amit Dhuliya</h5>
              <div className="ms-auto edit text:grey-lighten-100">
                <FontAwesomeIcon icon={faEdit} />
              </div>
            </div>
            {profileDetails.map((item, index) => (
              <div className="row" key={index}>
                <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                  <i className="text:grey-lighten-100 me-2">{item.icon}</i>
                  <span className="font-size-13 text:grey-lighten-100">
                    {item.label}
                  </span>
                </div>
                <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                  <span className="font-size-13 text:grey-lighten-50">
                    {item.text}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
