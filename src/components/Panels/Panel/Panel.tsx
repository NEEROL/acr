import { Description, Icon, PanelContainer, Title } from '@components/Panels/Panel/Panel.styles';
import Image from 'next/image';
import { PanelContentProps } from '@constants/PanelsContent';

const Panel = ({ title, description, iconUrl }: PanelContentProps) => {
  return (
    <PanelContainer data-aos="fade-up">
      <Icon>
        <Image src={iconUrl} alt="" width="51px" height="65px" aria-label="" />
      </Icon>
      <div>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </div>
    </PanelContainer>
  );
};

export { Panel };
