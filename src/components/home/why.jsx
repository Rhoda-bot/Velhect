import React from 'react';

function WhyUs() {
  return (
    <div className="whyus">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="whyus--title text-center">Why Choose Us</div>
          <div className="whyus--hr text-center" />
        </div>
        <div className="row">
          <p className="whyus--text text-center">
            Velhect has a team of brilliant minds that innovate the technology of future,
            and also creating smart and affordable consumer
            electronics to help businesses and individual to thrive.
            We strive to give our clients the best experience and results when we work together.
          </p>
        </div>
        <div className="row align-itms-center justify-content-center mx-auto">
          <div className="col-md-3 whyus__description">
            <img src="/images/fast-time1.png" alt="" className="img-fluid whyus__description--img " />
            <div className="whyus__description--subtitle pt-3">Timely Delivery</div>
            <p className="whyus__description--text text-start">
              We stick to stipulated time fixed for the delivery of products.
            </p>
          </div>
          <div className="col-md-3 whyus__description">
            <img src="/images/Team.png" alt="" className="img-fluid whyus__description--img " />
            <div className="whyus__description--subtitle pt-3">Expert Team</div>
            <p className="whyus__description--text text-start">
              We consist of individuals that are expert in
              various fields to ensure quality products.
            </p>
          </div>
          <div className="col-md-3 whyus__description">
            <img src="/images/Save.png" alt="" className="img-fluid whyus__description--img p-2" />
            <div className="whyus__description--subtitle pt-3">Affordable Services</div>
            <p className="whyus__description--text text-start">
              Our charges can be pocket-friendly.
            </p>
          </div>
          <div className="col-md-3 whyus__description">
            <img src="/images/Quality.png" alt="" className="img-fluid whyus__description--img p-2" />
            <div className="whyus__description--subtitle pt-3">Quality Assurance</div>
            <p className="whyus__description--text text-start">
              We pay attention to every stage of the process of
              delivery or production.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WhyUs;
