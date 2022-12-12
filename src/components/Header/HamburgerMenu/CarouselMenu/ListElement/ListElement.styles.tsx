import styled from 'styled-components';

export const StyledListElement = styled.li`
    color: #9b9b9b;
    font-weight: 700;
    font-size: 16px;

    &:not(:last-child) {
        margin-bottom: 25px;
    }
`;

export const StyledListElementDisabled = styled(StyledListElement)`
    pointer-events: none;
`;

export const StyledLink = styled.a`
    text-decoration: none;
    color: #9b9b9b;
    font-weight: 700;
    font-size: 16px;
`;
