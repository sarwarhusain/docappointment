// "use client";
import { ThemeProvider } from "next-themes";
import React from "react";

const Theme = ({ children }) => {
  return (
    <div>
      <ThemeProvider attribute="class" defaultTheme="light">
        {children}
      </ThemeProvider>
    </div>
  );
};

export default Theme;
