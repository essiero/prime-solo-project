// Thanks to https://medium.com/@yukthihettiarachchissck/getting-started-with-google-maps-api-in-react-js-1390b19d18f0
// for this sample code
import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
// require('dotenv').config();

function MyMap() {
  // centers map on Minneapolis by default
  const center = {
    lat: 44.978145599365234, // default latitude
    lng: -93.26353454589844, // default longitude
  };
  const apiKey=process.env.GOOGLE_MAPS_API_KEY
  const libraries = ["places"];
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyBEYEcOGj237bE2zG78LTaQpUplQITQxpE",
    libraries,
  });
  const mapContainerStyle = {
    width: "75vw",
    height: "75vh",
  };

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div>   
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
      >
        <Marker
          key="marker_1"
          position={{
            lat: 45.444,
            lng: -93.176,
          }}
        />
      </GoogleMap>
    </div>
  );
}

export default MyMap;
