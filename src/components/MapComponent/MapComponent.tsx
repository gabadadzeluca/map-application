import { LatLngExpression } from "leaflet";
import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import styled from "styled-components";

export default function MapComponent() {
  const [center, setCenter] = useState<LatLngExpression | undefined>([42.3154, 43.3569]);

  return (
    <SDiv>
      <MapContainer center={center} zoom={7} scrollWheelZoom={true} id="map">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </SDiv>
  );
}


const SDiv = styled.div`
 width: 100vw;
 height: 100vh;
  &>div{ // leaflet container
    width: 100vw;
    height: 100vh;
  }
`