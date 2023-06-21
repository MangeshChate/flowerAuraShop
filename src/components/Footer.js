import React from 'react'

export default function Footer() {
  return (
    <div>
        <section className="info_section layout_padding bg-dark text-light text-decoration-none p-5">
      <div className="container p-5">
        <div className="row">
          <div className="col-md-3">
            <div className="info_logo">
              <h5>Flowering plants</h5>
              <p>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="info_links pl-lg-5">
              <h5>Useful Link</h5>
              <ul>
                <li className="active">
                  <span href="index.html">Home</span>
                </li>
                <li>
                  <span href="about.html">About</span>
                </li>
                <li>
                  <span href="products.html">Products</span>
                </li>
                <li>
                  <span href="reviews.html">Reviews</span>
                </li>
                <li>
                  <span href="contact.html">Contact Us</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="info_insta">
              <h5>Contribute Us !</h5>
              {/* Add Instagram content here */}
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut temporibus modi perferendis?</p>

            </div>
          </div>
          <div className="col-md-3">
            <div className="info_contact">
              <h5>Contact</h5>
              <div>
                <img src="images/location-white.png" alt="" />
                <p>
                  It is a long fact that a reader
                </p>
              </div>
              <div>
                <img src="images/telephone-white.png" alt="" />
                <p>
                  +91 7498887427
                </p>
              </div>
              <div>
                <img src="images/envelope-white.png" alt="" />
                <p>
                  ss@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
