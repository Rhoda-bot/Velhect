import React from 'react';

function Partners() {
  return (
    <div className="partners">
      <div className="container">
        <div className="row p-5">
          <div className="partners--title text-center">Our Partners</div>
          <div className="partners--hr text-center mx-auto" />
        </div>
        <div className="row">
          <div className="col-md-3 text-center">
            <img src="/images/favatar.png" alt="" className="img-fluid" />
            <p className="text-center">CEO</p>
          </div>
          <div className="col-md-3">
            <img src="/images/image.jpg" alt="" className="img-fluid" />
            <p className="text-center">Product Manager</p>
          </div>
          <div className="col-md-3">
            <img src="/images/favatar.png" alt="" className="img-fluid" />
            <p className="text-center">CTO</p>
          </div>
          <div className="col-md-3">
            <img src="/images/img.png" alt="" className="img-fluid" />
            <p className="text-center">Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Partners;
