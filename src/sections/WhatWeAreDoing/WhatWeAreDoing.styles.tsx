import styled from 'styled-components';

export const WhatWeAreDoingSection = styled.section`
    background: #fff;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const WhatWeAreDoingContainer = styled.div`
    margin-top: -50px;
    padding-bottom: 50px;

    @media screen and (max-width: 700px) {
        width: 100%;
        padding: 30px 30px;
    }

    @media screen and (max-width: 400px) {
        padding-top: 50px;
        margin-top: 0;
    }
`;
