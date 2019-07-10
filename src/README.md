`react-beautiful-dnd` is made up of three different components

- `DragDropContext`,
  - Three main callbacks: `onDragEnd` `onDragStart`, `onDragUdate`

  - The `DragDropContext` is a component, that we use to wrap the part of our application,
    that we want to have drag and drop enable from

- A `Droppable` creates a region which can be dropped on to. They also contain draggables.

- A `Draggable` is a component that can be dragged around and dropped into droppables.

`droppableProps` are props we want to apply to our droppable components

`styled-component` has a callback prop called `innerRef` which returns the DOM node of the component. We provide the `provided.innerRef` is a a property from the provided object, which is a function used to supply the DOM node of your component to `react-beautiful-dnd`

insert `placeholder` is react element used to increase the available space in a `droppable` in a drag when it's needed. The placeholder needs to be added a child of the component that you designate as a droppable

`<Draggable>` has two required props, `draggableId` and requires an `index`



```jxs
const result = {
    draggableId: 'task-1',  // id of the dragablle the user was dragging
    type: 'TYPE', 
    reason: 'DROP',  // the reason for the drop. `DROP` or `CANCEL`
    source: {
        droppableId: 'column-1, // where the draggable started
        index: 0,
    },
    destination: {
        droppableId: 'column-1', // where the draggable finished
        index: 1,
    },
}
```

Then, you grab the information that we are interested in from the result object. If there's no destination, then there's nothing that we need to do as a result of this drag, so we can simply exit.

Some times the destination can be null like when the user drops out the option