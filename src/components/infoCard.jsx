import React from 'react';

const info = [
  {
    label: 'Board certified Inc.',
    text: 'Neurology',
  },
  {
    label: 'Speciality',
    text: 'Neurology, Vasculor Neurology',
  },

  {
    label: 'Professional and hospital affiliation',
    text: 'N/A',
  },
  {
    label: 'Medical School',
    text: 'American University of Antigua',
  },
  {
    label: 'Residency',
    text: 'University of California, San Diego CA',
  },
  {
    label: 'Followship',
    text: ' University of California, San Diego CA',
  },
];

function InfoCard(props) {
  return (
    <div>
      <div className="card">
        <div class="card-body">
          <div className="m-1">
            <div className="row">
              {info.map((item, index) => (
                <div className="col-md-6 col-lg-6" key={index}>
                  <div className="font-size-13 text:grey-lighten-100">
                    {item.label}
                  </div>
                  <h6 className="font-size-13 mt-1 text:grey-darken-900">
                    {item.text}
                  </h6>
                </div>
              ))}
            </div>
          </div>
          {/* <div className="">@</div> */}
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
