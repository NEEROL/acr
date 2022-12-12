import {
  Background,
  Btn,
  Code,
  Content,
  Description,
  ErrorContainer,
  HealthyPlus,
  SubTitle,
} from "@sections/Error/Error.styles";
import Link from "next/link";

export const Error = () => {
  return (
    <ErrorContainer>
      <Background>
        <HealthyPlus data-aos="zoom-in-down" />
      </Background>
      <Content>
        <Code data-aos="flip-up">404</Code>
        <SubTitle data-aos="fade">Ojjj napotkałem malutki problem... </SubTitle>
        <Description data-aos="fade">
          Najprawdopodobniej strona którą próbujesz wyszukać jest już
          niedostępna lub nie znaleziono takiej w naszym systemie.
        </Description>
        <Link href="/" passHref>
          <Btn data-aos="flip-up">Strona główna</Btn>
        </Link>
      </Content>
    </ErrorContainer>
  );
};
