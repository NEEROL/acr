import {
  Background,
  Btn,
  Cards,
  CardSmallTitle,
  CardTitle,
  Content,
  DeclarationSection,
  Description,
  HealthyPlus,
  Icon,
  LargeBtn,
  StyledLink,
  SmallText,
  SmallTitle,
  Square,
  Text,
  TextHighlighted,
  Title,
  Wave
} from '@sections/Declaration/Declaration.styles';
import Link from 'next/link';
import Image from 'next/image';
import { OrderList } from '@components/OrderList/OrderList';
import { Card } from '@components/Card/Card';
import { Button } from '@components/Button/Button';

const Declaration = () => {
  return (
    <DeclarationSection>
      <Background>
        <HealthyPlus data-aos="fade-right" />
        <Wave data-aos="fade-left" data-aos-delay={400} />
        <Square data-aos="animated" data-aos-delay={800} />
      </Background>
      <Content>
        <div data-aos="fade-right">
          <SmallTitle>Złóż deklarację przychodni</SmallTitle>
          <Title>Dołącz do pacjentów ACROMED</Title>
          <Description>
            Możesz skorzystać z jednego z dwóch sposobów złożenia deklaracji, w zależności od tego czy posiadasz już
            Internetowe Konto Pacjenta (IKP) na stronie{' '}
            <StyledLink href="https://pacjent.gov.pl/" target="_blank" rel="noreferrer">
              pacjent.gov.pl.
            </StyledLink>
            <br />
            Jeżeli jeszcze nie posiadasz konta zachęcamy do założenia go.
          </Description>
        </div>
        <Cards>
          <Card
            icon={{
              src: '/assets/note.svg',
              alt: '',
              width: '62px',
              height: '62px'
            }}
            supTitle="Rejestracja przez stronę rządową"
            title={
              <>
                Rejestracja pacjenta
                <br />
                na stronie pacjent.gov.pl
              </>
            }
            footer={
              <LargeBtn href="https://pacjent.gov.pl/" rel="noreferrer">
                Zarejestruj się
              </LargeBtn>
            }
          >
            <OrderList
              elements={[
                <>
                  Przejdź na stronę{' '}
                  <StyledLink href="https://pacjent.gov.pl/" target="_blank" rel="noreferrer">
                    pacjent.gov.pl
                  </StyledLink>{' '}
                  oraz <TextHighlighted>Zaloguj się</TextHighlighted>.
                </>,
                <>
                  Wejdź w zakładkę Moje konto, przewiń do sekcji Twoja Podstawowa Opieka Zdrowotna (POZ), a w sekcji
                  Lekarz wybierz <TextHighlighted>Nowa deklaracja</TextHighlighted>.
                </>,
                <>
                  Wprowadź swoje dane, wskaż adres naszej przychodni, oraz wybierz kadrę medyczną. Adres naszej
                  przychodni znajdziesz w zakładce{' '}
                  <Link href={'/#aboutus'} passHref>
                    <StyledLink>Kontakt</StyledLink>
                  </Link>
                  .
                </>,
                <>
                  Następnie wybierz <TextHighlighted>Podpisz deklarację</TextHighlighted>.
                </>
              ]}
            ></OrderList>
            <Text>(Powtórz czynność wybierając pielęgniarkę i dodatkowo, tylko w przypadku kobiet - położną)</Text>
            <Text>W ciągu 24h wyślemy Ci e-mailem potwierdzenie zapisania się do naszej przychodni. </Text>
          </Card>
          <Card
            icon={{
              src: '/assets/hands.svg',
              alt: '',
              width: '65px',
              height: '58px'
            }}
            supTitle="Rejestracja przez stronę rządową"
            title={
              <>
                Rejestracja pacjenta
                <br />
                na stronie pacjent.gov.pl
              </>
            }
            footer={
              <>
                <Button
                  as="a"
                  href="/declarations/deklaracja-lekarz.pdf"
                  target="_blank"
                  download
                  rightIcon="/assets/btn-icon.svg"
                >
                  Lekarz POZ
                </Button>
                <Button
                  as="a"
                  href="/declarations/deklaracja-pielegniarka.pdf"
                  target="_blank"
                  download
                  rightIcon="/assets/btn-icon.svg"
                >
                  Pielęgniarka
                </Button>
                <Button
                  as="a"
                  href="/declarations/deklaracja-polozna.pdf"
                  target="_blank"
                  download
                  rightIcon="/assets/btn-icon.svg"
                >
                  Położna
                </Button>
              </>
            }
            footerCenter={true}
          >
            <Text>
              Jeżeli nie masz Internetowego Konta Pacjetna (IKP), możesz pobrać deklaracje z plików poniżej, wypełnić je
              i wysłać na naszego maila{' '}
              <StyledLink href="mailto:przychodnia@acromed.pl">przychodnia@acromed.pl</StyledLink>.
            </Text>
            <Text>
              Dodatkowo, żeby zacząć korzystać z darmowej przychodni jak najszybciej wyślij nam deklarację pocztą lub
              zadzwoń do nas i umów się na odbiór Twojej deklaracji.
            </Text>
            <Text>
              Deklaracje możesz również wydrukować, wypełnić i złożyć osobiście, w placówce. Nie musisz się wcześniej
              umawiać, wszystkie formalności załatwisz w recepcji, bez kolejek.
            </Text>
            <SmallText>
              (Pobierz pliki wybierając pielęgniarkę lub lekarza, a dodatkowo tylko w przypadku kobiet - położną)
            </SmallText>
          </Card>
        </Cards>
      </Content>
    </DeclarationSection>
  );
};

export { Declaration };
