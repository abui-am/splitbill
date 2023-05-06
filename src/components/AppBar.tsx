import React, { useState } from "react";

const AppBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900">
      <div className="mx-auto flex w-full max-w-screen-xl flex-wrap items-center justify-between p-4 ">
        <a href="#" className="flex items-center">
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            Splitbill
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          onClick={() => {
            setIsOpen((open) => !open);
          }}
          className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <Dropdown isOpen={isOpen} />
    </nav>
  );
};

const Dropdown = ({ isOpen }: { isOpen: boolean }) => {
  if (!isOpen) return <div />;
  return (
    <div>
      <ul className="w-96">
        <li className="w-full border-b-2 border-neutral-100 border-opacity-100 p-4 py-4 dark:border-opacity-50">
          Home
        </li>
      </ul>
    </div>
  );
};

export default AppBar;
