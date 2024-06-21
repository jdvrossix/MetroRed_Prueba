/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import iconPR from '../assets/mark.png';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100%;
  padding: 1rem;
`;

const SelectContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1rem;
`;

const Select = styled.select`
  padding: 0.5rem 1rem;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fff;
  appearance: none;
  cursor: pointer;
  transition: border-color 0.3s ease;

  &:hover,
  &:focus {
    border-color: #555;
  }
`;

const MapContainer = styled.div`
  width: 100%;
  height: 70vh;
  max-width: 1200px;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const InfoWindowContent = styled.div`
  padding: 0.5rem;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  white-space: nowrap;
`;

interface MarkerType {
  name: string;
  position: google.maps.LatLngLiteral;
}

const markersData: MarkerType[] = [
  { name: "Punto 1", position: { lat: 22.1565, lng: -100.9855 } },
  { name: "Punto 2", position: { lat: 22.1575, lng: -100.9865 } },
  { name: "Punto 3", position: { lat: 22.1585, lng: -100.9845 } },
  { name: "Punto 4", position: { lat: 22.1555, lng: -100.9875 } },
];

const MapComponent: React.FC = () => {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [_activeMarker, setActiveMarker] = useState<google.maps.Marker | null>(null);
  const [selectedPlace, setSelectedPlace] = useState<MarkerType | null>(null);
  const [infoWindow, setInfoWindow] = useState<google.maps.InfoWindow | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mapRef.current && !map) {
      const newMap = new window.google.maps.Map(mapRef.current, {
        center: { lat: 22.1565, lng: -100.9855 },
        zoom: 14,
      });
      setMap(newMap);
      setInfoWindow(new window.google.maps.InfoWindow());
    }
  }, [map]);

  useEffect(() => {
    if (map) {
      markersData.forEach(markerData => {
        const marker = new window.google.maps.Marker({
          position: markerData.position,
          map: map,
          title: markerData.name,
          icon: {
            url: iconPR,
            scaledSize: new window.google.maps.Size(40, 40),
          },
        });

        marker.addListener('click', () => {
          handleMarkerClick(markerData, marker);
        });

        // Open InfoWindow on icon click
        marker.addListener('iconclick', () => {
          handleMarkerClick(markerData, marker);
        });
      });
    }
  }, [map]);

  const handleMarkerClick = (markerData: MarkerType, marker: google.maps.Marker) => {
    setSelectedPlace(markerData);
    setActiveMarker(marker);
    if (infoWindow && selectedPlace?.position) {
      const content = document.createElement('div');
      ReactDOM.render(
        <InfoWindowContent>
          <h5>{markerData.name}</h5>
        </InfoWindowContent>,
        content
      );
      infoWindow.setContent(content);
      infoWindow.open(map, marker);
    }
    if (map) {
      map.setCenter(markerData.position);
      map.setZoom(16);
    }
  };

  const handleMarkerSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedMarkerName = event.target.value;
    const selectedMarker = markersData.find(marker => marker.name === selectedMarkerName);

    if (selectedMarker && map) {
      map.setCenter(selectedMarker.position);
      map.setZoom(16);
      setSelectedPlace(selectedMarker);
    }
  };

  return (
    <Container>
      <SelectContainer>
        <Select value={selectedPlace ? selectedPlace.name : ""} onChange={handleMarkerSelect}>
          <option value="">Seleccionar Punto</option>
          {markersData.map((marker, index) => (
            <option key={index} value={marker.name}>
              {marker.name}
            </option>
          ))}
        </Select>
      </SelectContainer>
      <MapContainer ref={mapRef}></MapContainer>
    </Container>
  );
};

export default MapComponent;
