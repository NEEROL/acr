import styled from 'styled-components';

export const Item = styled.li`
    font-size: 18px;
    position: relative;
    font-family: 'Roboto', sans-serif;
    cursor: pointer;
    white-space: nowrap;
    transition: color 200ms ease-in-out;

    @media screen and (max-width: 1550px) {
        &:first-child {
            display: none;
        }
    }

    &:not(:last-child) {
        margin-right: 55px;

        @media screen and (max-width: 1380px) {
            margin-right: 35px;
        }
    }

    &:hover,
    &:hover > a {
        color: #68bceb;
    }
`;

export const MenuNote = styled.span`
    font-weight: 500;
    font-size: 12px;
    color: #cecece;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -85%);
`;

export const MenuLink = styled.a`
    text-decoration: none;
    color: inherit;
    transition: color 200ms ease-in-out;

    &:hover {
        color: #68bceb;
        cursor: pointer;
    }
`;
