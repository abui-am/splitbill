import React from "react";
import BankNotes from "~/icons/BankNotes";

const Layout = ({
  children,
  title,
}: {
  children?: JSX.Element;
  title: string;
}) => {
  return (
    <main>
      <div className="sticky top-0 z-50 border-b border-gray-200 border-b-gray-200 bg-white dark:border-gray-700">
        <div className="mx-auto flex w-full max-w-md flex-wrap items-center justify-between p-4 ">
          <h1 className="text-xl font-bold">{title}</h1>
        </div>
      </div>
      <div className="relative mx-auto w-full max-w-md overflow-hidden px-4">
        {children}
      </div>
      <nav className="fixed bottom-0 left-0 right-0 border-t bg-white px-4 pb-2 pt-[7px] ">
        <div className="mx-auto flex max-w-md flex-col items-center">
          <BankNotes />
          Catatan Splitbill
        </div>
      </nav>
    </main>
  );
};

export default Layout;
