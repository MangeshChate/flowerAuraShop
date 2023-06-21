import React from 'react'

export default function About() {
  return (
    <div>
      <div className="container mt-5 pt-5 mb-5 pb-5">
        <div className="d-flex justify-content-center align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12 me-5">
                <img src="https://i.ibb.co/J51tph5/about-img.png" alt="" className='img-fluid '/>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 w-50 ms-5">
                <h1 className='fw-bold text-info-emphasis' style={{fontSize:"5rem"}}>About Flowers</h1>
                <h5 className='text-muted mt-3'>A flower, sometimes known as a bloom or blossom, is the reproductive structure found in flowering plants. Flowers have long been appreciated by humans for their beauty and pleasant scents, and also hold cultural significance as religious, ritual, or symbolic objects, or sources of medicine and food.</h5>
            </div>
        </div>
      </div>
    </div>
  )
}
