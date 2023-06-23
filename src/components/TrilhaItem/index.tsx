import { Container } from "./styles";

type TrilhaItemProps = {
    name: string;
}

export function TrilhaItem({ name }: TrilhaItemProps) {
    return (
        <Container>
            <h3>{ name }</h3>
        </Container>
    );
}