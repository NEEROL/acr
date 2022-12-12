import styled from 'styled-components';
import { Button, PulsingButton } from '@components/Header/Header.styles';

export const HamburgerMenuContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    overflow: hidden;
    white-space: nowrap;
    transform: translateY(-100%);
    transition: transform 250ms linear;
    ${({ isHidden }: { isHidden: boolean }) => !isHidden && `transform: translateY(0);`}
`;

export const HamburgerMenuFooter = styled.p`
    width: 100%;
    text-align: center;
    position: absolute;
    left: 0;
    bottom: 35px;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 16px;
    z-index: 99999;
    color: #021a42;

    & > span {
        color: #00a3ff;
    }
`;

export const MainMenu = styled.div`
    display: inline-block;
`;

export const Buttons = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 30px;

    @media screen and (max-width: 540px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const HamburgerPulsingButton = styled(PulsingButton)`
    margin: 0 10px 0 0;
    width: 170px;
    height: 41px;
    font-size: 16px;
    white-space: nowrap;

    transition: transform 150ms, box-shadow 150ms;

    &:hover {
        transform: scale(1.05);
        box-shadow: 5px 6px 15px rgba(0, 0, 0, 0.2);
    }

    @media screen and (max-width: 540px) {
        margin: 0 0 10px;
    }

    & > span {
        top: 8px;
        right: 12px;
        font-size: 8px;
    }
`;

export const Menu = styled.ul`
    height: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Quicksand', sans-serif;
`;

export const HamburgerButton = styled(Button)`
    width: 170px;
    height: 41px;
    font-size: 16px;
`;

export const HamburgerMenuContent = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateX(0px);
    transition: 250ms linear;
`;

export const DropdownContainer = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: auto;
`;
