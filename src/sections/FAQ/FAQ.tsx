import {
  Call,
  FAQSection,
  ImgBackground,
  ImgContainer,
  ImgContent,
  ImgSquare,
  Info,
  LeftContainer,
  LeftContent,
  MoveDown,
  RightContainer,
  SupTitle,
  Tags,
  TagsContainer,
  Title
} from '@sections/FAQ/FAQ.styles';
import { CollapsiblePanels } from '@components/CollapsiblePanels/CollapsiblePanels';
import CollapsiblePanelsContent from '@constants/CollapsiblePanels';
import Image from 'next/image';
import { useCallback, useRef } from 'react';
import { Button } from '@components/Button/Button';

const FAQ = () => {
  const section = useRef<HTMLDivElement>(null);

  const moveDown = useCallback(() => {
    section.current?.scrollIntoView({
      behavior: 'smooth'
    });
  }, []);

  return (
    <FAQSection id="faq" ref={section}>
      <MoveDown
        onClick={moveDown}
        aria-label="Przejdź niżej"
        data-aos="animated"
        data-aos-offset="-25"
        data-aos-duration={500}
      ></MoveDown>
      <LeftContainer>
        <LeftContent data-aos="fade-right">
          <SupTitle data-aos="fade-right">Najczęściej zadawane pytania</SupTitle>
          <Title data-aos="fade-right">Co warto wiedzieć?</Title>
          <CollapsiblePanels panels={CollapsiblePanelsContent} />
          <TagsContainer data-aos="fade">
            <Tags>
              Telekonsultacja · Medycyna rodzinna · Stomatologia * · Pediatria · Geriatra · Internista · Szczepienia ·
              Dietetyk · Spirometria Diabetolog · EKG · Położna · Badania laboratoryjne
            </Tags>
          </TagsContainer>
        </LeftContent>
      </LeftContainer>
      <RightContainer>
        <ImgContainer>
          <ImgContent>
            <ImgBackground data-aos="animated" data-aos-duration={2000} data-aos-offset="200" />
            <Image
              src="/assets/doctor.png"
              alt="Doktor"
              width="386px"
              height="472px"
              style={{ zIndex: '300' }}
              data-aos="fade"
              data-aos-offset="300"
            />
          </ImgContent>
          <ImgSquare data-aos="fade-left" data-aos-offset="100" />
        </ImgContainer>
        <Info data-aos="fade">
          Masz więcej pytań? Potrzebujesz więcej informacji?
          <br />
          Skontaktuj się z nami, a my odpowiemy na wszystkie Twoje pytania.
        </Info>
        <Button
          as="a"
          href="mailto:przychodnia@acromed.pl"
          bgColor="104, 188, 235"
          isPulsing={true}
          data-aos="fixFade"
          className="large"
        >
          Napisz do nas
        </Button>
        <Call href="tel:+48515782627" data-aos="fade">
          Zadzwoń
        </Call>
      </RightContainer>
    </FAQSection>
  );
};

export { FAQ };
