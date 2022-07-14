import React from 'react';

function WhatWeDo() {
  return (
    <div className="whatwedo mb-5 bg-light">
      <div className="container">
        <div className="row ">
          <div className="col-md-4 whatwedo__description p-3">
            <div className="whatwedo__description--title">What We Do</div>
            <div className="whatwedo__description--hr" />
            <p className="whatwedo__description--text">
              Everyday, we work to improve peoples lives and environment by making
              power management technologies using natural resources like sun,
              win and natural grid that are more reliable, efficient, safe and sustainable.
              We create environment where creativity, invention and discovery become reality
            </p>
            <p className="whatwedo__description--text">
              We focus on product development and installation of the following:
            </p>
          </div>
          <div className="col-md-8">
            <div className="d-flex w-100 whatwedo__row ">
              <div className="whatwedo__card p-3">
                <div
                  className="card  border-0 shadow-sm position-relative p-3"
                  style={{
                    width: '18rem',
                  }}
                >
                  <img src="/images/fan.png" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the
                      {/* <br /> */}
                      card title and make up
                      {/* <br //> */}
                      the bulk of the content.

                    </p>
                  </div>
                </div>
              </div>
              <div className="whatwedo__card p-3">
                <div
                  className="card  border-0 shadow-sm position-relative p-3"
                  style={{
                    width: '18rem',
                  }}
                >
                  <img src="/images/board.png" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the
                      {/* <br /> */}
                      card title and make up
                      {/* <br //> */}
                      the bulk of the content.

                    </p>
                  </div>
                </div>
              </div>
              <div className="whatwedo__card p-3">
                <div
                  className="card  border-0 shadow-sm position-relative p-3"
                  style={{
                    width: '18rem',
                  }}
                >
                  <img src="/images/ai.png" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the
                      card title and make up
                      {/* <br //> */}
                      the bulk of the content.

                    </p>
                  </div>
                </div>
              </div>
              <div className="whatwedo__card p-3">
                <div
                  className="card  border-0 shadow-sm position-relative  p-3"
                  style={{
                    width: '18rem',
                  }}
                >
                  <img src="/images/egnr.png" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the
                      {/* <br /> */}
                      card title and make up
                      {/* <br //> */}
                      the bulk of the content.

                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WhatWeDo;
