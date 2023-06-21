import React from 'react'

export default function Contact() {
  return (
    <div>
    <hr />
      <div className="container w-25 mt-5 pt-5 mb-5 pb-5">
        <h1 className='fw-bold text-info-emphasis font-monospace d-flex justify-content-center mb-4'>Contact Us</h1>
        <form action="" className='d-flex flex-column justify-content-center'>
            <input type="text" placeholder='name ' className='form-control rounded-0 shadow-lg mt-4' />

            <input type="email" placeholder='email ' className='form-control rounded-0 shadow-lg mt-4' />

            <input type="number" placeholder='phone number' className='form-control rounded-0 shadow-lg mt-4' />

            <textarea type="text" placeholder='Your Message ' className='form-control rounded-0 shadow-lg mt-4' ></textarea>

            <button className='mt-5  btn btn-danger rounded-5  btn-lg'>SEND</button>
        </form>
      </div>
    </div>
  )
}
