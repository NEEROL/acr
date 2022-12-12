import styled, { keyframes } from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  padding: 18px 143px;
  z-index: 900;

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background: #fff;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transform: translateY(-100%);
    transition: transform 250ms linear;

    ${({ isScroll }: { isScroll: boolean }) => isScroll && `transform: translateY(0);`}
  }

  @media screen and (max-width: 1810px) {
    padding: 28px 30px;
  }

  @media screen and (max-width: 1330px) {
    padding: 28px 10px;
  }

  @media screen and (max-width: 1260px) {
    padding: 28px 30px;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  justify-content: center;

  & .animated {
    z-index: 999;
    cursor: pointer;
    transform: scale(1);
    transition: transform 250ms linear;
    ${({ isScroll }: { isScroll: boolean }) => isScroll && `transform: scale(0.91);`}
  }
`;

export const RightContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  position: relative;
`;

const Pulse = keyframes`
	0% {
		box-shadow: 0 0 0 rgba(104, 188, 235, 1);
	}
	50% {
		box-shadow: 0 0 0 10px rgba(104, 188, 235, 0.5);
	}
	100% {
		box-shadow: 0 0 0 20px rgba(104, 188, 235, 0);
	}
`;

export const PulsingButton = styled.a`
  width: 232px;
  height: 54px;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  background: #68bceb;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 58px;
  color: #fff;
  animation: ${Pulse} 1.5s infinite linear;
  transform: scale(1);
  transition: transform 150ms, box-shadow 150ms;
  position: relative;
  margin: 0 38px 0 25px;

  @media screen and (min-width: 1080px) and (max-width: 1300px) {
    margin: 0 25px;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 5px 6px 15px rgba(0, 0, 0, 0.2);
  }

  & > span {
    position: absolute;
    top: 10px;
    right: 28px;
    font-weight: 700;
    font-size: 10px;
    color: #3b8ebc;
  }
`;

export const Buttons = styled.div`
  display: grid;
  grid-template-columns: 250px 250px;
  grid-gap: 25px;
`;

export const Button = styled.a`
  width: 232px;
  height: 54px;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  background: #173e7d;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 58px;
  color: #fff;
  white-space: nowrap;
  transition: transform 150ms, box-shadow 150ms;

  &:hover {
    transform: scale(1.05);
    box-shadow: 5px 6px 15px rgba(0, 0, 0, 0.2);
  }
`;

export const HamburgerIcon = styled.span`
  position: absolute;
  top: calc(50% - 3.5px);
  right: 0;
  background: rgba(23, 62, 125, 1);
  width: 30px;
  height: 5px;
  border-radius: 10px;
  z-index: 999999;
  transition: background 250ms linear;
  ${({ isClosed }: { isClosed: boolean }) => isClosed && `background: rgba(23, 62, 125, 0);`}

  transition: transform 150ms;

  &:hover {
    transform: scale(1.1);
  }

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    background: #173e7d;
    width: 30px;
    height: 5px;
    border-radius: 10px;
    transform-origin: center;
    transform: translateY(0px) rotate(0deg);
    transition: transform 250ms linear, background-color 250ms linear;
    ${({ isClosed }: { isClosed: boolean }) => isClosed && `background: #68bceb;`}
  }

  &::before {
    top: -10px;
    left: 0;
    ${({ isClosed }: { isClosed: boolean }) => isClosed && `transform: translateY(10px) rotate(-45deg);`}
  }

  &::after {
    bottom: -10px;
    left: 0;
    ${({ isClosed }: { isClosed: boolean }) => isClosed && `transform: translateY(-10px) rotate(45deg);`}
  }
`;
