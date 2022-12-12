import {
  Arrow,
  Background,
  Content,
  Description,
  FlagOfUkraine,
  HealthyPlus,
  Img,
  IntroContainer,
  MovingElement,
  SmallTitle,
  Square,
  Title,
  Wave
} from '@sections/Intro/Intro.styles';
import Image from 'next/image';
import { useCallback } from 'react';
import { Button } from '@components/Button/Button';

const Intro = () => {
  const scrollTo = useCallback(() => {
    document.getElementById('ForUkrainianCitizens')?.scrollIntoView({
      behavior: 'smooth'
    });
  }, []);

  return (
    <IntroContainer id="intro">
      <Background>
        <HealthyPlus data-aos="fade-right" />
        <Wave data-aos="fade-left" data-aos-delay={400} />
        <Img>
          <MovingElement data-aos="fade" data-aos-duration={2000} data-aos-delay="1000">
            <Image src="/assets/woman.png" alt="" layout="fill" priority={true} loading="eager" />
          </MovingElement>
        </Img>
        <Square data-aos="fade-left" data-aos-delay={800} />
      </Background>
      <Content data-aos="fade-right" data-aos-duration={2000}>
        <SmallTitle>Bezpłatna opieka medyczna NFZ</SmallTitle>
        <Title>Zadbaj o pełną profilaktykę w ACROMED</Title>
        <Description>
          Udzielamy świadczeń zdrowotnych służących przywracaniu, poprawie i zachowaniu zdrowia pacjentów w każdym
          wieku, w zakresie podstawowej i specjalistycznej opieki zdrowotnej.
        </Description>
        <Description>
          Placówka medyczna ACROMED powstała w odpowiedzi
          <br />
          na potrzeby mieszkańców na wysoki poziom i szeroki wachlarz usług opieki medycznej dla całej rodziny.
        </Description>
        {/*<Button onClick={scrollTo}>*/}
        {/*  <FlagOfUkraine />*/}
        {/*  Люди з України*/}
        {/*  <Arrow />*/}
        {/*</Button>*/}
        <Button onClick={scrollTo} className="large" leftIcon="/assets/FlagOfUkraine.png" rightIcon="/assets/arrow.svg">
          Люди з України
        </Button>
      </Content>
    </IntroContainer>
  );
};

export { Intro };
