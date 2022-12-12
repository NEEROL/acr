import styled, { keyframes } from 'styled-components';

export const AboutUsSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 88px 0 48px;
  scroll-margin-top: 100px;
  position: relative;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 36.46%, rgba(0, 0, 0, 0.032) 100%);
`;

export const AboutUsContainer = styled.div`
  width: 1139px;

  @media screen and (max-width: 1139px) {
    padding: 0 75px;
  }

  @media screen and (max-width: 640px) {
    width: 100%;
    padding: 0 30px;
  }
`;

export const Title = styled.h2`
  font-size: 18px;
  color: #68bceb;
  margin: 0;
  text-align: center;

  @media screen and (max-width: 610px) {
    width: 100%;
  }
`;

export const SubTitle = styled.h2`
  color: #021a42;
  font-size: 40px;
  margin: 14px 0 21px;
  text-align: center;

  @media screen and (max-width: 640px) {
    width: 100%;
  }
`;

export const Description = styled.p`
  text-align: center;
  margin: 0 0 81px;

  @media screen and (max-width: 640px) {
    width: 100%;
  }
`;

export const LightBlue = styled.span`
  color: #68bceb;
`;

export const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;

  @media screen and (max-width: 1139px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

export const GoogleMapsLocation = styled.iframe`
  border: none;
  width: 580px;
  height: 330px;
  border-radius: 30px;

  @media screen and (max-width: 640px) {
    width: 100%;
  }
`;

export const City = styled.h2`
  margin: 0 0 20px;
  font-size: 40px;
  color: #021a42;
`;

export const ContactGrid = styled.div`
  margin-left: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    'medicalFacilityHeading medicalFacilityHeading'
    'address contact'
    'openingHoursHeading openingHoursHeading'
    'cabinet collectionpoint';
  color: #021a42;
  align-items: center;

  @media screen and (max-width: 1139px) {
    margin-left: 0;
  }

  @media screen and (max-width: 640px) {
    width: 100%;
    grid-template-columns: 1fr;
    grid-template-areas:
      'medicalFacilityHeading'
      'address'
      'contact'
      'openingHoursHeading'
      'cabinet'
      'collectionpoint';
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
`;

export const Heading = styled.h2`
  grid-column: 1 / span 2;
  margin: 0;
  color: #68bceb;
`;

export const MedicalFacilityHeading = styled(Heading)`
  grid-area: medicalFacilityHeading;
`;

export const OpeningHoursHeading = styled(Heading)`
  grid-area: openingHoursHeading;
`;

export const Email = styled.a`
  text-decoration: none;
  color: #021a42;
  display: block;

  &:hover {
    text-decoration: underline;
  }
`;

export const PhoneNumber = styled.a`
  text-decoration: none;
  color: #021a42;
  display: block;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 700;

  &:hover {
    text-decoration: underline;
  }
`;

const DescriptionContent = styled.p`
  color: #173e7d;
`;

export const CabinetContent = styled(DescriptionContent)`
  grid-area: cabinet;
`;

export const CollectionPointContent = styled(DescriptionContent)`
  grid-area: collectionpoint;
`;

export const ContactContent = styled(DescriptionContent)`
  grid-area: contact;
`;

export const Content = styled.div`
  @media screen and (max-width: 1139px) {
    width: 580px;
  }

  @media screen and (max-width: 640px) {
    width: 100%;
  }
`;

export const DarkBlue = styled.span`
  color: #021a42;
`;

export const Address = styled.address`
  font-style: normal;
  color: #021a42;
  grid-area: address;
`;

export const Buttons = styled.div`
  width: 100%;
  margin-top: 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 460px) {
    flex-direction: column;
    gap: 50px;
  }
`;

const Pulse = keyframes`
	0% {
		box-shadow: 0 0 0 rgba(23, 62, 125, 1);
	}
	50% {
		box-shadow: 0 0 0 5px rgba(23, 62, 125, 0.5);
	}
	100% {
		box-shadow: 0 0 0 15px rgba(23, 62, 125, 0);
	}
`;

export const PulsingButton = styled.a`
  text-decoration: none;
  background: #173e7d;
  color: #fff;
  padding: 16px 54px;
  font-size: 18px;
  border-radius: 58px;
  animation: ${Pulse} 1500ms infinite linear;
  transition: transform 150ms, box-shadow 150ms;

  &:hover {
    transform: scale(1.05);
    box-shadow: 5px 6px 15px rgba(0, 0, 0, 0.2);
  }
`;

export const SetRouteButton = styled.a`
  text-decoration: none;
  color: #68bceb;
  display: flex;
  align-items: center;
  position: relative;
  transition: transform 150ms;

  &:hover {
    transform: scale(1.05);
  }

  &::before {
    content: url('/assets/navigate.svg');
    display: block;
    top: 0;
    left: -5px;
    position: absolute;
    transform: translate(-100%, 20%);
  }
`;

export const Partners = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 46px;

  @media screen and (max-width: 370px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const HealthyPlus = styled.div`
  width: 429px;
  height: 456px;
  position: absolute;
  bottom: 0;
  right: 0;
  overflow-x: hidden;
  z-index: -1;

  &::before,
  &::after {
    content: '';
    display: block;
    background: #f2f2f2;
    border-radius: 140px 140px 0 0;
    position: absolute;
  }

  &::before {
    width: 120px;
    height: 450px;
    bottom: 0;
    left: 70%;
    transform: translateX(-70%);
  }

  &::after {
    width: 120px;
    height: 400px;
    top: 25%;
    transform: rotate(-90deg) translate(50%, -35%);
    right: 0;
  }

  @media screen and (max-width: 640px) {
    display: none;
  }
`;
