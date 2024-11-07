import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

/* eslint-disable react/prop-types */
function TodoItem({ task, handleBtn, deleteTask }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <li
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      key={task.id}
    >
      <button
        onClick={() => handleBtn(task.id)}
        className={`border dark:border-Very-Dark-Grayish-Blue2 border-Very-Light-Grayish-Blue h-8 w-8 flex items-center  justify-center rounded-full hover:border hover:border-linearbg1  ${
          task.done === true
            ? "bg-gradient-to-bl to-linearbg1 from-linearbg2"
            : ""
        } `}
      >
        {task.done === true && <img src="./icon-check.svg" alt="icon-check" />}
      </button>
      <span
        className={` dark:text-Light-Grayish-Blue-light text-Very-Dark-Grayish-Blue-light font-normal text-base ${
          task.done === true
            ? "line-through dark:text-Very-Dark-Grayish-Blue-dark text-Light-Grayish-Blue-light"
            : ""
        }`}
      >
        {task.taskName}
      </span>
      {task.done === true && (
        <button onClick={() => deleteTask(task.id)} className="ml-auto">
          <img src="./icon-cross.svg" alt="icon-check" />
        </button>
      )}
    </li>
  );
}

export default TodoItem;
