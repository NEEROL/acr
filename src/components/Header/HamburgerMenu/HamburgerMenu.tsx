import {
    Buttons,
    DropdownContainer,
    HamburgerButton,
    HamburgerMenuContainer,
    HamburgerMenuContent,
    HamburgerMenuFooter,
    HamburgerPulsingButton,
    MainMenu,
    Menu
} from '@components/Header/HamburgerMenu/HamburgerMenu.styles';
import NavbarData from '@constants/Navbar';
import { HamburgerMenuItem } from '@components/Header/HamburgerMenu/MenuItem/MenuItem';
import { CarouselMenu } from '@components/Header/HamburgerMenu/CarouselMenu/CarouselMenu';
import { useCallback, useContext, useEffect, useState } from 'react';
import { Action, HeaderContext } from '@contexts/HeaderContext';
import Link from 'next/link';

const HamburgerMenu = () => {
    const { state, dispatch } = useContext(HeaderContext);
    const [divWidth, setDivWidth] = useState<number>(0);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    useEffect(() => {
        const onResize = () => {
            const windowWidth = window.innerWidth;
            setDivWidth(windowWidth);
        };

        onResize();
        window.addEventListener('resize', onResize);

        return () => {
            window.removeEventListener('resize', onResize);
        };
    }, []);

    const chooseDropdown = useCallback(
        (id: string) => {
            dispatch({
                type: Action.SET_ISSELECTEDDROPDOWN,
                payload: true
            });
            setActiveDropdown(id);
        },
        [dispatch]
    );

    const onClick = useCallback(() => {
        dispatch({
            type: Action.SET_ISHIDDENHAMBURGERMENU,
            payload: true
        });
    }, [dispatch]);

    return (
        <HamburgerMenuContainer isHidden={state.isHiddenHamburgerMenu}>
            <HamburgerMenuContent style={{ transform: `translateX(${state.isSelectedDropdown ? -divWidth : 0}px)` }}>
                <MainMenu style={{ width: `${divWidth}px` }}>
                    <Menu>
                        {NavbarData.map((item) => {
                            return (
                                <HamburgerMenuItem
                                    name={item.name}
                                    to={item.to !== undefined ? item.to : undefined}
                                    note={item.note !== undefined ? item.note : undefined}
                                    onClick={item.groups ? () => chooseDropdown(item.name) : onClick}
                                    isDropdown={item.groups !== undefined}
                                    key={item.name}
                                />
                            );
                        })}
                    </Menu>
                    <Buttons>
                        <HamburgerPulsingButton href="tel:+48515782627">
                            Umów teleporadę <span>NEW</span>
                        </HamburgerPulsingButton>
                        <Link href="/deklaracja" passHref>
                            <HamburgerButton onClick={onClick}>Złóż deklarację</HamburgerButton>
                        </Link>
                    </Buttons>
                </MainMenu>
                <DropdownContainer style={{ width: `${divWidth}px` }}>
                    {NavbarData.map((item) => {
                        if (item.groups !== undefined) {
                            return (
                                <CarouselMenu
                                    title={item.name}
                                    width={`${divWidth}px`}
                                    groups={item.groups}
                                    isDisabled={activeDropdown !== item.name}
                                    key={item.name}
                                />
                            );
                        }
                    })}
                </DropdownContainer>
            </HamburgerMenuContent>
            <HamburgerMenuFooter>
                @ <span>reccly.pl</span> 2022
                <br />
                ALL RIGHTS RESERVED
            </HamburgerMenuFooter>
        </HamburgerMenuContainer>
    );
};

export { HamburgerMenu };
