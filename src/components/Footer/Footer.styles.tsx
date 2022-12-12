import styled from 'styled-components';

export const StyledFooter = styled.footer`
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
  padding: 100px 0 25px;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.1);
`;

export const FooterContainer = styled.div`
  width: 1200px;
  display: grid;
  gap: 20px 0;
  grid-template: 200px 100px / 3fr 3fr 4fr;
  padding: 0 20px;

  @media screen and (max-width: 1279px) {
    margin: 0 auto;
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
    grid-template: repeat(4, auto) / 1fr;
    text-align: center;
    white-space: nowrap;
    gap: 60px 0;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #021a42;
  transition: color 250ms;
  height: 100%;

  & > li:first-child {
    color: #68bceb;
  }

  & > li:not(:last-child) {
    margin-bottom: 25px;
    white-space: nowrap;
  }

  & > li:not(:first-child):hover {
    cursor: pointer;
    color: #173e7d;
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

export const ListItem = styled.li`
  & > li:first-child {
    color: #68bceb;
  }

  & > li:not(:last-child) {
    margin-bottom: 25px;
    white-space: nowrap;
  }

  & > li:not(:first-child):hover {
    cursor: pointer;
    color: #173e7d;
  }

  & > a {
    text-decoration: none;
    color: inherit;
  }
`;

export const ContactContainer = styled.div`
  margin-left: 10px;
  display: grid;
  grid-template-columns: 160px 1fr;
  grid-template-rows: 20px 100px 200px;
  gap: 17px 0;
  color: #021a42;

  @media screen and (max-width: 1000px) {
    margin-left: 0;
    grid-template-columns: initial;
    grid-template-rows: initial;
    gap: 15px 0;
  }
`;

export const Email = styled.a`
  text-decoration: none;
  color: #68bceb;
  display: block;
  text-align: center;

  &:hover {
    text-decoration: underline;
  }
`;

export const Header = styled.h3`
  margin: 0;
  font-size: 20px;
  grid-column: 1 / span 2;
  color: #68bceb;

  @media screen and (max-width: 1000px) {
    grid-column: initial;
  }
`;

export const PhoneNumber = styled.a`
  text-decoration: none;
  color: #021a42;
  display: block;
  text-align: center;

  &:hover {
    text-decoration: underline;
  }
`;

export const Creator = styled.p`
  grid-column: 1 / span 4;
  text-align: center;
  color: #20355f;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;

  @media screen and (max-width: 1000px) {
    grid-column: initial;
    white-space: normal;
  }
`;

export const LinkToCreator = styled.a`
  text-decoration: none;
  color: #68bceb;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const Rights = styled.span`
  color: #021a42;
`;

export const Contact = styled.p`
  margin: 0;
  line-height: 270%;
  font-size: 17px;

  @media screen and (max-width: 1000px) {
    line-height: 150%;
  }
`;

export const TransferContainer = styled.div`
  width: 100%;
  grid-column: 1 / span 2;
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-template-rows: 25px 25px;
  gap: 15px 0;

  @media screen and (max-width: 1000px) {
    grid-column: 1 / 1;
    grid-template-columns: initial;
    gap: 10px;
  }
`;

export const Company = styled.p`
  margin: 0;
  padding: 0;
  width: 100%;

  @media screen and (max-width: 1000px) {
    order: 1;
  }
`;

export const Bank = styled.p`
  margin: 0;
  padding: 0;
  width: 100%;
  text-align: center;

  @media screen and (max-width: 1000px) {
    order: 3;
  }
`;

export const Krs = styled.p`
  padding: 0;
  margin: 0;

  @media screen and (max-width: 1000px) {
    order: 2;
  }
`;

export const AccountNumber = styled.p`
  margin: 0;
  padding: 0;
  width: 100%;
  text-align: center;

  @media screen and (max-width: 1000px) {
    order: 4;
  }
`;
