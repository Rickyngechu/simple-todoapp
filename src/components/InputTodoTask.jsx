/* eslint-disable react/prop-types */
function InputTodoTask({ handleAddTodoItem, inputVal, handleInput }) {
  return (
    <form
      onSubmit={e => handleAddTodoItem(e)}
      className="flex items-center dark:bg-Very-Dark-Desaturated-Blue bg-Very-Light-Gray  rounded-md px-4"
    >
      <button
        className={`border dark:border-Very-Dark-Grayish-Blue2 border-Very-Light-Grayish-Blue h-8 w-8 flex items-center  justify-center rounded-full hover:border hover:border-linearbg1  ${
          inputVal.length > 0
            ? "bg-gradient-to-bl to-linearbg1 from-linearbg2"
            : ""
        } `}
      >
        {inputVal.length > 0 ? (
          <img src="./icon-check.svg" alt="icon-check" />
        ) : (
          ""
        )}
      </button>
      <input
        onChange={e => handleInput(e.target.value)}
        type="text"
        value={inputVal}
        placeholder="Create a new Todo Item..."
        className="w-full  px-4 py-4 dark:bg-Very-Dark-Desaturated-Blue bg-Very-Light-Gray outline-none border-none dark:text-Light-Grayish-Blue-dark  text-Very-Dark-Grayish-Blue-light "
      />
    </form>
  );
}

export default InputTodoTask;
