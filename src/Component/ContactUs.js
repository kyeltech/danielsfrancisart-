import React, { Component } from 'react';
import Subscibe from './Subscribe';
import Footer from './Footer';
import {Link} from 'react-router-dom'




class componentName extends Component {
  render() {
    return (
      <>
      <div className="container-fluid contact-image">
        <div className="container">
          <div  className="row">
                      <div className="col-lg-12">
                      <h1 className="contact-header">
                      Contact DanielsFrancisart
                        </h1>
                        

                      </div>
                        <div className="row d-flex">
              
                  <div className="col-lg-10 d-flex text-white">
                  <p className="border mr-2 h-100">

            </p>
            <p>For the latest updates about reopening, booking prints and what's happening at danielsfrancisart, sign up to our newsletter

            </p>
                    </div>
                        </div>

                        <nav aria-label="breadcrumb">
  <ol class="breadcrumbs">
    <li class="breadcrumb-item"><Link to="./">Home</Link></li>
    <li class="breadcrumb-item active" aria-current="page">Contact</li>
  </ol>
</nav>

          </div>

        </div>
        </div>
        
        <div className="container-fluid contact-main ">
          <div className="container">
          <div className="row contact-row">
                <div className="col-lg-6 border contact-info ">
              <h2 className="font-weight-bold py-3 fs-3 text-uppercase">
              Main Contact Number
              </h2>
              <p>
                <a href="tel:020 3461 4444">08080008000 </a>

              (Monday to Friday, 9am to 5pm)
              </p>
              <p className="py-3 ">
              Please use this number if you know the name of the person or department you would like to contact. Or you can fax 020 3461 4771.
              </p>

              <div className="py-2  ">
                <h1 className="fs-4 text-uppercase font-weight-bold">
                General enquiries
                </h1>

                <p className="py-3">
                  <a href="mailto:enquires@danielsfrancisart.com" >enquires@danielsfrancisart.com</a> <br/>
                  <a href="tel: 2354657354">234356736476 (Monday to Friday: 10:00 - 17:00).</a>
                </p>

              </div>
              <div className="py-2  ">
                <h1 className="fs-4 text-uppercase font-weight-bold">
                Prints enquiries
                </h1>

                <p className="py-3">
                  <a href="mailto:prints@danielsfrancisart.com">enquires@danielsfrancisart.com</a> <br/>
                  <p>The person or department you would like to contact</p>
                </p>

              </div>

                </div>
                <div className="col-lg-6 py-5 form-inner">
                            <div className=" mb-3 py-1">
                  <input type="name" className="input-controls py-3" id="exampleFormControlInput1" placeholder="Complete name"/>
                </div>
                            <div className="mb-3 py-1">
                  <input type="email" className="input-controls" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div className="mb-1 py-1">
                  <input type="email" className="input-controls" id="exampleFormControlInput1" placeholder="Phone number"/>
                </div>
                <div className="mb-3 py-1">
                  <textarea className="input-controls" id="exampleFormControlTextarea1" rows="1" placeholder="your message"></textarea>
                </div>
                <button className="contact-btn">
                  Send to admin
                </button>
                </div>
          </div>
          </div>
        </div>

        <Subscibe/>
        <Footer/>
        
        
          </>
    );
  }
}

export default componentName;
