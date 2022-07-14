import React from 'react';

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row mx-auto justify-content-center">
          <div className="col-md-10 footer--cap">
            <div className="row">
              <div className="col-md-8">

                <p className="footer--text text-center">
                  <span><img src="/images/mail.png" alt="" className="img-fluid p-3" /></span>
                  Feel free to write us feedbacks on our products
                </p>
              </div>
              <div className="col-md-4 align-items-end p-3">
                <button type="button" className="footer--btn">Write a feedback</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row py-5 justify-content-center mx-auto ">
          <div className="col-md-2">
            <img src="/images/logo.png" alt="" className="img-fluid footer-img" />
          </div>
        </div>
        <div className="row border-top align-items-center">
          <div className="col-md-8">
            <div className="row">
              <div className="col-4">Privacy Policy</div>
              <div className="col-4">FAQs</div>
              <div className="col-4">Contact Us</div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row">
              <div className="col-4">1</div>
              <div className="col-4">2</div>
              <div className="col-4">3</div>
            </div>
          </div>
          <div className="col-md-10 text-center mx-auto p-5">
            @ 2022 Velhect All right reserved
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
