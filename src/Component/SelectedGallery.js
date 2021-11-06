import React, {useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";

export default function SelectedGallery() {
  const { id } = useParams();

  const [datas, setData] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?id=${id}`)
      .then((res) => res.json())
      .then((data) =>   setData(data))
  }, [id]);

  return (
    <>

      <div className="container-fluid gallery-image">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="contact-header">
                SelectedGallery DanielsFrancisart
              </h1>
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
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  SelectedGallery
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <h1 className="text-dark">
            {datas.map(data => {
            return(
                <div>
                    <p className="text-dark">{data.id}</p>
                    <p className="text-dark">{data.name}</p>
                    <p className="text-dark">{data.email}</p>
                    <p className="text-dark">{data.body}</p>
                </div>
            )})}
        </h1>
      </div>

    </>
  );
}
