import Link from 'next/link';
import { DropdownIcon, Item, MenuLink, MenuNote } from '@components/Header/HamburgerMenu/MenuItem/MenuItem.styles';

type MenuItemProps = {
    name: string;
    to?: string;
    note?: string;
    onClick?: () => void;
    isDropdown?: boolean;
};

const HamburgerMenuItem = ({ name, to, note, onClick, isDropdown }: MenuItemProps) => {
    return (
        <Item onClick={onClick}>
            {to && !isDropdown ? (
                <>
                    <Link href={to} passHref>
                        <MenuLink>
                            {name}
                            {note && (
                                <>
                                    <MenuNote>{note}</MenuNote>
                                </>
                            )}
                            {isDropdown && <DropdownIcon />}
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
                    {isDropdown && <DropdownIcon />}
                </MenuLink>
            )}
        </Item>
    );
};

export { HamburgerMenuItem };
