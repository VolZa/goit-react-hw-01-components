import styled from "@emotion/styled";

export const Title = styled.h2`
    text-align: center;
    width: 300px;
    padding: 30px;
    margin: auto;
    text-transform: uppercase;
    
    background-color: ${p => p.theme.colors.white};
    color: ${p => p.theme.colors.gray};
`;