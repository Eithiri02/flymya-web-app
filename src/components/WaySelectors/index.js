import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import FlightIcon from "../../assets/Icons/flight.png";
import FlightActiveIcon from "../../assets/Icons/flightActive.png";
import HotelIcon from "../../assets/Icons/hotel.png";
import HotelActiveIcon from "../../assets/Icons/hotelActive.png";
import BusIcon from "../../assets/Icons/bus.png";
import BusActiveIcon from "../../assets/Icons/busActive.png";
import CarIcon from "../../assets/Icons/car.png";
import CarActiveIcon from "../../assets/Icons/carActive.png";
import BallonIcon from "../../assets/Icons/ballon.png";
import BallonActiveIcon from "../../assets/Icons/ballonActive.png";

export default function WaySelectors() {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ width: "100%", display: "flex", justifyContent: "center" }}
      mb={2}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab
          value="one"
          label="Flights"
          icon={
            <img
              src={value === "one" ? FlightActiveIcon : FlightIcon}
              alt="Flight"
            />
          }
        />
        <Tab
          value="two"
          label="Hotels"
          icon={
            <img
              src={value === "two" ? HotelActiveIcon : HotelIcon}
              style={{ width: 52, height: 52 }}
              alt="Hotel"
            />
          }
        />
        <Tab
          value="three"
          label="Buses"
          icon={
            <img
              src={value === "three" ? BusActiveIcon : BusIcon}
              style={{ width: 47, height: 52 }}
              alt="Bus"
            />
          }
        />
        <Tab
          value="four"
          label="Cars"
          icon={
            <img
              src={value === "four" ? CarActiveIcon : CarIcon}
              style={{ width: 47, height: 52 }}
              alt="Car"
            />
          }
        />
        <Tab
          value="five"
          label="Ballons"
          icon={
            <img
              src={value === "five" ? BallonActiveIcon : BallonIcon}
              style={{ width: 52, height: 52 }}
              alt="Ballon"
            />
          }
        />
      </Tabs>
    </Box>
  );
}
