import styled from 'styled-components';

export const Container = styled.div`
    background: #ffffff;
    border-radius: 15px;
    padding: 23px 26px;
`;

export const Header = styled.div`
    position: relative;
    cursor: pointer;
`;

export const Heading = styled.h4`
    font-size: 17px;
    margin: 0;
    color: #021a42;
    width: 80%;
`;

export const CollapseIcon = styled.i`
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
        top: 50%;
        right: 0;
        transform: translateY(-50%) rotate(0deg);
        transition: transform 250ms;
    }
    &.colapsed::before {
        transform: translateY(-50%) rotate(-180deg);
    }
`;

export const DescriptionContainer = styled.div`
    overflow: hidden;
    margin: 3px 0 0 0;
    transition: height 250ms ease-in-out;
`;

export const Description = styled.p`
    margin: 0;
    font-weight: 600;
    font-size: 16px;
    color: #021a42;
`;
