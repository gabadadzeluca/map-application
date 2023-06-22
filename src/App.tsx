import MapComponent from "./components/MapComponent/MapComponent";
import styled from "styled-components";
import SelectMenu from "./components/SelectMenu/SelectMenu";
import { RegionType, CITIES } from "./utils/cities";
import { useState } from "react";

function App() {
  const [region, setRegion] = useState<RegionType>("europe");
  const [city, setCity] = useState<string>(CITIES[region][0].city);

  const SelectMenuProps = {
    region,
    setRegion,
    setCity,
  };
  const cityObj = CITIES[region].find(obj=>obj.city === city) || CITIES.europe[0]; 

  return (
    <SContainer>
      <SelectMenu {...SelectMenuProps} />
      <MapComponent city={cityObj}/>
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
