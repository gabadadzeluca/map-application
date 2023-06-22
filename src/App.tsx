import MapComponent from "./components/MapComponent/MapComponent";
import styled from "styled-components";

function App() {
  return (
    <SContainer>
      <MapComponent />
    </SContainer>
  );
}

export default App;

const SContainer = styled.div`
  width: 100vw;
  height: 100vh;
`
