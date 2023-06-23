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
    <div>
      <select onChange={handleRegionChange}>
        {REGIONS.map((region, index) => (
          <option key={index} value={region}>
            {region.replace(/\b\w/g, (char) => char.toUpperCase())}
          </option>
        ))}
      </select>
      <select onChange={handleCityChange}>
        {cityArr.map((cityObj, index) => (
          <option key={index} value={cityObj.city}>
            {cityObj.city}
          </option>
        ))}
      </select>
    </div>
  );
}
