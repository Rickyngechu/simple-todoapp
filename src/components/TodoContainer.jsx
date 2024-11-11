/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import TodoListItemsContainer from "./TodoItemsContainer";
import Footer from "./Footer";
import InputTodoTask from "./InputTodoTask";
import FooterMobile from "./FooterMobile";

function TodoContainer({ isDark, setIsDark }) {
  const [inputVal, setInputVal] = useState("");

  const [tasks, setTasks] = useState([]);
  console.log(tasks);
  const [filterVal, setFilterVal] = useState("all");
  const [filterItems, setFilterItems] = useState([]);

  const numOfTasks = tasks?.length || filterItems?.length;

  useEffect(
    function () {
      function handleFilterItems() {
        if (tasks.length === 0) return;
        setFilterItems(tasks);
      }
      handleFilterItems();
    },
    [tasks]
  );

  function handleFilter(filterVal) {
    setFilterVal(filterVal);
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

  /*Displaying only items which are not complete */
  function handleDeleteCompleted() {
    const todoItems = filterItems.filter(task => task.done != true);
    setFilterItems(todoItems);
    setFilterVal("all");
  }

  function handleBtn(id) {
    setFilterItems(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  }

  /**Lets handle deleting one task */
  function deleteTask(id) {
    const task = tasks.filter(task => task.id !== id);
    setTasks(task);
    setFilterVal("all");
  }

  /*Handling the input value */
  function handleInput(val) {
    if (inputVal === val) return;
    setInputVal(val);
  }

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
