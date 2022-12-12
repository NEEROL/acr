import {
    DarkDescription,
    Earphone,
    ForUkrainianCitizensSection,
    LeftContainer,
    LightDescription,
    PhoneNumber,
    RightContainer,
    SubTitle,
    Title
} from '@sections/ForUkrainianCitizens/ForUkrainianCitizens.styles';
import Image from 'next/image';

const ForUkrainianCitizens = () => {
    return (
        <ForUkrainianCitizensSection id="ForUkrainianCitizens">
            <LeftContainer data-aos="fade-right" data-duration={1000} data-aos-offset="300">
                <Image src="/assets/ukrainian-citizen.png" alt="Ukrainian Citizen" width="479px" height="508px" />
            </LeftContainer>
            <RightContainer data-aos="fade-left" data-duration={1000} data-aos-offset="300">
                <Title>Люди з України</Title>
                <SubTitle>Obywatele Ukrainy</SubTitle>
                <DarkDescription>
                    Людям, які приїжджають до Польщі з України, пропонують безкоштовну медичну допомогу у Варшаві.
                </DarkDescription>
                <LightDescription>
                    Osobom przybywającym do Polski z Ukrainy oferujemy bezpłatną pomoc medyczną w Warszawie.
                </LightDescription>
                <PhoneNumber href="tel:+48515782627">
                    +48 515 782 627 <Earphone />
                </PhoneNumber>
            </RightContainer>
        </ForUkrainianCitizensSection>
    );
};

export { ForUkrainianCitizens };
