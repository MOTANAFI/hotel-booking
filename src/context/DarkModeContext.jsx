import React, { useContext, useEffect } from "react";
import { createContext } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(false, "isDarkMode");
  
  useEffect(function() {
    if(isDarkMode) {
        document.documentElement.classList.add("dark-mode")
       
    } else {
        document.documentElement.classList.remove("dark-mode")
    }
  }, [isDarkMode])
  function toggleDarkMode () {
    setIsDarkMode((isDark) => !isDark)
  }

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function useDarkMode() {
    const context = useContext(DarkModeContext)

    if(context === undefined) throw new Error("DarkModeContext was used outside of Dar,n=mode")
    return context
}

export {DarkModeProvider, useDarkMode}