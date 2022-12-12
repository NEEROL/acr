import { StyledList } from '@components/OrderList/OrderList.styles';
import { ReactNode, useCallback } from 'react';

type OrderListProps = {
  elements?: ReactNode[];
};

export const OrderList = ({ elements }: OrderListProps) => {
  const renderElements = useCallback(() => {
    return elements?.map((element, i) => <li key={i}>{element}</li>);
  }, [elements]);

  return <StyledList>{renderElements()}</StyledList>;
};
