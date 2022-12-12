import styled from 'styled-components';

export const CarouselContainer = styled.div`
    font-family: 'Quicksand', sans-serif;
    display: block;
    height: 100%;
`;

export const Navigation = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.p`
    color: #021a42;
    font-weight: 700;
    font-size: 20px;
`;

export const Button = styled.button`
    border: none;
    background: none;
    margin: 0 20px;
    opacity: 1;
    transition: opacity 250ms linear;
    ${({ isDisabled }: { isDisabled?: boolean }) =>
        isDisabled &&
        `
                opacity: 0;
                pointer-events: none;
        `}
`;

export const CarouselContent = styled.div`
    overflow: hidden;
    white-space: nowrap;
    position: relative;
`;

export const CarouselGroups = styled.div`
    transform: translateX(0px);
    transition: 250ms linear;
`;

export const CarouselGroup = styled.div`
    width: 1260px;
    display: inline-block;
`;

export const CarouselList = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const Arrow = styled.i`
    &::before {
        content: '';
        display: inline-block;
        -webkit-mask-size: cover;
        mask-size: cover;
        mask: url('/assets/dropdown-icon.svg') no-repeat 50% 50%;
        background: #68bceb;
        width: 13px;
        height: 8px;
        z-index: 100;
        ${({ direction }: { direction: number }) => `transform: rotate(${direction}deg);`}
        transform-origin: center;
    }
`;
