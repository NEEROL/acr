import {
  Background,
  Cards,
  Content,
  DeclarationSection,
  Description,
  HealthyPlus,
  SmallTitle,
  Square,
  Title,
  Wave
} from '@sections/Declaration/Declaration.styles';
import { OrderList } from '@components/OrderList/OrderList';
import { Button } from '@components/Button/Button';
import { Card } from '@components/Card/Card';

const Offers = () => {
  return (
    <DeclarationSection>
      <Background>
        <HealthyPlus data-aos="fade-right" />
        <Wave data-aos="fade-left" data-aos-delay={400} />
        <Square data-aos="animated" data-aos-delay={800} />
      </Background>
      <Content>
        <div data-aos="fade-right">
          <SmallTitle>Specjalistyczna przychodnia medyczna blisko Ciebie</SmallTitle>
          <Title>Świadczymy usługi medyczne</Title>
          <Description>
            Placówka powstała z myślą o zapewnieniu Państwu bezpieczeństwa zdrowotnego oraz wysokiego komfortu życia.
          </Description>
        </div>
        <Cards>
          <Card
            icon={{
              src: '/assets/cash.svg',
              alt: '',
              width: '44px',
              height: '63px'
            }}
            supTitle="Kompleksowe usługi w ramach ubezpieczenia oraz kontraktu z NFZ"
            title="Bezpłatnie"
            footer={
              <Button as="a" href="tel:+48515782627" className="large">
                Umów wizytę
              </Button>
            }
            footerCenter={true}
          >
            <OrderList
              elements={[
                'Lekarza POZ - konsultacje stacjonarne, wizyty domowe, teleporady',
                'Pielęgniarki POZ - porady, iniekcje, pobrania, diagnostyka',
                'Badania laboratoryjne oraz RR, EKG, Spirometrie, RTG, USG',
                'Program szczepień dzieci i dorosłych - obowiązkowe oraz dodatkowe',
                'Profilaktyka chorób układu krążenia - CHUK',
                'Profilaktyka gruźlicy',
                'Program skoordynowanej opieki nad ciężarnej - KOC'
              ]}
            />
          </Card>
          <Card
            icon={{
              src: '/assets/crossdolar.svg',
              alt: '',
              width: '44px',
              height: '63px'
            }}
            supTitle="Opieka specjalistyczna dzieci i dorosłych najwyższej klasy kadry lekarskiej"
            title="Komercyjne"
            footer={
              <Button as="a" href="tel:+48515782627" className="large">
                Umów wizytę
              </Button>
            }
            footerCenter={true}
          >
            <OrderList
              elements={[
                'Kardiologii',
                'Endokrynologii',
                'Diabetologii oraz chorób metabolicznych',
                'Pediatrii i alergologii',
                'Interny',
                'Geriatrii',
                'Gastroenterologii',
                'Neurologii oraz neurochirurgi',
                'Psychiatrii',
                'Dodatkowo zapraszamy na wizyty do: dietetyka i logopedy'
              ]}
            />
          </Card>
        </Cards>
      </Content>
    </DeclarationSection>
  );
};

export { Offers };
