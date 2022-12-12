import {
  AboutUsContainer,
  AboutUsSection,
  ContactContainer,
  ContactGrid,
  Description,
  Email,
  GoogleMapsLocation,
  LightBlue,
  PhoneNumber,
  SubTitle,
  Title,
  City,
  DarkBlue,
  Address,
  Buttons,
  SetRouteButton,
  Partners,
  HealthyPlus,
  Content,
  MedicalFacilityHeading,
  OpeningHoursHeading,
  CabinetContent,
  CollectionPointContent,
  ContactContent
} from '@sections/AboutUs/AboutUs.styles';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@components/Button/Button';

const AboutUs = () => {
  return (
    <AboutUsSection id="aboutus">
      <HealthyPlus />
      <AboutUsContainer>
        <Title data-aos="zoom-out-up" data-aos-offset="200">
          Bezpłatny i fachowy kontakt
        </Title>
        <SubTitle data-aos="zoom-out-up" data-aos-offset="200">
          Twoje zdrowie jest dla nas priorytetem
        </SubTitle>
        <Description data-aos="zoom-out-up" data-aos-offset="200">
          Odwiedź przychodnię ACROMED i zadbaj o swoje zdrowiej już dzisiaj. Najważniejszy jest dla nas pacjent i jego
          zdrowie, o które zadbamy zarówno przez leczenie jak i odpowiednią profilaktykę chorób. Nasi pacjenci mogą
          skorzystać z szerokiego zakresu badań w ramach świadczeń NFZ. Zależy nam na wsparciu w budowaniu nawyków
          żywieniowych, leczeniu, dzięki którym zadbają o zdrowie. Dzięki odpowiedniej optymalizacji pacjent ma szybki
          dostęp do naszej przychodni. Wystarczy, że klient przyjdzie do naszej poradni po wcześniejszej konsultacji.
          Nasza wykwalifikowana kadra bazuje na doświadczeniach wypracowanych latami. Dzięki umowie z NFZ możemy
          dostarczyć najwyższej jakości <LightBlue>BEZPŁATNE</LightBlue> usługi medyczne stacjonarnie oraz
          telefonicznie. ✋🏽 <LightBlue>STOP DŁUGIM KOLEJKOM</LightBlue>
        </Description>
        <ContactContainer>
          <Content data-aos="fade-right" data-aos-offset="250">
            <GoogleMapsLocation
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13834.14002355123!2d20.98232754793769!3d52.196987291731446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4719332d0f2d264d%3A0x218fed7852356da8!2sAcromed%20%7C%20Specjalistyczna%20Przychodnia%20Rodzinna%20%7C%20NFZ%20i%20komercja!5e0!3m2!1sen!2sus!4v1655537345812!5m2!1sen!2sus"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
            ></GoogleMapsLocation>
            <Partners data-aos="fade">
              <Image src="/assets/signal-iduna.png" alt="Signal Iduna" width="163px" height="28px" quality={100} />
              <Image src="/assets/inter.png" alt="Inter Ubezpieczenia" width="100px" height="43px" />
            </Partners>
          </Content>
          <Content data-aos="fade-left" data-aos-offset="250">
            <City>Warszawa</City>
            <ContactGrid>
              <MedicalFacilityHeading>Placówka</MedicalFacilityHeading>
              <Address>
                ul. Białej Floty 6/1
                <br />
                02-654 Warszawa
              </Address>
              <ContactContent>
                <Email href="mailto:przychodnia@acromed.pl">przychodnia@acromed.pl</Email>
                <PhoneNumber href="tel:+48515782627">+48 515 782 627</PhoneNumber>
              </ContactContent>
              <OpeningHoursHeading>Godziny otwarcia</OpeningHoursHeading>
              <CabinetContent>
                Przechodnia
                <br />
                <DarkBlue>pon-pt 8:00 - 18:00</DarkBlue>
              </CabinetContent>
              <CollectionPointContent>
                Punkt pobrań
                <br />
                <DarkBlue>pon-pt - 18:00</DarkBlue>
              </CollectionPointContent>
            </ContactGrid>
            <Buttons>
              <Link href="/deklaracja" passHref>
                <Button isPulsing={true} className="large">
                  Złóż deklarację
                </Button>
              </Link>
              <SetRouteButton href="https://goo.gl/maps/BtzDhhmsdPYAxxhy5" target="_blank">
                Wyznacz trasę
              </SetRouteButton>
            </Buttons>
          </Content>
        </ContactContainer>
      </AboutUsContainer>
    </AboutUsSection>
  );
};

export { AboutUs };
