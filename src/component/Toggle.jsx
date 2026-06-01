"use client";

import { Check, Moon, Power, Sun } from "@gravity-ui/icons";
import { Switch } from "@heroui/react";

import { useTheme } from "next-themes";

const Toggle = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      {/* <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} */}
      <Switch onChange={() => setTheme(theme === "dark" ? "light" : "dark")}>
        {({ isSelected }) => (
          <>
            <Switch.Control
              className={`h-[31px] w-[51px] bg-gray-500 ${isSelected ? "bg-gray-500 shadow-[0_0_12px_rgba(6,182,212,0.5)]" : ""}`}
            >
              <Switch.Thumb
                className={`size-[27px] bg-white shadow-sm ${isSelected ? "ms-[22px] shadow-lg" : ""}`}
              >
                <Switch.Icon>
                  {isSelected ? (
                    <Sun className="size-4 " />
                  ) : (
                    <Moon className="size-4 " />
                  )}
                </Switch.Icon>
              </Switch.Thumb>
            </Switch.Control>
          </>
        )}
      </Switch>
    </div>
  );
};

export default Toggle;
