import React from "react";
import AppBar from "./AppBar";

const Layout = ({ children }: { children?: JSX.Element }) => {
  return (
    <main className="relative w-full max-w-md">
      <AppBar />
      <div className="p-4">{children}</div>
    </main>
  );
};

export default Layout;
