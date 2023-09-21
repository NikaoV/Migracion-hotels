"use client";
import { useState } from "react";
import { hotelData } from "../../../services/getHotelsServices";
import { CardHotel } from "../../molecules/card/card";
import { Header } from "../../molecules/header/header";
import styles from "./cardsFilter.module.css";
import { hotelRooms } from "@/utils/helper";
import Alert from "@mui/material/Alert";

export const CardsFilter = () => {
  const [selectedCountry, setSelectedCountry] = useState("all");
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [selectedSizes, setSelectedSizes] = useState("all");
  const [dateTo, setDateTo] = useState("all");
  const [dateFrom, setDateFrom] = useState("all");
  
  console.log(dateFrom, dateTo);

  const filterHotels = (hotels) => {
    const newDateFrom= new Date(dateFrom);
    const newDateTo= new Date(dateTo)
    const todayDate = new Date().setHours(0,0,0,0);
    const dateCheckInLocal = new Date(
      newDateFrom.getTime() + newDateFrom.getTimezoneOffset() + 6000
    );
    const dateCheckOutLocal = new Date(
      newDateTo.getTime() + newDateTo.getTimezoneOffset() + 6000
    );
    const filteredHotels = hotels.filter((hotel) => {
      const availabilityHotels = todayDate + hotel.availabilityFrom
      const availabilityDays = availabilityHotels + hotel.availabilityTo

      const isCountryMatch =
        selectedCountry === "all" ||
        selectedCountry.toLocaleLowerCase() ===
          hotel.country.toLocaleLowerCase();

      const isPriceMatch =
        selectedPrice === "all" ||
        selectedPrice.toString() === hotel.price.toString();

      const isSizesMatch =
        selectedSizes === "all" || selectedSizes === hotelRooms(hotel.rooms);

      const availability = 
      (dateFrom === 'all' && dateTo === 'all') ||
      (dateCheckInLocal.getTime() >= availabilityHotels &&
      dateCheckOutLocal.getTime() <= availabilityDays);


      return isCountryMatch && isPriceMatch && isSizesMatch && availability;
    });

    return filteredHotels;
  };

  return (
    <>
      <Header
        updateCity={setSelectedCountry}
        updatePrice={setSelectedPrice}
        updateSizes={setSelectedSizes}
        changeDateFrom= {setDateFrom}
        changeDateTo= {setDateTo}
      />
      <div className={styles.cardsConteainer}>
        {filterHotels(hotelData).length > 0 ? (
          filterHotels(hotelData).map((hotel, index) => (
            <CardHotel key={index} hotel={hotel} />
          ))
        ) : (
          <Alert variant="outlined" severity="error" sx={{ marginLeft: "400px",marginRight: "-450px" }} >
            <font size="4">
          El hotel que esta buscando  No se encuentra!
          </font>
        </Alert>
        )}
      </div>
    </>
  );
};
