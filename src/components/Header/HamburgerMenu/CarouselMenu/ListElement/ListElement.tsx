import {
    StyledLink,
    StyledListElement,
    StyledListElementDisabled
} from '@components/Header/HamburgerMenu/CarouselMenu/ListElement/ListElement.styles';
import { DropdownProps } from '@constants/Navbar';
import { ReactNode, useCallback, useContext } from 'react';
import Link from 'next/link';
import { Action, HeaderContext } from '@contexts/HeaderContext';

const ListElement = ({ name, to, isDisabled }: DropdownProps) => {
    const { dispatch } = useContext(HeaderContext);

    const onClick = useCallback(() => {
        dispatch({
            type: Action.SET_ISHIDDENHAMBURGERMENU,
            payload: true
        });
        dispatch({
            type: Action.SET_ISSELECTEDDROPDOWN,
            payload: false
        });
    }, [dispatch]);

    const ListElementElement = ({ children }: { children: ReactNode; onClick?: () => void }) => {
        if (isDisabled) {
            return <StyledListElementDisabled>{children}</StyledListElementDisabled>;
        } else if (to !== undefined) {
            return (
                <Link href={to} passHref>
                    <StyledLink onClick={onClick}>
                        <StyledListElement>{children}</StyledListElement>
                    </StyledLink>
                </Link>
            );
        } else {
            return <StyledListElement>{children}</StyledListElement>;
        }
    };

    return <ListElementElement onClick={onClick}>{name}</ListElementElement>;
};

export { ListElement };
