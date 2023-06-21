import React from 'react'
import { Link } from 'react-router-dom'
export default function MidBody() {
  return (
    <div>
      <div className="container">
        <div className="row d-flex justify-content-around ">
            <div className="col-lg-5 col-md-12 col-sm-12 move ">
                <Link to="/product" className="div d-flex justify-content-center flex-column align-items-center">
                    <img src="https://m.media-amazon.com/images/I/41cZdTFbT8L._AC_.jpg" alt="" className='img-fluid rounded-5 shadow-lg' />
                    <h3 className='mt-3 fw-bold font-monospace text-decoration-none text-dark'>INDOOR FLOWER POT</h3>
                   
                </Link>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12 move">
            <Link to="/product"  className="div d-flex justify-content-center flex-column align-items-center">
                    <img src=" https://4.imimg.com/data4/AV/MU/MY-9417631/outdoor-plant-pot-stand-500x500.jpg" alt="" className='img-fluid rounded-5 shadow-lg' />
                    <h3 className='mt-3 fw-bold font-monospace text-decoration-none text-dark'>OUTDOOR FLOWER POT</h3>
                   
                </Link>
            </div>

        </div>
      </div>
    </div>
  )
}
