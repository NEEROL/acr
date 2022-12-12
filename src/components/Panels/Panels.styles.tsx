import styled from 'styled-components';

export const PanelsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px 130px;

  @media screen and (max-width: 1400px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;
