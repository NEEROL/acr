import {
  ContactContainer,
  Contact,
  Creator,
  Rights,
  Email,
  FooterContainer,
  Header,
  List,
  PhoneNumber,
  StyledFooter,
  LinkToCreator,
  ListItem,
  TransferContainer,
  Company,
  AccountNumber,
  Bank,
  Krs
} from '@components/Footer/Footer.styles';
import Link from 'next/link';

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContainer data-aos="fade" data-aos-offset="100">
        <List>
          <ListItem>ACROMED</ListItem>
          <ListItem>
            <Link href="/deklaracja">Złóż deklarację</Link>
          </ListItem>
          <ListItem>
            <a href="tel:+48515782627">Umów teleporadę</a>
          </ListItem>
          <ListItem>
            <Link href="/#aboutus">Kontakt</Link>
          </ListItem>
        </List>
        <List>
          <ListItem>DLA PACJENTA</ListItem>
          <ListItem>
            <Link href="/#faq">Pytania</Link>
          </ListItem>
          <ListItem>
            <a href="https://acrodent.pl/" rel="noreferrer" target="_blank">
              Stomatologia
            </a>
          </ListItem>
          <ListItem>
            <Link href="/oferty/chirurgia-plastyczna">Chirurgia plastyczna</Link>
          </ListItem>
        </List>
        <ContactContainer>
          <Header>KONTAKT</Header>
          <Contact>
            ul. Białej Floty 6/1,
            <br />
            02-654 Warszawa
          </Contact>
          <Contact>
            <Email href="mailto:przychodnia@acromed.pl">przychodnia@acromed.pl</Email>
            <PhoneNumber href="tel:+48515782627">+48 515 782 627</PhoneNumber>
          </Contact>
          <TransferContainer>
            <Company>Acromed Sp. z o.o.</Company>
            <Bank>Nest Bank</Bank>
            <Krs>KRS: 0000918520</Krs>
            <AccountNumber>43 2530 0008 2060 1071 0080 0001</AccountNumber>
          </TransferContainer>
        </ContactContainer>
        <Creator>
          @{' '}
          <LinkToCreator href="https://reccly.pl/" target="_blank" rel="noreferrer">
            reccly.pl
          </LinkToCreator>{' '}
          2022
          <br />
          <Rights>ALL RIGHT RESERVED</Rights>
        </Creator>
      </FooterContainer>
    </StyledFooter>
  );
};

export { Footer };
