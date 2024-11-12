/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import TodoListItemsContainer from "./TodoItemsContainer";
import Footer from "./Footer";
import InputTodoTask from "./InputTodoTask";
import FooterMobile from "./FooterMobile";

function TodoContainer({ isDark, setIsDark }) {
  const [inputVal, setInputVal] = useState("");

  const [tasks, setTasks] = useState(() => {
    const localItems = localStorage.getItem("todo");
    return localItems ? JSON.parse(localItems) : [];
  });

  const [filterVal, setFilterVal] = useState("all");
  const [filterItems, setFilterItems] = useState([]);

  const numOfTasks = tasks?.length || filterItems?.length;

  /**Setting the filter value based on the clicked filter */
  function handleFilter(filterVal) {
    setFilterVal(filterVal);
  }

  /*Deletes all completed tasks */
  function handleDeleteCompleted() {
    const todoItems = tasks.filter(task => task.done !== true);
    setTasks(todoItems);
    setFilterVal("all");
  }

  /**Toggling tasks done */
  function handleBtn(id) {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  }

  /**Lets handle deleting one task */
  function deleteTask(id) {
    const task = tasks.filter(task => task.id !== id);
    setTasks(task);
  }

  /*Handling the input value */
  function handleInput(val) {
    if (inputVal === val) return;
    setInputVal(val);
  }

  /**Handling the input todo tasks */
  function handleAddTodoItem(e) {
    e.preventDefault();

    if (inputVal.length === 0) return;

    setTasks(current => [
      {
        id: tasks.length + 1,
        taskName: `${inputVal}`,
        done: false,
      },
      ...current,
    ]);
    setFilterVal("all");
    setInputVal("");
  }

  function handleToggleDarkMode() {
    setIsDark(current => !current);
  }

  // Handling filters
  useEffect(
    function () {
      function handleFilterItems() {
        if (tasks.length === 0) return;
        setFilterItems(tasks);

        if (filterVal === "all") {
          setFilterItems(tasks);
        } else if (filterVal === "active") {
          const items = tasks.filter(task => task.done === false);
          setFilterItems(items);
        } else if (filterVal === "completed") {
          const items = tasks.filter(task => task.done === true);
          setFilterItems(items);
        } else {
          return null;
        }
      }
      handleFilterItems();
    },
    [tasks, filterVal]
  );

  // Handle local Storage deleting items and storing items.
  useEffect(
    function () {
      localStorage.setItem("todo", JSON.stringify(tasks));
    },
    [tasks]
  );

  // Handling darkmode toggle
  useEffect(
    function () {
      function toggleDarkMode() {
        if (isDark === true) {
          document.documentElement.classList.add("dark");
        }
        if (isDark === false) {
          document.documentElement.classList.remove("dark");
        }
      }
      toggleDarkMode();
    },
    [isDark]
  );

  return (
    <div className="absolute w-[90%]  left-[50%] -translate-x-[50%] h-full sm:py-14 py-8 sm:w-[30rem] flex flex-col sm:gap-6  gap-4">
      <div className="flex items-center justify-between py-4 ">
        <h1 className="uppercase text-Light-Grayish-Blue-hover font-bold text-3xl tracking-[5px]  leading-7">
          Todo
        </h1>
        <button onClick={handleToggleDarkMode} className="">
          {isDark === true ? (
            <img src="icon-moon.svg" />
          ) : (
            <img src="icon-sun.svg" />
          )}
        </button>
      </div>

      <InputTodoTask
        handleAddTodoItem={handleAddTodoItem}
        handleInput={handleInput}
        inputVal={inputVal}
      />

      <div className="dark:bg-Very-Dark-Desaturated-Blue bg-Very-Light-Gray max-h-[35rem]  rounded-md  py-1 shadow-2xl dark:shadow-Very-Dark-Desaturated-Blue shadow-Light-Grayish-Blue-light  ">
        <div className="overflow-y-scroll overflow-x-hidden">
          <TodoListItemsContainer
            setFilterItems={setFilterItems}
            filterItems={filterItems}
            filterVal={filterVal}
            handleBtn={handleBtn}
            deleteTask={deleteTask}
            tasks={tasks}
          />
        </div>
        <Footer
          numOfTasks={numOfTasks}
          handleFilter={handleFilter}
          filterVal={filterVal}
          filterItems={filterItems}
          handleDeleteCompleted={handleDeleteCompleted}
        />
      </div>

      <FooterMobile handleFilter={handleFilter} filterVal={filterVal} />

      <p className="dark:text-Very-Dark-Grayish-Blue-dark text-Very-Dark-Grayish-Blue-light mt-auto text-center ">
        Drag and drop to reorder list
      </p>
    </div>
  );
}

export default TodoContainer;
