import styled from 'styled-components';

type CardAttributes = {
  'data-aos': string;
};

export const StyledCard = styled.div<CardAttributes>`
  padding: 45px 42px 80px;
  background: #ffffff;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  min-height: 675px;
  position: relative;
  display: grid;
  grid-template-rows: auto 1fr auto;

  @media screen and (max-width: 1310px) {
    width: 700px;
  }

  @media screen and (max-width: 760px) {
    width: 100%;
  }
`;
export const Icon = styled.div`
  position: absolute;
  top: 40px;
  right: 90px;
  background: #f2f2f2;
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;

  @media screen and (max-width: 690px) {
    display: none;
  }
`;

export const CardSmallTitle = styled.h4`
  margin: 0;
  color: #68bceb;
  font-size: 18px;
  width: 400px;

  @media screen and (max-width: 645px) {
    width: 100%;
  }
`;

export const CardTitle = styled.h1`
  color: #021a42;
  font-size: 40px;
  margin: 20px 0;
  width: 500px;

  @media screen and (max-width: 645px) {
    width: 100%;
  }

  @media screen and (max-width: 460px) {
    font-size: 30px;
  }
`;

export const CardFooter = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 14px;

  @media screen and (max-width: 730px) {
    flex-direction: column;
  }

  &.center {
    justify-content: center;
  }
`;
