import {
  DropdownContainer,
  DropdownList,
  DropdownIcon,
} from "@components/Header/Dropdown/Dropdown.styles";
import {
  Item,
  MenuLink,
  MenuNote,
} from "@components/Header/Navbar/MenuItem/MenuItem.styles";
import Link from "next/link";
import { DropdownProps, NavbarProps } from "@constants/Navbar";
import { DropdownItem } from "@components/Header/Dropdown/DropdownItem/DropdownItem";
import { useCallback, useEffect, useState } from "react";

const Dropdown = ({
  name,
  to,
  note,
  groups,
}: NavbarProps & { groups: Array<DropdownProps[]> }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLock, setIsLock] = useState(true);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    let cooldown: NodeJS.Timeout;
    if (!isOpen) cooldown = setTimeout(() => setIsLock(true), 300);
    else setIsLock(false);

    return () => {
      if (cooldown) clearTimeout(cooldown);
    };
  }, [isOpen]);

  return (
    <Item onMouseEnter={open} onMouseLeave={close}>
      {to === "#" ? (
        <>
          {name}{" "}
          <DropdownIcon className={isOpen ? "rotated" : ""}></DropdownIcon>
        </>
      ) : (
        <Link href={to} passHref>
          <MenuLink>
            {name}{" "}
            <DropdownIcon className={isOpen ? "rotated" : ""}></DropdownIcon>
          </MenuLink>
        </Link>
      )}
      {note != undefined ? <MenuNote>{note}</MenuNote> : null}
      <DropdownContainer
        className={`${isOpen ? "show" : ""} ${isLock ? "hidden" : ""}`}
      >
        {groups.map((group, i) => {
          return (
            <DropdownList key={i}>
              {group.map((item) => {
                const itemTo = item.to !== undefined ? item.to : undefined;
                return (
                  <DropdownItem
                    name={item.name}
                    to={itemTo}
                    note={item.note}
                    isDisabled={item.isDisabled}
                    key={item.name}
                  />
                );
              })}
            </DropdownList>
          );
        })}
      </DropdownContainer>
    </Item>
  );
};

export { Dropdown };
