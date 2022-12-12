import styled from 'styled-components';

export const DeclarationSection = styled.section`
  width: 100%;
  height: 100%;
  padding-bottom: 118px;
  display: flex;
  justify-content: center;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 6.77%, rgba(0, 0, 0, 0.026) 100%);
  position: relative;

  @media screen and (max-width: 1540px) {
    padding-top: 200px;
  }
`;

export const Content = styled.div`
  width: 1450px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 270px;

  @media screen and (max-width: 1540px) {
    width: 100%;
    padding: 0 30px;
  }
`;

export const SmallTitle = styled.h4`
  margin: 0;
  color: #68bceb;
  font-size: 18px;
  width: 400px;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  color: #021a42;
  font-size: 40px;
  margin: 20px 0;
  width: 560px;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const Description = styled.p`
  color: #021a42;
  margin: 0;
  width: 740px;
  font-size: 17px;

  &:not(:last-child) {
    margin-bottom: 18px;
  }

  @media screen and (max-width: 760px) {
    width: 100%;
  }
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: #68bceb;

  &:hover {
    text-decoration: underline;
  }
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  margin-top: 67px;

  @media screen and (max-width: 1310px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

export const Card = styled.div`
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

export const TextHighlighted = styled.span`
  padding: 4px 7px;
  background: #0061a3;
  border-radius: 10px;
  color: #fff;

  @media screen and (max-width: 585px) {
    padding: 0;
    background: none;
    color: #0061a3;
  }
`;

export const Text = styled.p`
  font-size: 17px;
  color: #021a42;
  margin-bottom: 15px;
  width: 100%;
`;

export const SmallText = styled.p`
  color: #021a42;
  font-size: 15px;
  margin-top: 10px;
`;

export const CardFooter = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 14px;

  @media screen and (max-width: 730px) {
    grid-template-columns: 1fr;
  }

  &.oneColumn {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

export const Btn = styled.a`
  text-decoration: none;
  width: 100%;
  height: 55px;
  background: #173e7d;
  border: 1px solid #173e7d;
  border-radius: 50px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  padding-right: 20px;
  transition: transform 150ms, box-shadow 150ms;

  &:hover {
    transform: scale(1.05);
    box-shadow: 5px 6px 15px rgba(0, 0, 0, 0.2);
  }

  &::before {
    content: url('/assets/btn-icon.svg');
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 19px;
    width: 25px;
    height: 25px;
    background: #68bceb;
    border-radius: 15px;
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }
`;

export const LargeBtn = styled(Btn)`
  width: 284px;
  height: 55px;

  padding-right: 0;

  &::before {
    display: none;
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

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -10;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const HealthyPlus = styled.div`
  width: 150px;
  height: 530px;
  position: absolute;
  bottom: 5%;
  left: 3%;

  &::before,
  &::after {
    content: '';
    display: block;
    background: #f2f2f2;
    border-radius: 140px;
    position: absolute;
  }

  &::before {
    width: 140px;
    height: 600px;
  }

  &::after {
    width: 140px;
    height: 600px;
    top: 0;
    transform: rotate(90deg);
  }

  @media screen and (max-width: 1810px) {
    transform: translate(-50%, 60px);
  }

  @media screen and (max-width: 1310px) {
    bottom: 32%;
  }

  @media screen and (max-width: 860px) {
    display: none;
  }
`;

import WaveSvg from '@assets/wave.svg';

export const Wave = styled(WaveSvg)`
  position: absolute;
  top: 0;
  right: 0;

  @media screen and (max-width: 1600px) {
    transform: translateX(30%);
  }

  @media screen and (max-width: 900px) {
    transform: translateX(60%);
  }

  @media screen and (max-width: 860px) {
    display: none;
  }
`;

export const Square = styled.div`
  width: 1500px;
  height: 350px;
  background: linear-gradient(89.93deg, #3a74ac 7.94%, #68bceb 91.4%);
  position: absolute;
  right: -400px;
  bottom: 250px;
  border-radius: 100px;
  transform: rotate(-45deg);

  @media screen and (max-width: 1310px) {
    display: none;
  }

  &[data-aos='animated'] {
    opacity: 0;
    transform: translateX(100%) rotate(-45deg);
    transition-property: transform, opacity;

    &.aos-animate {
      opacity: 1;
      transform: translateX(0) rotate(-45deg);
    }
  }
`;
