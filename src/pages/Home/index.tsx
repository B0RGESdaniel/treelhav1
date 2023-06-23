import { Button, Container, ContainerHeader, List } from "./styles";

import { TrilhaItem } from "../../components/TrilhaItem";

const TRILHAS_MOCKUP = [
    'Trilha 1',
    'Trilha 2',
    'Trilha 3',
    'Trilha 4',
    'Trilha 5',
]

export function Home() {
    return (
        <Container>
            <ContainerHeader>
                <Button>Nova trilha</Button>
            </ContainerHeader>
            <List>
                { TRILHAS_MOCKUP.map(trilha => (
                    <TrilhaItem name={trilha} />
                )) }
            </List>
            
        </Container>
    );
}