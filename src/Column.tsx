import { FC } from './react'
import { ColumnContainer, ColumnTitle } from './styles'

types ColumnProps = {
    text: string
}

export const Column: FC<ColumnProps> = ({ text, children }) => {
    return (
        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
        </ColumnContainer>
    )
}