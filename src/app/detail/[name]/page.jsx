"use client";
import React, { useContext, useEffect, useState } from "react";
import { MainButton } from "../../../../components/atoms/button/Button";
import styles from "./page.module.css";
import { AppContext } from "@/store/CurrentProvider";

const Detail = () => {
  const [selectedHotel, setSelectedHotel] = useState({
    name: "",
    description: "",
    photo: "",
    country: "",
    city: ""
  });

  const {setDetailPage} = useContext(AppContext)

  useEffect(() => {
    const storedHotel = localStorage.getItem("selectedHotel");
    if (storedHotel) {
      setSelectedHotel(JSON.parse(storedHotel));
    }
    setDetailPage()
  }, []);

 
  const {name, photo, description,country,city} = selectedHotel;
  console.log(selectedHotel);
  return (
    <div  className={styles.container}>
      <img src={photo} width={300} height={300}  className={styles.detailImage}/> 
      <h2>{name}</h2>
      <p className={styles.text}>{description}</p>
      <p className={styles.text}>Pais: {country}</p>
      <p className={styles.text}>Ciudad: {city}</p>
     <div className={styles.buttonContainer}>
      <MainButton  className={styles.buttonCardHotel}>Book It!</MainButton>
      <MainButton  className={styles.buttonCardHotel}>Favorites</MainButton>
     </div>
    </div>
  );
};

export default Detail;
