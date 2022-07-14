import React from 'react';
import Footer from '../reuseables/footer';
import Navbar from '../reuseables/navbar';

function Signup() {
  return (
    <>
      <Navbar />
      <div className="signup">
        <div className="container">
          <div className="row p-4">

            <div className="col-md-7">
              <div className="signup--title mb-4">Contact Us</div>
              <form>
                <div className="row g-3">
                  <div className="col-6">
                    <input type="text" className="form-control" placeholder="Full Name" />
                  </div>
                  <div className="col-6">
                    <input type="text" className="form-control" placeholder="Email Address" />
                  </div>
                  <div className="col-6">
                    <input type="text" className="form-control" placeholder="Company Name" />
                  </div>
                  <div className="col-6">
                    <input type="text" className="form-control" placeholder="Phone Number" />
                  </div>
                  <div className="col-12">
                    <input type="text" className="form-control" placeholder="Company " />
                  </div>
                  <div className="col-3">
                    <button type="button" className="signup--btn">send message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Signup;
