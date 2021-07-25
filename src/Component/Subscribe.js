import React, { Component } from 'react';
import {Subscriber} from './assets/styles'
import {Link} from 'react-router-dom'
// import Footer from './Footer'

class componentName extends Component {
  render() {
    return (
      <>
      <div className="container-fluid"> 
      <div className="container">

        <div className="row py-5">
          <Subscriber className="col-lg-12  text-center ">
            <h2 className="subscribe-header">
              Subscribe
            </h2>
            <form className="row g-3  ">
              <div className="col-lg-12 ml-5 container-form" >
                <p className="font-weight-bold">
                SIGN UP WITH YOUR EMAIL ADDRESS TO RECEIVE NEWS AND UPDATES
                </p>
                <div className="row text-center ">

                  <div className="col-lg-7 py-2">
                    <input type="email" className="form-control input-field py-4 " id="inputPassword2" placeholder="example@gmail.com"/>
                  </div>
                  <div className="col-auto my-3">
                    <Link type="submit" className="subscribe-btn mb-3 " to="/about">Subscribe</Link>
                  </div>
              </div>
              </div>

            </form>
          

          </Subscriber>

        </div>
        </div> 
         </div>
       
         </>
    );
  }
}

export default componentName;
