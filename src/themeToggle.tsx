import { useTheme } from "./context/themeContext";
import { Moon, Sun } from "lucide-react"; 

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="p-2 rounded bg-gray-200 dark:bg-gray-800 text-black dark:text-white">
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
