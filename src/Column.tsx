import * as React from "react";
import styled from "styled-components";
import Task from "./Task";
import { Droppable } from "react-beautiful-dnd";

type Column = {
  id: string;
  title: string;
  taskIds: string[];
};

type Tasks = {
  id: string;
  content: string;
};

interface IColumnProps {
  key?: string;
  column: Column;
  tasks: Tasks[];
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

const Column: React.FC<IColumnProps> = ({ tasks, column: { title } }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Droppable>
        {({ innerRef, droppableProps, placeholder }) => (
          <TaskList {...droppableProps} innerRef={innerRef}>
            {tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index} />
            ))}
            {placeholder}
          </TaskList>
        )}
      </Droppable>
    </Container>
  );
};

export default Column;
