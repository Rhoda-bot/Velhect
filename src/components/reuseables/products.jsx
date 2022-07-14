import React from 'react';
import { Link } from 'react-router-dom';
import PRODUCTS__SCHEMA from './product-items';

function Products() {
  const products = PRODUCTS__SCHEMA;
  return (
    <div className="products">
      <div className="container">
        <div className="products--title text-center">Products</div>
        <div className="products--hr justify-content-center" />
        <div className="row g-3 py-5">
          {
            products.map((val) => (
              <div key={val.id} className="col-md-6 products__description ">
                <div className="card border-0 rounded bg-white">
                  <div className="row">
                    <div className="col-md-6">
                      <img
                        src={val.image}
                        alt=""
                        className="img-fluid products__description--img"
                      />
                    </div>
                    <div className="col-md-6 pt-5">
                      <div className="products__description--title">

                        <Link to={`/product-details/${val.title}`}>{val.title}</Link>
                      </div>
                      <div className="products__description--price">
                        {val.price}
                      </div>
                      <span className="products__description--span">{val.price * 2}</span>
                      <p className="products__description--text">5 items remaining</p>
                    </div>
                  </div>
                </div>

              </div>
            ))
          }
          {/* <div className="col-md-6 products__description ">
            <div className="card border-0 rounded bg-white">
              <div className="row">
                <div className="col-md-6">
                  <img src="/images/pic.png"
                  alt="" className="img-fluid products__description--img" />
                </div>
                <div className="col-md-6 pt-5">
                  <div className="products__description--title">
                    Lorem ipsum dolor
                  </div>
                  <div className="products__description--price">
                    15,000
                  </div>
                  <span className="products__description--span">25,000</span>
                  <p className="products__description--text">5 items remaining</p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
export default Products;
