import { styled } from "styled-components";

interface LoginButtonProps {
    type: 'facebook' | 'apple' | 'google';
}

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
    max-width: 40rem;
    height: 100vh;
    gap: 2rem;
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    font-size: 1.4rem;

    img {
        width: 8rem;
        height: 8rem;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0.8rem;
`;

export const LoginButton = styled.div<LoginButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 17rem;
    cursor: pointer;

    background: var(--gray);
    padding: .7rem 1rem;
    border-radius: .4rem;

    transition: .3s linear all;

    &:hover {
        background: ${props => {
            if (props.type === 'facebook') return 'var(--facebook)'
            if (props.type === 'google') return 'var(--google)'
            if (props.type === 'apple') return 'var(--apple)'
        }}
    }
`;