import { getRandomHexColor } from "constants";
import styled from "@emotion/styled";

export const Item = styled.li`
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;    
    padding: 30px;
    text-align: center;
    background-color: ${p => getRandomHexColor()};
    border-radius: 5px;
`;
