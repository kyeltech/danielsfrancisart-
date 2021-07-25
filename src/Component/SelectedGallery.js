import React from 'react';
import { useParams } from "react-router-dom";
export default function SelectedGallery(){

  const { item } = useParams();
  console.log(item)                                       



    return (
      <div className="bg-dark text-white text-center py-5"> Hello world  </div>
    );
  }

