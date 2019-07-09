import * as React from "react";
import { render } from "react-dom";
import initialData from "./initialData";
import Column from "./Column";

const App: React.FC = () => {
  const [state, setState] = React.useState(initialData);
  return state.columnOrder.map(columnId => {
    const column = state.columns[columnId];
    const tasks = column.taskIds.map(taskId => state.tasks[taskId]);

    return <Column key={column.id} column={column} tasks={tasks} />;
  });
};

const rootElement = document.getElementById("root");

render(<App />, rootElement);
