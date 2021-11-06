import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Subscribe from "./Subscribe";

export default function SubcribePage() {
  return (
    <div>
      <div className="container-fluid contact-image">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="contact-header">Subscribe DanielsFrancisart</h1>
            </div>
            <div className="row d-flex">
              <div className="col-lg-10 d-flex text-white">
                <p className="border mr-2 h-100"></p>
                <p>
                  For the latest updates about reopening, booking prints and
                  what's happening at danielsfrancisart, sign up to our
                  newsletter
                </p>
              </div>
            </div>

            <nav aria-label="breadcrumb">
              <ol class="breadcrumbs">
                <li class="breadcrumb-item">
                  <Link to="./">Home</Link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Contact
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      <div className="subscribe_container my-5 py-5">
        <Subscribe />
      </div>

      <Footer />
    </div>
  );
}
