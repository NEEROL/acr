import styled from 'styled-components';

export const Item = styled.li`
    font-size: 16px;
    font-weight: 700;
    position: relative;
    white-space: nowrap;

    &:not(:last-child) {
        margin-bottom: 35px;
    }

    &:hover > a {
        color: #68bceb;
    }
`;

export const MenuLink = styled.a`
    text-decoration: none;
    color: #021a42;
    transition: color 200ms ease-in-out;

    &:hover {
        color: #68bceb;
        cursor: pointer;
    }
`;

export const MenuNote = styled.span`
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 12px;
    color: #cecece;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -85%);
`;

export const DropdownIcon = styled.i`
    &::before {
        content: '';
        display: block;
        -webkit-mask-size: cover;
        mask-size: cover;
        mask: url('/assets/dropdown-icon.svg') no-repeat 50% 50%;
        width: 13px;
        height: 8px;
        background: black;
        z-index: 100;
        position: absolute;
        top: 0;
        right: calc(-19px);
        transform: translateY(100%) rotate(-90deg);
        transform-origin: center;
        transition: transform 300ms;
    }
`;
