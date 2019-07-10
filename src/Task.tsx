import * as React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
`;

interface ITaskProps {
  key: string;
  task: {
    content: string;
    id: string;
  };
  index: string;
}

const Task: React.FC<ITaskProps> = ({ key, task: { content, id }, index }) => {
  return (
    <Draggable draggableId={id} index={index}>
      <Container>{content}</Container>;
    </Draggable>
  );
};

export default Task;
