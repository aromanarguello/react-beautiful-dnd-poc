import * as React from "react";
import { render } from "react-dom";
import "@atlaskit/css-reset";
import initialData from "./initialData";
import Column from "./Column";
import { DragDropContext } from "react-beautiful-dnd";

const App: React.FC = () => {
  const [state, setState] = React.useState(initialData);

  const onDragEnd = result => {
    //
  };

  return state.columnOrder.map(columnId => {
    const column = state.columns[columnId];
    const tasks = column.taskIds.map(taskId => state.tasks[taskId]);

    return (
      <DragDropContext onDragEnd={onDragEnd}>
        <Column key={column.id} column={column} tasks={tasks} />;
      </DragDropContext>
    );
  });
};

const rootElement = document.getElementById("root");

render(<App />, rootElement);
