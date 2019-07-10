`react-beautiful-dnd` is made up of three different components

- `DragDropContext`

  - The `DragDropContext` is a component, that we use to wrap the part of our application,
    that we want to have drag and drop enable from

- A `Droppable` creates a region which can be dropped on to. They also contain draggables.

- A `Draggable` is a component that can be dragged around and dropped into droppables.

`droppableProps` are props we want to apply to our droppable components

`styled-component` has a callback prop called `innerRef` which returns the DOM node of the component. We provide the `provided.innerRef` is a a property from the provided object, which is a function used to supply the DOM node of your component to `react-beautiful-dnd`

insert `placeholder` is react element used to increase the available space in a `droppable` in a drag when it's needed. The placeholder needs to be added a child of the component that you designate as a droppable

`<Draggable>` has two required props, `draggableId` and requires an `index`
