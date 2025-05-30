import React, { useContext } from "react";
import { ToDoContext } from "../contexts/ToDoContext";

interface ToDoItem {
  task: string;
  isCompleted: boolean;
  taskType: string;
}

const Reports = () => {
  const context = useContext(ToDoContext);
  if (!context) {
    return null;
  }
  const { toDo } = context;
  const completedTasks = toDo.filter((item: ToDoItem) => item.isCompleted === true);

  return (
    <>
      <div className="flex  items-center justify-center w-full py-1 text-xl bg-[#F3F3F3]">
        Completed Tasks
      </div>

      <div className="flex items-center justify-center w-full">
        <div className="flex flex-col text-center mt-4 rounded-[2vw] w-1/2  bg-[#F1ECE6] p-4">
          {completedTasks.map((task : ToDoItem, index : number) => (
            <div key={index}>
              <div className="flex justify-between py-1">{task.task}</div>
              <div className="bg-[#76B7CD] h-[1px]"></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Reports;
