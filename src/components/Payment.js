import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
export default function Payment() {

    const [img, setImg] = useState('')
    const [about, setAbout] = useState('')
    const [price, setPrice] = useState('')



    useEffect(() => {

        setImg(localStorage.getItem('img'));
        setAbout(localStorage.getItem('about'));
        setPrice(localStorage.getItem('price'));

    }, [])


    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        productName:'',
        price:''

      });
      
    
     
      const handleInputChange = (e) => {
        if (e.target.name === "productName") {
            setFormData({
              ...formData,
              productName: e.target.value,
            });
          } 
          if (e.target.name === "price") {
            setFormData({
              ...formData,
              price: e.target.value,
            });
          } 

        setFormData({
          ...formData,
          [e.target.name]: e.target.value,

        });
      };
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        // Handle form submission logic here
        const {firstName , lastName , email , address , cardNumber , expiryDate , cvv ,productName ,price  } = formData ;

        if(firstName &&  lastName , email &&  address &&  cardNumber &&  expiryDate &&  cvv ){
            const res = await fetch(
                "https://floweraura-25b4d-default-rtdb.firebaseio.com/flowerPayment.json",
                {
                    method:"POST",
                    headers:{
                        "Content-type":"application/json",
                    },
                    body:JSON.stringify({
                        firstName , lastName , email , address , cardNumber , expiryDate , cvv ,productName , price
                    })
                }
            );
            if (res){
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    address: '',
                    cardNumber: '',
                    expiryDate: '',
                    cvv: ''
                })
                alert("Thankyou For Shopping ! You will be Notify soon")
            }else{

                alert('please fill all data');
            }
        };
        


      };

      useEffect(() => {
        setFormData((prevFormData) => ({
          ...prevFormData,
          productName: about,
          price: price,
        }));
      }, [about, price]);

    
    return (
        <div className='mb-5'>
            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 d-flex flex-column d-flex justify-content-center align-items-center">
                    <img src={img} alt="" className="img-fluid w-75 h-75 shadow rounded-2" />


                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 mt-5">
                    <h1 className='fw-bold font-monospace  '>{about}</h1>
                    <hr />

                    <br />

                    <h1 className="fw-bold font-monospace mt-5 text-danger" style={{ fontSize: "4rem" }}>15% OFF
                        <span className="text-muted text-decoration-line-through ms-3 " style={{ fontSize: "3rem" }}>₹899</span>
                        <br />
                        <span className="  fw-bold text-primary " style={{ fontFamily: "monospace", fontSize: "10rem" }}>₹{price}</span>
                    </h1>
                    <br />
                    <div className="container">
                        <div className="fw-bold font-monospace " style={{ fontSize: "2rem" }}>
                            Rateing :


                            <img src="https://pixlok.com/wp-content/uploads/2021/07/Rating-SVG-Icon-s9fd.png" alt="" width="45" />
                            <img src="https://pixlok.com/wp-content/uploads/2021/07/Rating-SVG-Icon-s9fd.png" alt="" width="45" />
                            <img src="https://pixlok.com/wp-content/uploads/2021/07/Rating-SVG-Icon-s9fd.png" alt="" width="45" />
                            <img src="https://pixlok.com/wp-content/uploads/2021/07/Rating-SVG-Icon-s9fd.png" alt="" width="45" />






                        </div>
                    </div>
                    <div className=' mt-3 '>
                        {/* payment form  */}
                        <form onSubmit={handleSubmit} className='p-5 shadow rounded-4 w-75' >
                            <div className="row">
                                <div className="form-group col-md-6">
                                 
                                    <input
                                        type="text"
                                        className="form-control mt-3 shadow"
                                        id="firstName"
                                        name="firstName"
                                        placeholder="Enter first name"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    
                                    <input
                                        type="text"
                                        className="form-control mt-3 shadow"
                                        id="lastName"
                                        name="lastName"
                                        placeholder="Enter last name"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="form-group col">
                               
                                <input
                                    type="email"
                                    className="form-control mt-3 shadow"
                                    id="email"
                                    name="email"
                                    placeholder="Enter email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group col">
                                
                                <textarea
                                    type="text"
                                    className="form-control mt-3 shadow"
                                    id="address"
                                    name="address"
                                    placeholder="Enter Address & Pincode"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                ></textarea>
                            </div>
                            <div>

                            
                                
                                <input
                                    type="text"
                                    className="form-control mt-3 shadow"
                                    id="cardNumber"
                                    name="cardNumber"
                                    placeholder="Enter card number"
                                    value={formData.cardNumber}
                                    onChange={handleInputChange}
                                />
                           
                            <div className="row">
                                   <div className="form-group col-md-6">
                                 
                                    <input
                                        type="text"
                                        className="form-control mt-3 shadow"
                                        id="expiryDate"
                                        name="expiryDate"
                                        placeholder="MM/YY"
                                        value={formData.expiryDate}
                                        onChange={handleInputChange }
                                    />
                                </div>
                             
                                <div className="form-group col-6">
                                  
                                    <input
                                        type="text"
                                        className="form-control mt-3 shadow"
                                        id="cvv"
                                        name="cvv"
                                        placeholder="CVV"
                                        value={formData.cvv}
                                        onChange={handleInputChange  }
                                    />
                                   
                                    <input type="hidden" name="productName" value={formData.about}/>
                                    <input type="hidden" name="price" value={formData.price}/>

                                    
                                </div>
                            </div>
                            </div>
                            <Link type="submit" to="/thankyou" className="btn btn-danger  rounded-0 shadow-lg mt-3 w-100 btn-lg btn-block"  style={{backgroundColor:""}}>
                                Buy
                            </Link>
                        </form>
                    </div>

                </div>

            </div>
        </div>

    )
}
