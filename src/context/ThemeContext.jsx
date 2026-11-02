import { createContext, useContext, useEffect, useState } from "react";
const ThemeContext = createContext({
  theme: "light",
  setTheme: () => {},
});

export const ThemeProvider = ({ children, defaultTheme = "light" }) => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "underfined") {
      const stored = localStorage.getItem("theme");
      if (stored) return stored;
    }
    return defaultTheme;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    try {
      localStorage.setItem("theme", theme);
    } catch (error) {
      console.error(error);
    }
    // Depency Arrey
  },[theme])
  return(
    <ThemeContext.Provider value={{theme, setTheme}}>
{children}
    </ThemeContext>
  )
}

export const useTheme = () => useContext(ThemeContext);
export default ThemeContext

