import styled from "styled-components";

export const Title = styled.h2`
  color: #68bceb;
  font-size: 18px;
  margin: 0;
  padding: 0;
  transition: color 250ms linear;
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f2f2f2;
  border-radius: 60px;

  @media screen and (max-width: 350px) {
    display: none;
  }
`;

export const PanelContainer = styled.div`
  width: 623px;
  display: grid;
  grid-template-columns: 70px 1fr;
  grid-template-rows: 1fr;
  gap: 37px;
  min-height: 153px;
  background: radial-gradient(
    162.09% 2058.57% at -24.16% 162.09%,
    #fff 0%,
    #fff 76.04%
  );
  border: 2px solid #f2f2f2;
  border-radius: 50px;
  padding: 0 45px;
  align-items: center;
  position: relative;
  color: #021a42;
  transition: color 250ms linear, background 250ms linear,
    transform 250ms linear, box-shadow 250ms linear;

  &:hover {
    color: #fff;
    background: radial-gradient(
      162.09% 2058.57% at -24.16% 162.09%,
      #173e7d 0%,
      #68bceb 76.04%
    );
    transform: scale(1.05) !important;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.05);
  }

  &:hover ${Title} {
    color: #fff;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
    padding: 20px 45px;
  }

  @media screen and (max-width: 400px) {
    padding: 20px 25px;
    gap: 20px;
  }

  @media screen and (max-width: 350px) {
    grid-template-columns: 1fr;
  }
`;

export const Description = styled.p`
  font-size: 17px;
  margin: 5px 0 0 0;
`;
