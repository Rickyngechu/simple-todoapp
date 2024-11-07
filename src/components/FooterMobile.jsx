/* eslint-disable react/prop-types */
function FooterMobile({ handleFilter, filterVal }) {
  return (
    <div className=" sm:hidden space-x-3 dark:bg-Very-Dark-Desaturated-Blue py-3 px-2 flex items-center justify-center gap-4 rounded-md dark:text-Very-Dark-Grayish-Blue-light text-Dark-Grayish-Blue-light ">
      <button
        value="all"
        onClick={e => handleFilter(e.target.value)}
        className={` ${
          filterVal === "all"
            ? "text-Bright-Blue"
            : "text-Very-Dark-Grayish-Blue"
        }`}
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
  );
}

export default FooterMobile;
