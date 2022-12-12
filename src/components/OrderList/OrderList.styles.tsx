import styled from 'styled-components';

export const StyledList = styled.ol`
  padding-left: 20px;
  list-style: none;
  counter-reset: steps;
  margin: 12px 0 27px;

  @media screen and (max-width: 645px) {
    width: 100%;
    padding-left: 0;
  }

  & > li {
    counter-increment: steps;
    font-size: 17px;
    width: 100%;

    @media screen and (max-width: 610px) {
      white-space: break-spaces;
    }

    &::before {
      content: counter(steps) '. ';
      font-size: 25px;
      color: #68bceb;
    }

    &:not(:last-child) {
      margin-bottom: 5px;
    }
  }
`;
