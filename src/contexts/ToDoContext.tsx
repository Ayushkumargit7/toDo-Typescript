import React,{ createContext, useState } from "react";

interface ToDoItem {
  task: string;
  isCompleted: boolean;
  taskType: string;
}

interface ToDoContextType {
  toDo: ToDoItem[];
  setToDo: React.Dispatch<React.SetStateAction<ToDoItem[]>>;
}

export const ToDoContext = createContext<ToDoContextType | undefined>(undefined);

interface ToDoProviderProps{
  children: React.ReactNode;
}

export const ToDoProvider: React.FC<ToDoProviderProps> = ({ children }) => {
  const [toDo, setToDo] = useState<ToDoItem[]>(() => {
    const savedTasks = localStorage.getItem("todos");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  return (
    <ToDoContext.Provider value={{ toDo, setToDo }}>
      {children}
    </ToDoContext.Provider>
  );
};
