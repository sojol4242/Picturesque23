import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import firebase from "firebase";
import "./map.css";
import "firebase/database";
import { db } from "../../../Auth/firebase.config";
import PreLoader from "../../../Common/PreLoader";
import NotFound from "../../../NotFound/NotFound";

//Map Api= AIzaSyCLJx7EASIc2pOjiQApyAvo1FyeZcjtBLQ

const libraries = ["places"];
const mapContainerStyle = {
  margin: "0 auto",
  width: "75vw",
  height: "100vh",
};

const Map = () => {
  const [lon, setLon] = useState("");
  const [lat, setLat] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [locationName, setLocationName] = useState(null);
  console.log(lat, lon, time, date);

  const defaultCenter = {
    lat: null, // default latitude
    lng: null, // default longitude
  };

  useEffect(() => {
    // Reference to the Firebase database node
    const mapDataRef = db.ref("/");

    // Listen for value changes
    mapDataRef.on("value", (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setLat(data.lat || defaultCenter.lat);
        setLon(data.lon || defaultCenter.lon);
        setDate(data.date || "");
        setTime(data.time || "");
      }
    });

    // Clean up the listener on component unmount
    return () => {
      mapDataRef.off();
    };
  }, []);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCLJx7EASIc2pOjiQApyAvo1FyeZcjtBLQ",
    libraries,
  });
  if (loadError) {
    return <>
    <NotFound/>
    </>;
  }

  if (!isLoaded) {
    return <><PreLoader/></>;
  }

  // console.log(db);
  return (
    <div className="container">
      <h1>Traced location</h1>

      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={{ lat: lat, lng: lon }}
        zoom={15} // Adjust zoom level as needed
      >
        <Marker position={{ lat: lat, lng: lon }} />
      </GoogleMap>
      <p>Date: {date}</p>
      <p>Time: {time}</p>
      <p>Lat: {lat}</p>
      <p>Lon: {lon}</p>
    </div>
  );
};

export default Map;
