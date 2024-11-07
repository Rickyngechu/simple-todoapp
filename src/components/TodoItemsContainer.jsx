import { DndContext } from "@dnd-kit/core";
import React, { useState } from "react";
import {
  closestCenter,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import TodoItem from "./TodoItem";

/* eslint-disable react/prop-types */
function TodoListItemsContainer({
  setFilterItems,
  filterItems,
  filterVal,
  handleBtn,
  deleteTask,
}) {
  const sensors = useSensors(
    useSensor(MouseSensor, {
      // Require the mouse to move by 10 pixels before activating
      activationConstraint: {
        distance: 10,
      },
    }),
    useSensor(TouchSensor, {
      // Press delay of 250ms, with tolerance of 5px of movement
      activationConstraint: {
        delay: 50,
        tolerance: 2,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragEnd(event) {
    const { active, over } = event;

    if (active.id !== over.id) {
      setFilterItems(items => {
        console.log(items);
        const oldIndex = items.findIndex(item => item.id === active.id);
        const newIndex = items.findIndex(item => item.id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }
  return (
    <ul
      className="overflow-y-scroll [&>li:not(:last-child)]:border-b dark:[&>li:not(:last-child)]:border-Very-Dark-Grayish-Blue2 [&>li]:px-4 [&>li]:py-3 [&>li]:flex [&>li]:items-center [&>li]:hover:cursor-pointer   h-[25rem]  [&>li]:gap-4 
         "
    >
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={filterItems}>
          {filterItems.length > 0 ? (
            filterItems?.map(task => (
              <TodoItem
                strategy={verticalListSortingStrategy}
                task={task}
                key={task.id}
                id={task.id}
                handleBtn={handleBtn}
                deleteTask={deleteTask}
              />
            ))
          ) : (
            <p className="text-center text-gray-50 py-2">
              {filterItems.length === 0
                ? `There are no ${filterVal} tasks.`
                : "Please add some tasks"}
            </p>
          )}
        </SortableContext>
      </DndContext>
    </ul>
  );
}

export default TodoListItemsContainer;
