import * as React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div<any>`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${({ isDragging }) =>
    isDragging ? "lightgreen" : "white"};
  display: flex;
`;

const Handle = styled.div`
  width: 20px;
  height: 20px;
  background-color: orange;
  border-radius: 4px;
  margin-right: 8px;
`;

interface ITaskProps {
  key: string;
  task: {
    content: string;
    id: string;
  };
  index: number;
}

const Task: React.FC<ITaskProps> = ({ task: { content, id }, index }) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => (
        <Container
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          {/* <Handle /> */}
          {content}
        </Container>
      )}
    </Draggable>
  );
};

export default Task;
