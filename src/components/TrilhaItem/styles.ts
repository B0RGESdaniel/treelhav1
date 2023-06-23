import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    width: 100%;
    padding: 1.5rem 2rem;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
    background: linear-gradient(#435055, #374348);
    border-radius: .4rem;

    h3 {
        font-weight: 500;
        font-size: 1.1rem;
    }
`;