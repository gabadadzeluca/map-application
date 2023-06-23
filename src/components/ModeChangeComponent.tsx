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
      <SButton onClick={()=>setMarkerOn(!markerOn)} color='red'>
        Marker mode: {markerOn ? 'ON' : 'OFF'}
      </SButton>
      <SButton onClick={()=>setDisplayAirports(!displayAirports)} color='blue'>
        Show Airports: {displayAirports ? 'ON' : 'OFF'}
      </SButton>
    </SDiv>
  )
}


const SDiv = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 30%;
`

const SButton = styled.button<{color:string}>`
  padding: .5rem 1rem;
  border-radius: .5rem;
  border: none;
  background-color: white;
  width: 15rem;
  font-size: 2rem;
  &:hover{
    background-color: ${({color})=>color};
    color: white;
  }
`