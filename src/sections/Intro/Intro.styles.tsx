import styled, { keyframes } from 'styled-components';
import WaveSvg from '@assets/wave.svg';

export const IntroContainer = styled.section`
  height: 92.5vh;
  display: flex;
  justify-content: center;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 6.77%, rgba(0, 0, 0, 0.026) 100%);
  position: relative;

  @media screen and (max-width: 400px) {
    margin-top: 50px;
  }

  @media screen and (max-width: 300px) {
    margin-top: 100px;
  }
`;

export const Content = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 1400px) {
    width: 90%;
  }
`;

export const SmallTitle = styled.h2`
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
  width: 470px;

  &:not(:last-child) {
    margin-bottom: 18px;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  width: 284px;
  border: none;
  text-decoration: none;
  font-size: 17px;
  font-weight: bold;
  padding: 18px 20px;
  background: #173e7d;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  color: #fff;
  position: relative;
  margin-top: 30px;
  transition: transform 150ms, box-shadow 150ms;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    box-shadow: 5px 6px 15px rgba(0, 0, 0, 0.2);
  }

  @media screen and (max-width: 350px) {
    width: 100%;
  }
`;

export const FlagOfUkraine = styled.i`
  content: url('/assets/FlagOfUkraine.png');
  margin-right: 24px;
`;

export const Arrow = styled.i`
  content: url('/assets/arrow.svg');
  margin-left: 19px;
`;

export const Background = styled.div`
  position: absolute;
  z-index: -10;
  width: 100%;
  height: 100%;
`;

export const HealthyPlus = styled.div`
  width: 150px;
  height: 430px;
  position: absolute;
  bottom: 30px;
  left: 75px;

  &::before,
  &::after {
    content: '';
    display: block;
    background: #f2f2f2;
    border-radius: 140px 140px 0 0;
    position: absolute;
  }

  &::before {
    width: 140px;
    height: 460px;
  }

  &::after {
    width: 140px;
    height: 590px;
    transform: rotate(90deg);
  }

  @media screen and (max-width: 1400px) {
    transform: translate(-50%, 60px);
  } ;
`;

export const Wave = styled(WaveSvg)`
  position: absolute;
  right: 0;

  @media screen and (max-width: 1600px) {
    transform: translateX(30%);
  }

  @media screen and (max-width: 900px) {
    transform: translateX(60%);
  }

  @media screen and (max-width: 720px) {
    display: none;
  }
`;

export const Square = styled.div`
  width: 650px;
  height: 650px;
  clip-path: polygon(100% 0, 100% 65%, 65% 100%, 0 100%);
  background: linear-gradient(89.93deg, #3a74ac 7.94%, #68bceb 91.4%);
  position: absolute;
  right: 0;
  bottom: 0;

  @media screen and (max-width: 1600px) {
    width: 550px;
    height: 550px;
  }

  @media screen and (max-width: 1300px) {
    width: 450px;
    height: 450px;
  }

  @media screen and (max-width: 1050px) {
    display: none;
  }
`;

const Moving = keyframes`
	0% {
    transform: translate(0, 0);
	}
	
	10% {
    transform: translate(1px, 5px);
	}
	
	20% {
    transform: translate(2px, 3px);
	}
	
	30% {
    transform: translate(-6px, 1px);
	}
	
	40% {
    transform: translate(1px, 3px);
	}
	
	50% {
		transform: translate(-7px, -5px);
	}
	
	60% {
		transform: translate(1px, -6px);
	}
	
	70% {
		transform: translate(-5px, 4px);
	}
	
	80% {
		transform: translate(-2px, 1px);
	}
	
	90% {
		transform: translate(8px, 0px);
	}
	
	100% {
		transform: translate(7px, 9px);
	}
`;

export const MovingElement = styled.div`
  animation: ${Moving} 30s infinite linear alternate;
  width: 100%;
  height: 100%;
`;

export const Img = styled.div`
  position: absolute;
  top: 60%;
  right: 200px;
  transform: translateY(-60%);
  width: 766px;
  height: 638px;

  @media screen and (max-width: 1600px) {
    transform: translateY(-60%) scale(0.7);
    right: 25px;
  }

  @media screen and (max-width: 1300px) {
    transform: translateY(-60%) scale(0.6);
    right: -100px;
  }

  @media screen and (max-width: 1050px) {
    display: none;
  }
`;
