import * as React from "react";
import { render } from "react-dom";
import "@atlaskit/css-reset";
import initialData from "./initialData";
import Column from "./Column";
import { DragDropContext } from "react-beautiful-dnd";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  border-radius: 2px;
`;
const App: any = () => {
  const [state, setState] = React.useState<any>(initialData);

  const onDragEnd = (result: any) => {
    document.body.style.color = "inherit";
    const { destination, source, draggableId } = result;

    // if no destination, noting we weed to do
    // we can exit
    if (!destination) {
      return;
    }

    // check to see if the location of the draggable has changed
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // we need to reorder the `taskIds` arrar for the `column`
    const start = state.columns[source.droppableId];
    const finish = state.columns[source.droppableId];

    if (start === finish) {
      // we will create a new array to avoid mutating the existing state
      const newTaskIds = Array.from(start.taskIds);
      // move task ID from its old index to its new index in the array
      // splice will modify the array
      newTaskIds.splice(source.index, 1);
      // inserts draggableId which is the same as the taskId
      newTaskIds.splice(destination.index, 0, draggableId);

      // create new column and give it newTaskIds
      const newColumn = {
        ...start,
        taskIds: newTaskIds
      };

      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newColumn.id]: newColumn
        }
      };

      setState(newState);
      return;
    }

    // moving from one list to another
    // new array with ids
    const startTaskIds = Array.from(start.taskIds);
    console.log({ startTaskIds });
    startTaskIds.splice(source.index, 1);

    const newStart = {
      ...start,
      taskIds: startTaskIds
    };

    console.log({ newStart });
    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);

    const newFinish = {
      ...finish,
      taskIds: finishTaskIds
    };

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
      }
    };
    setState(newState);
  };

  const onDragStart = () => (document.body.style.color = "orange");
  return (
    <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
      <Container>
        {state.columnOrder.map((columnId: any) => {
          const column = state.columns[columnId];
          const tasks = column.taskIds.map(
            (taskId: any) => state.tasks[taskId]
          );

          return <Column key={column.id} column={column} tasks={tasks} />;
        })}
      </Container>
    </DragDropContext>
  );
};

const rootElement = document.getElementById("root");

render(<App />, rootElement);
