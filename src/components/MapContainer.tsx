import React from 'react';
import styled from 'styled-components';
import { Status, Wrapper } from '@googlemaps/react-wrapper';
import MapComponent from './MapComponent';


const Container = styled.div`
  width: 100%;
  min-height: calc(80vh - 2rem);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
  margin-bottom: 3rem; 
`;

const MapWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1200px;
  max-height: 800px;
  flex-grow: 1;
`;

const render = (status: Status) => (<h1>{status}</h1>);

const MapContainer: React.FC = () => {
  return (
    <Container>
      <MapWrapper>
        <Wrapper apiKey={"AIzaSyALa6WflYpo5Sa_N3ocYqeCaP66A8h9ZnE"} render={render}>
          <MapComponent />
        </Wrapper>
      </MapWrapper>
    </Container>
  );
};

export default MapContainer;
