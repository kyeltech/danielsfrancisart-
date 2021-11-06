import React, { Component } from "react";
import { Link } from "react-router-dom";
import hair from "./assets/Image/hair.png";
// import boy from './assets/Image/boy.jpg'
// import  male from './assets/Image/male.jpg'
import CountUp from "react-countup";
import Footer from "./Footer";

class About extends Component {
  render() {
    return (
      <>
        <div className="container-fluid about-image">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1 className="contact-header">About DanielsFrancisart</h1>
              </div>
              <div className="row ">
                <div className="col-lg-11 d-flex text-white">
                  <p className="border mr-2 h-100"></p>
                  <p>
                    Keeping it simple but striking with a minimalist approach
                  </p>
                </div>
              </div>
              <nav aria-label="breadcrumb  ">
                <ol class="breadcrumbs">
                  <li class="breadcrumb-item">
                    <Link to="./">Home</Link>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    About
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="container">
            <div className="row  " style={{ paddingTop: 40 }}>
              <div className="col-lg-12 text-center">
                <h1 className="fs-1 font-weight-bold text-uppercase mb-4">
                  biograghy
                </h1>
              </div>
            </div>
            <div className="row text-center about-container">
              <div className="col-lg-6">
                <img src={hair} alt="artist" />
              </div>

              <div className="col-lg-6 justifying text-left mt-5">
                <p className="text-left font-size-10 text-dark">
                  A wonderful serenity has taken possession of my entire soul,
                  like these sweet mornings of spring which I enjoy with my
                  whole heart. I am alone, and feel the charm of existence in
                  this spot, which was created for the bliss of souls like mine.
                  I am so happy, my dear friend, so absorbed in the exquisite
                  sense of mere tranquil existence, that I neglect my talents. I
                  should be incapable of drawing a single stroke at the present
                  moment; and yet I feel that I never was a greater artist than
                  now. When, while the lovely valley teems with vapour around
                  me, and the meridian sun strikes the upper surface of the
                  impenetrable foliage of my trees, and but a few stray gleams
                  steal into the inner sanctuary, I throw myself down among the
                  tall grass by the trickling stream; and, as I lie close to the
                  earth, a thousand unknown plants are noticed by me:
                </p>
                <p className="text-dark">
                  when I hear the buzz of the little world among the stalks, and
                  grow familiar with the countless indescribable forms of the
                  insects and flies, then I feel the presence of the Almighty,
                  who formed us in his own image, and the breath of that
                  universal love which bears and sustains us, as it floats
                  around us in an eternity of bliss; and then, my friend, when
                  darkness overspreads my eyes, and heaven and earth seem to
                  dwell in my soul and absorb its power
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className="hr-styles m-auto w-100" />
     
        <div className="row  " style={{ paddingTop: 40 }}>
          <div className="col-lg-12 text-center">
            <h1 className="fs-1 font-weight-bold text-uppercase">
              Artist statement
            </h1>

            <p className="p-5 text-dark">
              A wonderful serenity has taken possession of my entire soul, like
              these sweet mornings of spring which I enjoy with my whole heart.
              I am alone, and feel the charm of existence in this spot, which
              was created for the bliss of souls like mine. I am so happy, my
              dear friend, so absorbed in the exquisite sense of mere tranquil
              existence, that I neglect my talents. I should be incapable of
              drawing a single stroke at the present moment; and yet I feel that
              I never was a greater artist than now. When, while the lovely
              valley teems with vapour around me, and the meridian sun strikes
              the upper surface of the impenetrable foliage of my trees, and but
              a few stray gleams steal into the inner sanctuary, I throw myself
              down among the tall grass by the trickling stream; and, as I lie
              close to the earth, a thousand unknown plants are noticed by me:
            </p>
          </div>
        </div>
        <div className="container-fluid containing">
          <div className="container">
            <div className="row text-center">
         
              <div className="col-lg-3 mb-5">
                <CountUp start={0} end={10} delay={0}>
                  {({ countUpRef }) => (
                    <div>
                      <span
                        ref={countUpRef}
                        className="font-weight-bold fs-2 fonting"
                      />
                      <span className="fonting">+</span>
                      <div>
                        <h1 className="fs-3 font-weight-bold visiting">
                          AWARD WINNING
                        </h1>
                      </div>
                    </div>
                  )}
                </CountUp>
              </div>

              <div className="col-lg-3 mb-5">
                <CountUp start={0} end={100} delay={0}>
                  {({ countUpRef }) => (
                    <div>
                      <span ref={countUpRef} className="fonting" />
                      <span className="fonting">+</span>
                      <div>
                        <h1 className="fs-3 font-weight-bold visiting">
                          DAILY SALES
                        </h1>
                      </div>
                    </div>
                  )}
                </CountUp>
              </div>

              <div className="col-lg-3 mb-5">
                <CountUp start={0} end={300} delay={0}>
                  {({ countUpRef }) => (
                    <div>
                      <span ref={countUpRef} className="fonting" />
                      <span className="fonting">+</span>
                      <div>
                        <h1 className="fs-3 font-weight-bold visiting">
                          MORE THAN 300 COLLECTION
                        </h1>
                      </div>
                    </div>
                  )}
                </CountUp>
              </div>

              <div className="col-lg-3 mb-5">
                <CountUp start={0} end={1000} delay={0}>
                  {({ countUpRef }) => (
                    <div>
                      <span ref={countUpRef} className="fonting" />
                      <span className="fonting">k</span>
                      <div>
                        <h1 className="fs-3 font-weight-bold visiting">
                          DAILY VISITORS
                        </h1>
                      </div>
                    </div>
                  )}
                </CountUp>
              </div>

            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default About;
