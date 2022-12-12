import styled from 'styled-components';

export const FAQSection = styled.section`
  scroll-margin-top: 100px;
  background: linear-gradient(180deg, #68bceb 0%, #173e7d 100%);
  min-height: 70.5vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  padding: 80px 0;
  position: relative;
  z-index: 10;

  @media screen and (max-width: 1550px) {
    grid-template-columns: 1fr;
  }

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 62%;
    left: -25%;
    width: 1080.33px;
    height: 351.3px;
    background: linear-gradient(90.09deg, #1d4886 -4.28%, #58a3d5 71.11%);
    border-radius: 200px;
    transform: rotate(-45.65deg);
    z-index: -1;

    @media screen and (max-width: 1550px) {
      top: 40%;
      left: -700px;
    }
  }
`;

export const LeftContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  flex-direction: column;

  @media screen and (max-width: 1550px) {
    width: 700px;
    align-items: center;
  }

  @media screen and (max-width: 760px) {
    padding: 0 30px;
    width: 100%;
  }
`;

export const LeftContent = styled.div`
  width: 70%;

  @media screen and (max-width: 1550px) {
    width: 100%;
    align-items: center;
  }
`;

export const Title = styled.h2`
  font-size: 40px;
  margin: 16px 0 20px 0;
  color: #fff;
`;

export const SupTitle = styled.h2`
  font-size: 18px;
  margin: 0;
  color: #fff;
`;

export const TagsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Tags = styled.p`
  text-align: center;
  padding: 0;
  color: #19447a;
  font-size: 14px;
  display: flex;
  width: 80%;
`;

export const RightContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 760px) {
    padding: 0 30px;
  }
`;

export const ImgContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const ImgBackground = styled.div`
  display: block;
  width: 364px;
  height: 420px;
  background: linear-gradient(0deg, #1d4886 34.29%, #58a3d5 80.71%);
  border-radius: 60px;
  position: absolute;
  bottom: 4px;
  left: 50%;
  transform: translateX(-50%);

  @media screen and (max-width: 530px) {
    width: 100%;
    height: 100%;
  }
`;

export const ImgSquare = styled.div`
  width: 760px;
  height: 181px;
  background: #0f2f60;
  border-radius: 100px 0 0 100px;
  position: absolute;
  right: 0;
  bottom: 4px;

  @media screen and (max-width: 1550px) {
    width: 70%;
    height: 40%;
  }

  @media screen and (max-width: 1375px) {
    width: 80%;
  }

  @media screen and (max-width: 760px) {
    width: 95%;
    right: -30px;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }

  @media screen and (max-width: 400px) {
    width: 110%;
  }
`;

export const ImgContent = styled.div`
  position: relative;

  @media screen and (max-width: 610px) {
    width: 70%;
  }
`;

export const Info = styled.p`
  font-size: 17px;
  color: #fff;
  text-align: center;
`;

export const WriteToUs = styled.a`
  text-decoration: none;
  background: #68bceb;
  border-radius: 50px;
  color: #fff;
  padding: 17px 80px;
  transition: transform 150ms, box-shadow 150ms;

  &:hover {
    transform: scale(1.05) !important;
    box-shadow: 5px 6px 15px rgba(0, 0, 0, 0.2);
  }

  @media screen and (max-width: 330px) {
    padding: 17px 0;
    width: 100%;
    text-align: center;
  }
`;

export const Call = styled.a`
  text-decoration: none;
  color: #68bceb;
  font-size: 14px;
  margin: 20px 0 0 0;

  &:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 330px) {
    width: 100%;
    text-align: center;
  }
`;

export const MoveDown = styled.button`
  text-decoration: none;
  width: 50px;
  height: 50px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  background: #68bceb;
  border-radius: 50px;
  border: 8px solid #fafafa;
  cursor: pointer;
  box-shadow: 5px 6px 15px rgba(0, 0, 0, 0);
  transition: transform 150ms, box-shadow 150ms;

  &:hover {
    transform: translate(-50%, -50%) scale(1.1) !important;
  }

  &::before,
  &::after {
    content: '';
    display: block;
    width: 12px;
    height: 2px;
    top: 50%;
    left: 50%;
    background: #fff;
  }

  &::before {
    transform: rotate(45deg) translate(2px, -50%);
  }

  &::after {
    transform: rotate(-45deg) translate(-2px, -50%);
  }

  &[data-aos='animated'] {
    transform: translate(-50%, -200%) scale(1.5);
    opacity: 0;
    transition-property: transform, opacity;

    &.aos-animate {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
  }
`;
