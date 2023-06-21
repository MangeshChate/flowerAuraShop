import React from 'react'
import {Link} from 'react-router-dom'
export default function Topbody() {
  return (
    <div>
      <div className=" container mt-5">
            <div className="row p-5 ">
                <div className="col-lg-6 col-md-12 col-sm-12  d-flex justify-content-center">
                    <div className="d-flex flex-column rounded-3  justify-content-center  ">
                    <div className=' p-5'>
                        <h3>Welcome !</h3>
                        <h1 className='fw-bold text-warning' style={{fontSize:"3rem"}}>Flowering Plants </h1>
                        <p className='mt-4'>"when you look for the good in others,you discover the best in yourself. count the garden by the flowers,never by the leaves that fall.count your life with smiles and not the tears that roll."</p>
                        <Link to="/product" className='btn btn-dark rounded-5 p-2 w-50 mt-5 '>Buy Now</Link>

                    </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 ">
                    <img src="https://png.pngtree.com/png-clipart/20230325/original/pngtree-outlined-leaves-decoration-with-watercolor-flowers-bouquet-png-image_9002661.png" alt=""  className='img-fluid rounded-3 ms-3 ' width="800"/>
                </div>

            </div>
      </div>
    </div>
  )
}
