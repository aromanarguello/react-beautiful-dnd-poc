import * as React from 'react';
import ReactDOM from 'react-dom';
import '@atlaskit/css-reset';
import styled from 'styled-components';
import { DragDropContext } from 'react-beautiful-dnd';
import initialData from './initialData';
import Column from './Column';

const Container = styled.div`
    display: flex;
`;

const App: React.FC = () => {
    const [state, setState] = React.useState<any>(initialData);

    const onDragEnd = (result: any) => {
        const { destination, source, draggableId } = result;

        if (!destination) {
            return;
        }

        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }

        const start = state.columns[source.droppableId];
        const finish = state.columns[destination.droppableId];

        if (start === finish) {
            const newTaskIds = Array.from(start.taskIds);
            newTaskIds.splice(source.index, 1);
            newTaskIds.splice(destination.index, 0, draggableId);

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

        // Moving from one list to another
        const startTaskIds = Array.from(start.taskIds);
        startTaskIds.splice(source.index, 1);
        const newStart = {
            ...start,
            taskIds: startTaskIds
        };

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

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Container>
                {state.columnOrder.map((columnId: any) => {
                    const column = state.columns[columnId];
                    const tasks = column.taskIds.map((taskId: any) => state.tasks[taskId]);

                    return <Column key={column.id} column={column} tasks={tasks} />;
                })}
            </Container>
        </DragDropContext>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
