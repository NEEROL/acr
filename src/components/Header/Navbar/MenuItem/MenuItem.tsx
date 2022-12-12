import Link from "next/link";
import {
  Item,
  MenuLink,
  MenuNote,
} from "@components/Header/Navbar/MenuItem/MenuItem.styles";
import { ReactNode, useCallback, useMemo } from "react";

type MenuItemProps = {
  name: string;
  to?: string;
  note?: string;
  children?: ReactNode;
};

const MenuItem = ({ name, to, note, children }: MenuItemProps) => {
  const isForeignUrl = useMemo(() => {
    if (to === undefined) return false;
    return to.startsWith("https://") || to.startsWith("http://");
  }, [to]);

  return (
    <Item>
      {to ? (
        <>
          <Link href={to} passHref>
            <MenuLink target={isForeignUrl ? "_blank" : "_self"}>
              {name}
              {note && (
                <>
                  <MenuNote>{note}</MenuNote>
                </>
              )}
            </MenuLink>
          </Link>
        </>
      ) : (
        <MenuLink>
          {name}
          {note && (
            <>
              <MenuNote>{note}</MenuNote>
            </>
          )}
        </MenuLink>
      )}
      {children}
    </Item>
  );
};

export { MenuItem };
