import styled from 'styled-components';

export const DropdownContainer = styled.div`
    position: absolute;
    top: calc(100% + 10px);
    left: 0;
    background: #ffffff;
    border: 0.5px solid #dedbdb;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    padding: 16px;
    opacity: 0;
    transition: opacity 300ms 1ms;
    z-index: 100;
    display: flex;

    &.show {
        opacity: 1;
    }

    &.hidden {
        visibility: hidden;
    }
`;

export const DropdownList = styled.ul`
    list-style: none;
    padding: 0;

    &:not(:last-child) {
        margin-right: 40px;
    }
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
        transform: translateY(100%);
        transform-origin: center;
        transition: transform 300ms, background 250ms;
    }

    &.rotated::before {
        background: #68bceb;
        transform: translateY(100%) rotate(-180deg);
    }
`;
