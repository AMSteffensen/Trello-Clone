import { CardContainer } from './styles';

types CardProps = {
    text: string
}

export const Card = ({ text }: CardProps) => {
    return <CardContainer>{text}</CardContainer>
}