import styled from "styled-components";

export const StyledDropdownItem = styled.li`
  white-space: nowrap;
  font-weight: 500;
  background: rgba(244, 244, 244, 0);
  color: #021a42;
  border-radius: 5px;
  padding: 5px 7px;
  cursor: pointer;
  transition: background-color 250ms;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  &:hover {
    background: rgba(244, 244, 244, 1);
  }
`;

export const DropdownItemDisabled = styled(StyledDropdownItem)`
  color: #c9c9c9;
  cursor: not-allowed;
`;

export const DropdownItemFooter = styled.span`
  display: block;
  color: #cecece;
  font-weight: 500;
  font-size: 10px;

  &::before {
    content: " *";
    font-weight: bold;
    color: #ee002b;
  }
`;

export const StyledLink = styled.a`
  text-decoration: none;
`;
