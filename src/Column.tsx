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
  width: 220px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  padding: 8px;
`;

const TaskList = styled.div<any>`
  padding: 8px;
  background-color: ${({ isDraggingOver }) =>
    isDraggingOver ? "skyblue" : "white"};
  flex-grow: 1;
  min-height: 100px;
`;

const Column: React.FC<IColumnProps> = ({ tasks, column: { title, id } }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Droppable droppableId={id}>
        {(provided, snapshot) => (
          <TaskList
            {...provided.droppableProps}
            ref={provided.innerRef}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </Container>
  );
};

export default Column;
