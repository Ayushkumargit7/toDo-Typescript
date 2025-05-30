import "./App.css";
import { useState } from "react";
import logo from "./assests/logo.png";
import PersonalTasks from "./components/PersonalTasks";
import ProfessionalTasks from "./components/ProfessionalTasks";
import { Sun, Moon } from "lucide-react";

function App() {
  const [activeTab, setActiveTab] = useState("personal");
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="dark:bg-gray-700 h-screen">

        <div className="bg-[#F1ECE6] dark:bg-gray-800 relative flex items-center text-2xl p-2 ">
          <img className="absolute left-1/2 transform -translate-x-1/2" src={logo} width="100" height="50" alt="logo" />
          <button className="mr-2 ml-auto" onClick={toggleTheme}>{theme === "light" ? <Moon/> : <Sun color="#f1ece6" />}</button>
        </div>

        <div className="grid grid-cols-2 bg-[#F3F3F3] font-medium dark:bg-gray-700">
          <button
            className={`py-1  ${
              activeTab === "personal"
                ? "border-b-2 border-[#D98326] dark:text-white"
                : "text-gray-500 dark:text-slate-300"
            }`}
            onClick={() => setActiveTab("personal")}
          >
            Personal
          </button>
          <button
            className={`py-1 ${
              activeTab === "professional"
                ? "border-b-2 border-[#D98326] dark:text-white"
                : "text-gray-500 dark:text-slate-300"
            }`}
            onClick={() => setActiveTab("professional")}
          >
            Professional
          </button>
        </div>
        {activeTab === "personal" ? <PersonalTasks /> : <ProfessionalTasks />}
      </div>
    </div>
  );
}

export default App;
