import MapContainer from '../components/MapContainer';
import styled from 'styled-components';
import HeroPuntosRecarga from "../components/HeroPuntosRecarga"; 

const PageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  margin-top: 2rem;
`;

const Paragraph = styled.p`
  text-align: center;
  font-size: 0.875rem; /* Equivalente a text-sm */
  max-width: 36rem; /* Equivalente a max-w-2xl */
  margin-bottom: 2rem;
`;

const ListadoPuntos = () => {
  return (
    <>
      <HeroPuntosRecarga /> 
    <PageContainer>
      <Title>Listado de Puntos de Recarga</Title>
      <Paragraph>
       Aquí encontrarás los diferentes puntos de recarga disponibles que tenemos para ti.
      </Paragraph>
      <MapContainer />
    </PageContainer>
    </>
  );
};

export default ListadoPuntos;
