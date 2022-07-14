import React from 'react';
import { useParams } from 'react-router';
import PRODUCTS__SCHEMA from './product-items';
import Navbar from './navbar';

function ProductDetails() {
  const { title } = useParams();
  const products = PRODUCTS__SCHEMA;
  return (
    <>
      <Navbar />
      <div className="details bg-light">
        <div className="container">
          <div className="row">
            {
            products && products.filter((val) => val.title === title).map((val) => (
              <>
                <div key={val.id} className="col-md-6 p-3">
                  <div className="card p-3 shadow-sm border-0">
                    <img src={val.image} alt="" className="img-fluid" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className=" details--title">{val.title}</div>
                  <p className="details--text">
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Iure, quia nostrum. Impedit rem exercitationem
                    error quo harum distinctio numquam
                    dicta corrupti ea culpa quod ut sit ipsum repellendus, vel cumque.

                  </p>
                  <div className=" details--price mb-2">
                    $
                    {val.price}
                  </div>
                  <button type="button" className="details--btn">purchase</button>
                </div>
                <div className="col-md-10">
                  <div className="details--title">Related Products</div>
                  <div className="row align-items-center p-2">
                    {val.items.map(({ id, img }) => (
                      <div className="col-md-4 p-3" key={id}>
                        <div className="card border-0 shadow-sm">
                          <img src={img} alt="" className="img=fluid" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ))
          }
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductDetails;
