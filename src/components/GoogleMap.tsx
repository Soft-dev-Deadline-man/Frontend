import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  InfoBox,
  InfoWindow,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";
import axios from "axios";
import { text } from "stream/consumers";
import { number } from "yup";
import { WindowInfo } from "./WindowInfo";

const containerStyle = {
  width: "600px",
  height: "600px",
};

const center = {
  lat: 13.1977657,
  lng: 101.2377832,
};

function GoogleMapComponent() {
  const [marker, setMarker] = useState<any[]>([]);
  const [selectMarker, setSelectMarker] = useState<string>();

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND}blogs/all-data`)
      .then((response) => {
        setMarker(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY as string,
  });
  // const [mapMarker, setMapmarker] = useState([{lat:},{},{}]);

  const [map, setMap] = useState<any>();

  const onLoad = React.useCallback(function callback(map: any) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={9}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      {marker.map((e) => (
        <Marker
          key={e._id}
          position={{ lat: Number(e.latidude), lng: Number(e.longtitude) }}
          onClick={() => {
            setSelectMarker(e._id);
          }}
        >
          {selectMarker === e._id ? (
            <InfoWindow>
              <WindowInfo
                id={e._id}
                img={e.firstImage}
                title={e.title}
                openTime={e.openTime}
                typo={e.category}
              />
            </InfoWindow>
          ) : null}
        </Marker>
      ))}
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(GoogleMapComponent);
