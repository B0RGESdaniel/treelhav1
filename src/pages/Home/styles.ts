import { styled } from "styled-components";

export const Container = styled.div`
    margin: 0 auto;
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 45%;
`;

export const ContainerHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    padding: .3rem .4rem;
`;

export const Button = styled.button`
    background-color: var(--green-200);
    border: none;
    color: var(--white);
    padding: .7rem 1rem;
    border-radius: .3rem;
`;

export const List = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 100%;

    padding: .3rem .4rem;
    margin-top: 2rem;
`;