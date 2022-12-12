import styled from "styled-components";

export const ForUkrainianCitizensSection = styled.section`
  scroll-margin-top: 100px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 75px;
  background: #fafafa;
  position: relative;

  &::after {
    content: url("/assets/flag.svg");
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translate(10px, 50px);
  }

  @media screen and (max-width: 1500px) {
    &::after {
      transform: translate(100px, 50px);
    }
  }

  @media screen and (max-width: 1000px) {
    &::after {
      display: none;
    }
  }

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;

  @media screen and (max-width: 1000px) {
    justify-content: center;
  }

  &::before,
  &::after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    width: 70%;

    @media screen and (max-width: 1400px) {
      width: 65%;
    }

    @media screen and (max-width: 1200px) {
      width: 50%;
    }

    @media screen and (max-width: 1000px) {
      width: 50%;
    }
  }

  &::before {
    background: #00bbe0;
    top: 40px;
    height: calc(50% - 10px);
  }

  &::after {
    background: #fdd311;
    top: calc(50% + 10px);
    height: calc(50% - 10px);
  }

  & > span {
    z-index: 100;
  }
`;

export const RightContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 100;

  @media screen and (max-width: 1000px) {
    padding: 0 30px 50px;
  }
`;

export const Title = styled.h1`
  font-size: 40px;
  color: #021a42;
  margin: 0;
`;

export const SubTitle = styled.h2`
  color: #68bceb;
  font-size: 30px;
  margin: 5px 0 25px;
`;

export const DarkDescription = styled.p`
  color: #021a42;
  font-size: 20px;
  margin: 0;
`;

export const LightDescription = styled.p`
  color: #68bceb;
  font-size: 17px;
  margin-bottom: 37px;
`;

export const PhoneNumber = styled.a`
  width: 300px;
  text-decoration: none;
  background: #173e7d;
  border-radius: 50px;
  padding: 16px 73px 16px 52px;
  font-size: 20px;
  color: #fff;
  font-family: "Poppins", sans-serif;
  display: block;
  position: relative;
  transition: transform 150ms, box-shadow 150ms;

  &:hover {
    transform: scale(1.05);
    box-shadow: 5px 6px 15px rgba(0, 0, 0, 0.2);
  }

  @media screen and (max-width: 390px) {
    width: 100%;
    padding: 16px 53px 16px 17px;
  }
`;

export const Earphone = styled.i`
  width: 32px;
  height: 32px;
  border-radius: 32px;
  background: #68bceb;
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);

  &::after {
    content: url("/assets/earphone.svg");
    display: block;
    width: 32px;
    height: 32px;
    top: 50%;
    left: 50%;
    transform: translate(25%, 5%);
  }
`;
