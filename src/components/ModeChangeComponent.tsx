import styled from 'styled-components'

export default function ModeChangeComponent(props:{
  markerOn: boolean;
  setMarkerOn:React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const {markerOn, setMarkerOn} = props;
  return (
    <SDiv>
      <SButton onClick={()=>setMarkerOn(!markerOn)}>
        Marker mode: {markerOn ? 'ON' : 'OFF'}
      </SButton>
    </SDiv>
  )
}


const SDiv = styled.div`
`

const SButton = styled.button`
  
`