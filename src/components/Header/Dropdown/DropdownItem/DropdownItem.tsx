import {
  DropdownItemDisabled,
  DropdownItemFooter,
  StyledDropdownItem,
  StyledLink,
} from "@components/Header/Dropdown/DropdownItem/DropdownItem.styles";
import { DropdownProps } from "@constants/Navbar";
import React, { ReactNode, useCallback } from "react";
import Link from "next/link";

type DropdownItemElementProps = {
  children: ReactNode;
} & Pick<DropdownProps, "to" | "isDisabled">;

const DropdownItem = ({ name, note, to, isDisabled }: DropdownProps) => {
  const DropdownItemElement = useCallback(
    ({ children, to, isDisabled }: DropdownItemElementProps) => {
      if (isDisabled) {
        return <DropdownItemDisabled>{children}</DropdownItemDisabled>;
      } else if (to !== undefined) {
        return (
          <Link href={to} passHref>
            <StyledLink>
              <StyledDropdownItem>{children}</StyledDropdownItem>
            </StyledLink>
          </Link>
        );
      } else {
        return <StyledDropdownItem>{children}</StyledDropdownItem>;
      }
    },
    [to, isDisabled]
  );

  return (
    <DropdownItemElement to={to} isDisabled={isDisabled}>
      {name}
      {note && (
        <>
          <DropdownItemFooter>{note}</DropdownItemFooter>
        </>
      )}
    </DropdownItemElement>
  );
};

export { DropdownItem };
