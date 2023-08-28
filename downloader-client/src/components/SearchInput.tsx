import React from "react";

export default function SearchInput({
  setId,
}: {
  setId: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [value, setValue] = React.useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (e.target.value.includes("youtube.com")) {
      const id = e.target.value?.split("v=")[1]?.split("&")[0];
      setId(id);
    } else if (e.target.value.includes("youtu.be")) {
      const id = e.target.value?.split("youtu.be/")[1]?.split("&")[0];
      setId(id);
    }
  };

  return (
    <div className="px-4 md:px-0 w-full flex flex-col items-center justify-center">
      <form className="w-full md:w-[650px] mt-6 sm:mb-0 box-border">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
        >
          Search
        </label>
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            onChange={handleChange}
            type="search"
            id="default-search"
            className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Paste a YouTube link"
            required
            value={value}
          ></input>
          <button
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={(e) => {
              e.preventDefault();
              navigator.clipboard.readText().then((text) => {
                setValue(text);
              });
            }}
          >
            Paste
          </button>
        </div>
      </form>
    </div>
  );
}
