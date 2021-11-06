import React from "react";
import { Link } from "react-router-dom";
import girl from "./assets/Image/girl.jpg";
import shade from "./assets/Image/shade.png";
import gallery from "./assets/Image/male.jpg";
import boy from "./assets/Image/boy.jpg";
import fifth from "./assets/Image/fifth.jpg";
import back from "./assets/Image/back.jpg";
import sixth from "./assets/Image/sixth.jpg";
import mother from "./assets/Image/mother.jpg";
import third from "./assets/Image/third.jpg";
import Footer from "./Footer";

export default function Gallery() {

  const Gallerys = [
    {
      id: 1,
      photo: girl,
      name: "art of a kind",
      price: 2000,
      description:
        "I feel there has been a sort of tearing away from the self I have grown to know over the years... Breaking away from my ",
      year_created: 2020,
      frame_size: "70 x 100mm",
      quantity: "limited edition",
      size: "medium",
      equipnment_used: "pencil drawing",
    },
    {
      id: 2,
      photo: shade,
      name: "made with love ",
      price: 1000,
      description:
        "more recent work, this piece marks a departure as well as a development within my life. Making mistakes, as well as ",
      year_created: 2020,
      frame_size: "70 x 100mm",
      quantity: "limited edition",
      size: "medium",
      equipnment_used: "pencil drawing",
    },
    {
      id: Math.random(),
      photo: gallery,
      name: "man in the river",
      price: 1500,
      description:
        "oming to terms with those mistakes, is something with which I have always struggled. It reflects in my work that I try to maintain control over as much of my ",
      year_created: 2020,
      frame_size: "70 x 100mm",
      quantity: "limited edition",
      size: "medium",
      equipnment_used: "pencil drawing",
    },
    {
      id: Math.random(),
      photo: boy,
      name: "human in the making",
      price: 1000,
      description:
        "practice and personal life as possible. But while striving for perfection, or just general people pleasing is motivating and can feel",
      year_created: 2020,
      frame_size: "70 x 100mm",
      quantity: "limited edition",
      size: "medium",
      equipnment_used: "pencil drawing",
    },
    {
      id: Math.random(),
      photo: fifth,
      name: "color the world ",
      price: 1500,
      description:
        "good, feeling bound by this standard can be more like a crutch or defence mechanism than an authentic way of ",
      year_created: 2020,
      frame_size: "70 x 100mm",
      quantity: "limited edition",
      size: "medium",
      equipnment_used: "pencil drawing",
    },
    {
      id: Math.random(),
      photo: back,
      name: "Graphics on the wall",
      price: 3000,
      description:
        "being. This piece considers the burden of shame, my own practice of composure and ultimately, the process of dismantling",
      year_created: 2020,
      frame_size: "70 x 100mm",
      quantity: "limited edition",
      size: "medium",
      equipnment_used: "pencil drawing",
    },
    {
      id: Math.random(),
      photo: sixth,
      name: "unknowing for him",
      price: 3000,
      description: " OTHER ARTIST",
      year_created: 2020,
      frame_size: "70 x 100mm",
      quantity: "limited edition",
      size: "medium",
      equipnment_used: "pencil drawing",
    },
    {
      id: Math.random(),
      photo: mother,
      name: "name is not available now",
      price: 4000,
      description: " OTHER ARTIST",
      year_created: 2020,
      frame_size: "70 x 100mm",
      quantity: "limited edition",
      size: "medium",
      equipnment_used: "pencil drawing",
    },
    {
      id: Math.random(),
      photo: third,
      name: "name is coming from an unknown place",
      price: 6000,
      description: " OTHER ARTIST",
      year_created: 2020,
      frame_size: "70 x 100mm",
      quantity: "limited edition",
      size: "medium",
      equipnment_used: "pencil drawing",
    },
  ];

  return (
    <>
      <div className="container-fluid gallery-image">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="contact-header">Gallery DanielsFrancisart</h1>
            </div>
            <div className="row d-flex">
              <div className="col-lg-10 d-flex text-white">
                <p className="border mr-2 h-100"></p>
                <p> Masterpiece</p>
              </div>
            </div>

            <nav aria-label="breadcrumb">
              <ol className="breadcrumbs">
                <li className="breadcrumb-item">
                  <Link to="./">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Works
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      <nav className="container-fluid pt-5">
        <div className="nav nav-tabs row border-0" id="nav-tab" role="tablist">
          <button
            className="nav-link active col-lg-6 border-0 font-weight-bold active"
            id="nav-home-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-home"
            type="button"
            role="tab"
            aria-controls="nav-home"
            aria-selected="true"
          >
            PERSONAL
          </button>
          <button
            className="nav-link col-lg-6 border-0 font-weight-bold"
            id="nav-profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-profile"
            type="button"
            role="tab"
            aria-controls="nav-profile"
            aria-selected="false"
          >
            OTHER ARTIST
          </button>
        </div>
      </nav>

      <div
        className="tab-content  pt-5 text-center"
        id="nav-tabContent"
        style={{ backgroundColor: "#FEF6ED" }}
      >
        <div
          className="tab-pane fade show active"
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
        >
          <div className="container-fluid">
            <div className="container">
              <div className="row">
               
                {Gallerys.map((item) => (
                 
                  <div className="col-lg-3 border m-0 mb-4" key={item.id} items={item} >

                    <Link to={`product/${item.id}`}>
                      <img src={item.photo} alt="images" />
                      <p className="gallery-images-text text-center text-dark">
                        {item.name}
                      </p>
                      <Link
                        to={`product/${item.id}`}
                        className="text-dark"
                      >
                        See More{" "}
                      </Link>
                      </Link>
      
                  </div>
                  
                ))}

              </div>
            </div>
          </div>
        </div>

        <div
          className="tab-pane fade"
          id="nav-profile"
          role="tabpanel"
          aria-labelledby="nav-profile-tab"
        ></div>
      </div>

      <Footer/>

    </>
  );
}
