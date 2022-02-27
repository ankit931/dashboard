import { faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const list = [
  {
    title: 'Stroke',
    subtitle: 'Signed as a new pateint',
  },
  {
    title: 'Stroke',
    subtitle: 'Signed as a new pateint',
  },
  {
    title: 'Stroke',
    subtitle: 'Signed as a new pateint',
  },
];

function ListGroup(props) {
  return (
    <div>
      <div className="card mt-4">
        <div className="card-body">
          <div className="d-flex">
            <h5 className="card-title mb-3">{props.title}</h5>
            <div className="ms-auto  text:grey-darken-900">
              <FontAwesomeIcon icon={faCog} />
            </div>
          </div>
          {list.map((item, index) => (
            <div className="d-flex align-items-center" key={index}>
              <div className="me-2">
                <img
                  src="/amit.png"
                  className="rounded-circle"
                  alt="avatar"
                  width={30}
                  height={30}
                />
              </div>
              <div className="p-1">
                <div className="font-size-14 text:grey-darken-900 font-weight-bold">
                  {item.title}
                </div>
                <div className="font-size-12 text-grey text:grey-lighten-100">
                  {item.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListGroup;
