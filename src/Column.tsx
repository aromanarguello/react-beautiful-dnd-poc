import * as React from "react";
import styled from "styled-components";

type Column = {
  id: string;
  title: string;
  taskIds: string[];
};

interface IColumnProps {
  key?: string;
  column: Column;
  taskIds: string;
}

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
`;

const Title = styled.h3`
  padding: 8px;
`;

const TaskList = styled.div`
  padding: 8px;
`;

const Column: React.FC<IColumnProps> = props => {
  return (
    <Container>
      <Title>{props.column.title}</Title>
      <TaskList>Tasks go here</TaskList>
    </Container>
  );
};

export default Column;
