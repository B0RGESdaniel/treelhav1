import { 
    Container, 
    Logo, 
    LoginButton,
    ButtonContainer
} from "./styles";

import { useNavigate, Link } from 'react-router-dom';

import LogoTrelha from '../../assets/logo-treelha.svg';

export function Login() {
    const navigate = useNavigate();

    function goToHome() {
        navigate('/home');
    }
    
    return (
        <Container>
            <Logo>
                <img src={LogoTrelha} alt="Logo" />
                <h2>Treelha</h2>
            </Logo>
            <ButtonContainer>
                <LoginButton type="google" onClick={goToHome}>
                    <span>Login com o Google</span>
                </LoginButton>
                <LoginButton type="apple" onClick={goToHome}>
                    <span>Login com o Apple ID</span>
                </LoginButton>
                <LoginButton type="facebook" onClick={goToHome}>
                    <span>Login com o Facebook</span>
                </LoginButton>
            </ButtonContainer>
        </Container>
    );
}