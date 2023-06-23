import styled from 'styled-components'

export default function ModeChangeComponent(props:{
  markerOn: boolean;
  setMarkerOn:React.Dispatch<React.SetStateAction<boolean>>;
  displayAirports: boolean;
  setDisplayAirports: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const {markerOn, setMarkerOn, displayAirports, setDisplayAirports} = props;
  return (
    <SDiv>
      <SButton onClick={()=>setMarkerOn(!markerOn)}>
        Marker mode: {markerOn ? 'ON' : 'OFF'}
      </SButton>
      <SButton onClick={()=>setDisplayAirports(!displayAirports)}>
        Show Airports: {displayAirports ? 'ON' : 'OFF'}
      </SButton>
    </SDiv>
  )
}


const SDiv = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
`

const SButton = styled.button`
  padding: .5rem 1rem;
  border-radius: .5rem;
  border: none;
  background-color: white;
  width: 15rem;
`