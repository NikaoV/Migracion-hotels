"use client";
import React, { useEffect, useState } from "react";

const Detail = () => {
  const [selectedtHotel, setSelectedtHotel] = useState({
    name: "",
    description: "",
    photo: "",
    country: "",
  });

  useEffect(() => {
    const storedHotel = localStorage.getItem("selectedtHotel");
    if (storedHotel) {
      setSelectedtHotel(JSON.parse(storedHotel));
    }
  }, []);

  console.log(selectedtHotel);
  const {name, photo} = selectedtHotel;
  return (
    <div>
      <img src={photo} width={300} height={300}/> 
      <h2>{name}</h2>
    </div>
  );
};

export default Detail;
