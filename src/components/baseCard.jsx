import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const list = [
  {
    title: 'Stroke',
    subtitle: 'Created 11/20/2020',
    icon: <FontAwesomeIcon icon={faEllipsisVertical} />,
  },
  {
    title: 'Stroke',
    subtitle: 'Created 11/20/2020',
    icon: <FontAwesomeIcon icon={faEllipsisVertical} />,
  },
  {
    title: 'Stroke',
    subtitle: 'Created 11/20/2020',
    icon: <FontAwesomeIcon icon={faEllipsisVertical} />,
  },
];

function BaseCard(props) {
  return (
    <div>
      <div className="card mt-4">
        <div className="card-body">
          <h5 className="card-title mb-3">{props.title}</h5>
          {list.map((item, index) => (
            <div className="d-flex" key={index}>
              <div className="p-1">
                <div className="font-size-14 text:grey-darken-900 font-weight-bold">
                  {item.title}
                </div>
                <div className="font-size-12 subtitle text:grey-lighten-100">
                  {item.subtitle}
                </div>
              </div>
              <i className="ms-auto">{item.icon}</i>
            </div>
          ))}
          <div class="d-grid gap-2 mt-5">
            <button class="btn btn-primary" type="button">
              Add a new Template
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BaseCard;
