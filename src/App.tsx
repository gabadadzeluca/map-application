import MapComponent from "./components/MapComponent/MapComponent";
import styled from "styled-components";
import SelectMenu from "./components/SelectMenu/SelectMenu";
import { RegionType, CITIES } from "./utils/cities";
import { useState } from "react";

function App() {
  const [region, setRegion] = useState<RegionType>("european");
  const [city, setCity] = useState<string>(CITIES[region][0].city);

  const SelectMenuProps = {
    region,
    setRegion,
    city,
    setCity,
  };
  return (
    <SContainer>
      <SelectMenu {...SelectMenuProps} />
      <MapComponent />
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
`;
