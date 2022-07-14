import React from 'react';

function Hero() {
  return (
    <div className="hero animate__animated animate__bounce animate__flash">
      <div className="container">
        <div className="row text-start pt-5">
          <div className="col-md-6 hero__description">
            <div className="hero__description--title">Building a great future for technnology</div>
            <p className="hero__description--text">
              We deal in production of power management
              <br />
              technologies, smart technologies, software
              development
              {' '}
              <br />
              customer electronics and research
              development.
            </p>
            <button className="hero__description--btn" type="button">Contact us now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
