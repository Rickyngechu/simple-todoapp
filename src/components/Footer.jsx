/* eslint-disable react/prop-types */
function Footer({
  numOfTasks,
  handleDeleteCompleted,
  handleFilter,
  filterVal,
  filterItems,
}) {
  return (
    <div className="flex items-center justify-between px-3 border-t py-4 border-Very-Dark-Grayish-Blue2 dark:text-Very-Dark-Grayish-Blue-light text-Dark-Grayish-Blue-light">
      <p>
        <span>{filterItems ? `${filterItems.length}` : numOfTasks}</span>{" "}
        <span>Items left</span>
      </p>

      <div className="space-x-3 hidden sm:block dark:text-Very-Dark-Grayish-Blue-light text-Dark-Grayish-Blue-light ">
        <button
          value="all"
          onClick={e => handleFilter(e.target.value)}
          className={` ${filterVal === "all" ? "text-Bright-Blue" : ""}`}
        >
          All
        </button>
        <button
          value="active"
          onClick={e => handleFilter(e.target.value)}
          className={`${
            filterVal === "active"
              ? "text-Bright-Blue"
              : "text-Very-Dark-Grayish-Blue"
          }`}
        >
          Active
        </button>
        <button
          value="completed"
          onClick={e => handleFilter(e.target.value)}
          className={` ${
            filterVal === "completed"
              ? "text-Bright-Blue"
              : "text-Very-Dark-Grayish-Blue"
          }`}
        >
          Completed
        </button>
      </div>
      <button
        onClick={handleDeleteCompleted}
        className="dark:hover:text-Light-Grayish-Blue-hover hover:text-Very-Dark-Grayish-Blue-light transition-all"
      >
        Clear completed
      </button>
    </div>
  );
}

export default Footer;
