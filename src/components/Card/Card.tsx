import { CardFooter, CardSmallTitle, CardTitle, Icon, StyledCard } from './Card.styles';
import Image, { ImageProps } from 'next/image';
import { ReactNode } from 'react';

type CardProps = {
  icon?: ImageProps;
  supTitle: string;
  title: ReactNode;
  children?: ReactNode[] | ReactNode;
  footer?: ReactNode[] | ReactNode;
  footerCenter?: boolean;
};

export const Card = ({ icon, supTitle, title, children, footer, footerCenter }: CardProps) => {
  return (
    <StyledCard data-aos="fade-up">
      {icon && (
        <Icon>
          <Image {...icon} />
        </Icon>
      )}
      <div>
        <CardSmallTitle>{supTitle}</CardSmallTitle>
        <CardTitle>{title}</CardTitle>
      </div>
      <div>{children}</div>
      {footer && <CardFooter className={footerCenter ? 'center' : ''}>{footer}</CardFooter>}
    </StyledCard>
  );
};
