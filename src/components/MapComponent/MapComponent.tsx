import { LatLngExpression } from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import styled from "styled-components";
import { City } from "../../utils/cities";

export default function MapComponent(props: { city: City }) {
  const city = props.city;
  const center: LatLngExpression | undefined = [city.lat, city.lng];

  return (
    <SDiv>
      <MapContainer key={center.toString()} center={center} zoom={10} scrollWheelZoom={true} id="map">
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
  display: flex;
  align-items: center;
  justify-content: center;
  & > div {
    // leaflet container
    width: 80%;
    height: 80%;
  }
`;
