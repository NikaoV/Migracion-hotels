"use client";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { useState, useEffect } from "react";
import { CardHotel } from "../../molecules/card/card";
import { Header } from "../../molecules/header/header";
import styles from "./cardsFilter.module.css";
import { hotelRooms } from "@/utils/helper";
import { Snackbar } from "@mui/material";

export const CardsFilter = ({ getDataHotels }) => {
  const [selectedCountry, setSelectedCountry] = useState("all");
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [selectedSizes, setSelectedSizes] = useState("all");
  const [dateTo, setDateTo] = useState("all");
  const [dateFrom, setDateFrom] = useState("all");
  const [filterHotels, setFilterHotels] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  // const [hotelsData, setHotelsData] = useState([]);

  // const fetchHotels = async () => {
  //   try {
  //     const data = await hotelData();
  //   setHotelsData(data);
  //   } catch (error) {
  //     console.error("Error en los Hoteles");
  //   }

  // };
  // useEffect(() => {
  //   fetchHotels();
  // }, []);

  useEffect(() => {
    const newDateFrom = new Date(dateFrom);
    const newDateTo = new Date(dateTo);
    const todayDate = new Date().setHours(0, 0, 0, 0);
    const dateCheckInLocal = new Date(
      newDateFrom.getTime() + newDateFrom.getTimezoneOffset() + 6000
    );
    const dateCheckOutLocal = new Date(
      newDateTo.getTime() + newDateTo.getTimezoneOffset() + 6000
    );
    const filteredHotels = getDataHotels.filter((hotel) => {
      const availabilityHotels = todayDate + hotel.availabilityFrom;
      const availabilityDays = availabilityHotels + hotel.availabilityTo;

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
        (dateFrom === "all" && dateTo === "all") ||
        (dateCheckInLocal.getTime() >= availabilityHotels &&
          dateCheckOutLocal.getTime() <= availabilityDays);

      return isCountryMatch && isPriceMatch && isSizesMatch && availability;
    });
    setFilterHotels(filteredHotels);
  }, [selectedCountry, selectedPrice, selectedSizes, dateTo, dateFrom]);

  // const filterHotels = () => {
  //   const newDateFrom = new Date(dateFrom);
  //   const newDateTo = new Date(dateTo);
  //   const todayDate = new Date().setHours(0, 0, 0, 0);
  //   const dateCheckInLocal = new Date(
  //     newDateFrom.getTime() + newDateFrom.getTimezoneOffset() + 6000
  //   );
  //   const dateCheckOutLocal = new Date(
  //     newDateTo.getTime() + newDateTo.getTimezoneOffset() + 6000
  //   );
  //   const filteredHotels = getDataHotels.filter((hotel) => {
  //     const availabilityHotels = todayDate + hotel.availabilityFrom;
  //     const availabilityDays = availabilityHotels + hotel.availabilityTo;

  //     const isCountryMatch =
  //       selectedCountry === "all" ||
  //       selectedCountry.toLocaleLowerCase() ===
  //         hotel.country.toLocaleLowerCase();

  //     const isPriceMatch =
  //       selectedPrice === "all" ||
  //       selectedPrice.toString() === hotel.price.toString();

  //     const isSizesMatch =
  //       selectedSizes === "all" || selectedSizes === hotelRooms(hotel.rooms);

  //     const availability =
  //       (dateFrom === "all" && dateTo === "all") ||
  //       (dateCheckInLocal.getTime() >= availabilityHotels &&
  //         dateCheckOutLocal.getTime() <= availabilityDays);

  //     return isCountryMatch && isPriceMatch && isSizesMatch && availability;
  //   });

  //   return filteredHotels;
  // };

  return (
    <>
      <Header
        updateCity={setSelectedCountry}
        updatePrice={setSelectedPrice}
        updateSizes={setSelectedSizes}
        changeDateFrom={setDateFrom}
        changeDateTo={setDateTo}
      />
      {filterHotels.length > 0 ? (
        <div className={styles.cardsConteainer}>
          {filterHotels.map((hotel, index) => (
            <CardHotel key={index} hotel={hotel} snackbar={setShowMessage} />
          ))}
        </div>
      ) : (
        <Stack sx={{ width: "37%", marginLeft: 50, marginTop: 5 }} spacing={2}>
          <Alert
            variant="outlined"
            severity="error"
            sx={{ borderRadius: 5, boxShadow: 8 }}
          >
            <font size="4">El hotel que estas buscando — No se encuentra!</font>
          </Alert>
        </Stack>
      )}
      <Snackbar
      onchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
        open={showMessage}
        autoHideDuration={4000}
        onClose={setShowMessage}
        sx={{ width: "37%", marginLeft: 60, marginTop: 5 }}
      >
  <Alert  className={styles.buttonCardHotel} severity="success"  sx={{ borderRadius: 5, boxShadow: 8 }}>
  <font size="4"> Tu hotel se ha reservado!</font> 
  </Alert>
      </Snackbar>
    </>
  );
};
