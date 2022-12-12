import styled from "styled-components";

export const ErrorContainer = styled.section`
  height: 92.5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 6.77%,
    rgba(0, 0, 0, 0.026) 100%
  );
  position: relative;

  @media screen and (max-width: 400px) {
    margin-top: 50px;
  }

  @media screen and (max-width: 300px) {
    margin-top: 100px;
  }
`;

export const Content = styled.div`
  width: 683px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 1400px) {
    width: 90%;
  }
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
    content: "";
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

export const Code = styled.h1`
  margin: 0;
  font-size: 200px;
  color: #68bceb;

  @media screen and (max-width: 450px) {
    font-size: 100px;
  }
`;

export const SubTitle = styled.h2`
  text-align: center;
  font-size: 40px;
  color: #021a42;
  margin: 0 0 15px;
`;

export const Description = styled.p`
  text-align: center;
`;

export const Btn = styled.a`
  text-decoration: none;
  width: 284px;
  height: 55px;
  background: #68bceb;
  border-radius: 50px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  transition: transform 150ms, box-shadow 150ms;

  &:hover {
    transform: scale(1.05);
    box-shadow: 5px 6px 15px rgba(0, 0, 0, 0.2);
  }
`;
