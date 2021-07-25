import React, { Component } from 'react';
import { SiInstagram } from "react-icons/si";
import {RiFacebookFill} from "react-icons/ri"
import {GrTwitter} from "react-icons/gr"
import {ImLinkedin2} from "react-icons/im"
class Footer extends Component {
  render() {
    return (
      <>
      <div className="container-fluid">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-12  text-center d-flex footer-icons">
          <SiInstagram className="footer-icon"/>
          <RiFacebookFill className="footer-icon"/>
          <GrTwitter className="footer-icon"/>
          <ImLinkedin2 className="footer-icon"/>

            </div>
            <hr className="hr-styles"/>
            <div className="col-lg-12">
            created by kyel 	&copy; <span className="font-weight-bold">danielsfrancisart 2021</span>. All Rights  Reserved

            </div>
          </div>

        </div>
          </div> 
           </>
    );
  }
}

export default Footer;
