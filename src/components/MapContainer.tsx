import React from 'react';
import styled from 'styled-components';
import { Status, Wrapper } from '@googlemaps/react-wrapper';
import MapComponent from './MapComponent';

const Container = styled.div`
  width: 100%;
  min-height: calc(80vh - 3rem);
  display: flex;
  justify-content: center;
  align-items: stretch;
  font-family: 'Montserrat', sans-serif;
`;

const LargeDiv = styled.div`
  flex: 0 0 75%;
  max-width: 75%;
`;

const SmallDiv = styled.div`
  flex: 0 0 25%;
  max-width: 25%;
  background-color: var(--primary-color, #015319);
  padding-bottom: 3rem;
`;

const render = (status: Status) => (<h1>{status}</h1>);

const MapContainer: React.FC = () => {
  return (
    <Container>
      <LargeDiv>
        <Wrapper apiKey={"AIzaSyB_2eTPjgWn0q8a1FQ8tYXGYUCqSItCqI8 "} render={render}>
          <MapComponent />
        </Wrapper>
      </LargeDiv>
      <SmallDiv />
    </Container>
  );
};

export default MapContainer;
