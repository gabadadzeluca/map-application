import styled from "styled-components";
import { CITIES, REGIONS, RegionType } from "../utils/cities";

export default function SelectMenu(props: {
  region: RegionType;
  setRegion: React.Dispatch<React.SetStateAction<RegionType>>;
  setCity: React.Dispatch<React.SetStateAction<string>>;
}) {
  const { region, setRegion, setCity } = props;

  const cityArr = CITIES[region];

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setCity(e.target.value);
  };

  const handleRegionChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const value = e.target.value;
    if (value === "europe" || value === "asia" || value === "africa")
      setRegion(value);
  };

  return (
    <SelectContainer>
      <StyledSelect onChange={handleRegionChange}>
        {REGIONS.map((region, index) => (
          <option key={index} value={region}>
            {region.replace(/\b\w/g, (char) => char.toUpperCase())}
          </option>
        ))}
      </StyledSelect>
      <StyledSelect onChange={handleCityChange}>
        {cityArr.map((cityObj, index) => (
          <option key={index} value={cityObj.city}>
            {cityObj.city}
          </option>
        ))}
      </StyledSelect>
    </SelectContainer>
  );
}


const StyledSelect = styled.select`
  border: none;
  padding: 2rem 1rem;
  width: 15rem;
  max-width: 15rem;
  font-size: 1.5rem;
  border-radius: .5rem;
  background-color: white;
  font-weight: 600;
  &:focus{
    outline:none;
  }
`

const SelectContainer = styled.div`
  display:inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 30%;
  margin-bottom: 4rem;
  margin-top: 4rem;
`
