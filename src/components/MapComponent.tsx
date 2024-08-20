/* eslint-disable react-hooks/exhaustive-deps */
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
  background: #f7f7f7;
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
  background: #fff;
`;

const InfoWindowContent = styled.div`
  padding: 0.5rem;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;

  h5 {
    margin: 0;
    text-align: center;
  }
`;

interface MarkerType {
  name: string;
  position: google.maps.LatLngLiteral;
  marker?: google.maps.Marker;
}

const MapComponent: React.FC = () => {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [markersData, setMarkersData] = useState<MarkerType[]>([]);
  const [selectedPlace, setSelectedPlace] = useState<MarkerType | null>(null);
  const [infoWindow, setInfoWindow] = useState<google.maps.InfoWindow | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch('/data/markers.json')
      .then(response => response.json())
      .then(data => setMarkersData(data))
      .catch(error => console.error("Error loading markers:", error));
  }, []);

  useEffect(() => {
    if (mapRef.current && !map) {
      const newMap = new window.google.maps.Map(mapRef.current, {
        center: { lat: 22.1565, lng: -100.9855 },
        zoom: 12,
      });
      setMap(newMap);
      setInfoWindow(new window.google.maps.InfoWindow());
    }
  }, [map]);

  useEffect(() => {
    if (map && markersData.length > 0) {
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

        markerData.marker = marker;
      });
    }
  }, [map, markersData]);

  const handleMarkerClick = (markerData: MarkerType, marker: google.maps.Marker) => {
    setSelectedPlace(markerData);
    if (infoWindow) {
      const content = document.createElement('div');
      ReactDOM.render(
        <InfoWindowContent>
          <h5>Ubicación {markerData.name}</h5>
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
      if (selectedMarker.marker) {
        handleMarkerClick(selectedMarker, selectedMarker.marker);
      }
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
