import { LatLngExpression, LatLngTuple, LeafletMouseEvent } from "leaflet";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import styled from "styled-components";
import { City } from "../../utils/cities";
import { useReducer, useRef, useEffect } from "react";
import { markerReducer, ACTIONS } from "../../utils/MarkerReducer";

export default function MapComponent(props: { city: City }) {
  const city = props.city;
  const center: LatLngExpression = [city.lat, city.lng];
  const [markers, dispatch] = useReducer(markerReducer, []);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // remove right click context menu event
    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault();
    };
    // Add the event listener when the component mounts
    mapRef.current &&
      mapRef.current.addEventListener("contextmenu", handleContextMenu);

    // Remove the event listener when the component unmounts
    return () => {
      mapRef.current &&
        mapRef.current.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  const handleMapClick = (e: LeafletMouseEvent): void => {
    const { lat, lng } = e.latlng;
    const latlngTuple: LatLngTuple = [lat, lng];

    if (e.originalEvent.button === 0) {
      dispatch({
        type: ACTIONS.ADD_MARKER,
        payload: latlngTuple,
      });
    } else if (e.originalEvent.button === 2) {
      dispatch({
        type: ACTIONS.REMOVE_MARKER,
      });
    }
  };

  const MapClickHandler = () => {
    useMapEvents({
      mousedown: handleMapClick,
    });

    return null;
  };

  return (
    <SDiv ref={mapRef}>
      <MapContainer
        key={center.toString()}
        center={center}
        zoom={10}
        scrollWheelZoom={true}
        id="map"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map((marker, index) => (
          <SMarker key={index} position={marker} />
        ))}
        <MapClickHandler />
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

const SMarker = styled(Marker)`
  background-color: red;
  background-color: red;
  border-radius: 50%;
  width: 20px;
  height: 20px;
`
