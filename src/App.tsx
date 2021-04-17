import { FC } from 'react';
import { Column } from './Column';
import { Card } from './Card';
import { AppContainer } from './styles';
import { AddNewItem } from "./AddNewItem"


export const App = () => {
  return (
  <AppContainer>
    <Column text="todo">
      <Card text="Generate app scaffhold" />
    </Column>
    <Column text="In progress">
      <Card text="Learn typescript" />
    </Column>
    <Column text="Done">
      <Card text="Begin to use static typing" />
    </Column>
     <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} />
  </AppContainer>
  );
}