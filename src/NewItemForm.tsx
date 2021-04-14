import { useState } from 'react';
import { NewItemButtonFormContainer, NewItemButton, NewItemInput } from './styles';

type NewItemFormProps = {
    onAdd(text: string): void
}

export const NewItemForm = ({ onAdd}: NewItemButtonProps) => {
    const [text, setText ] = useState("")

    return (
        <NewItemContainer>
            <NewItemInput value={text} onChange={e => setText(e.target.value)}/>
        </NewItemContainer>
        <NewItemButton onClick={() => onAdd(text)}>
            Create
        </NewItemButton>
    )
} 