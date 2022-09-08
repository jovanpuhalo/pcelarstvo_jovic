import React from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";

const center = {
  lat: 44.72303,
  lng: 19.162095,
};
const containerStyle = {
  width: "100%",
  height: "400px",
};
const options = {
  // styles: mapStyles, // menja stil mape koju je nasao u snazzy styles sajtu i stavio je u posebnu datoteku
  disableDefaultUI: false, //disejbluje defoltne opcije u mapi, kao sto je u gornjem lijevo csoku "map i satelit , coveculja za street viev"
  zoomControl: true,
  fullscreenControl: true,
  mapTypeControl: true,
  //   mapTypeControlOptions: {
  //     style: window.google.maps.MapTypeControlStyle.DROPDOWN_MENU,
  //   },
  //   mapTypeId: window.google.maps.MapTypeId.HYBRID,
  draggableCursor: "fallbackCursor", //fallbackCursor,crosshair , move
  mapTypeId: "hybrid",
};

const Location = () => {
  return (
    <div className="contact__location">
      <LoadScript googleMapsApiKey="AIzaSyA45OgYPY6ORuNz1KItJ8Lt1xaVj_suTPs">
        <GoogleMap
          id="map"
          zoom={14}
          mapContainerStyle={containerStyle}
          center={center}
          options={options}
          // onClick={noClick || onMapClick} // ako ima noClick kao props onda nece doci do izvrsenja ovog clicka jer je stavljen operator || koji radi kontra posao od &&
          // onLoad={onMapLoad}
        >
          <Marker
            position={center} //pozicija markera
            title={"Ovdje smo"} //primer
          />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Location;
