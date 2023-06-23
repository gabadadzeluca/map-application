import MapComponent from "./components/MapComponent";
import styled from "styled-components";
import SelectMenu from "./components/SelectMenu";
import { RegionType, CITIES } from "./utils/cities";
import { useState } from "react";
import ModeChangeComponent from "./components/ModeChangeComponent";

function App() {
  const [region, setRegion] = useState<RegionType>("europe");
  const [city, setCity] = useState<string>(CITIES[region][0].city);
  const [markerOn, setMarkerOn] = useState<boolean>(false);
  const [displayAirports, setDisplayAirports] = useState<boolean>(true);

  const SelectMenuProps = {
    region,
    setRegion,
    setCity,
  };
  const cityObj =
    CITIES[region].find((obj) => obj.city === city) || CITIES[region][0];

  return (
    <SContainer>
      <SelectMenu {...SelectMenuProps} />
      <ModeChangeComponent
        markerOn={markerOn}
        setMarkerOn={setMarkerOn}
        displayAirports={displayAirports}
        setDisplayAirports={setDisplayAirports}
      />
      <MapComponent
        city={cityObj}
        markerOn={markerOn}
        displayAirports={displayAirports}
      />
    </SContainer>
  );
}

export default App;

const SContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2f2e2e;
`;
