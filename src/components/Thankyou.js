import React from 'react'
import { Link } from 'react-router-dom'
export default function Thankyou() {
    return (
        <div>
            <hr />
            <div className="container d-flex flex-column align-items-center mt-5 pt-5 mb-5 pb-5">
                <img src="https://gifsec.com/wp-content/uploads/2022/09/thank-you-gif-1.gif" alt="" width="300" />
                <h1 className='fw-bold font-monospace text-decoration-underline'>Thankyou For Shopping ! </h1>
                <h6>After checking details , you will be notified soon !</h6>
                <div>
                    <Link to="/" className='btn btn-dark shadow-lg rounded-5 mt-4 fw-bold btn-lg d-flex align-items-center'>
                        <span class="material-symbols-outlined me-3">keyboard_backspace</span>
                        <span>Back to the Shopping</span>  </Link>
                </div>
            </div>
        </div>
    )
}
