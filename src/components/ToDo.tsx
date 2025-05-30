import React, { useState } from "react";
import { useEffect } from "react";
import { Trash, CircleCheck, Circle, CircleX } from "lucide-react";
import { ToDoContext } from "../contexts/ToDoContext";
import { useContext } from "react";

interface ToDoItem {
  task: string;
  isCompleted: boolean;
  taskType: string;
}

const ToDo = ({ taskType }: { taskType: string }) => {
  const context = useContext(ToDoContext);
  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(context?.toDo));
  }, [context?.toDo]);

  if (!context) {
    return null;
  }

  const { toDo, setToDo } = context;

  const addTask = () => {
    if (input === "") {
      return;
    }

    const newTask = {
      task: input,
      isCompleted: false,
      taskType: taskType,
    };

    setToDo([...toDo, newTask]);
    setInput("");
  };

  const deleteTask = (index: number) => {
    const updatedTask = toDo.filter(
      (task: ToDoItem, id: number) => id !== index
    );
    setToDo(updatedTask);
  };

  const updateTask = (index: number) => {
    const updatedtask = toDo.map((task: ToDoItem, id: number) => {
      if (id === index) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setToDo(updatedtask);
  };

  const clearCompleted = () => {
    const newTasks = toDo.filter(
      (task:ToDoItem) => task.isCompleted === false && task.taskType === taskType
    );
    const otherTypeTasks = toDo.filter((task:ToDoItem) => task.taskType !== taskType);
    setToDo([...newTasks, ...otherTypeTasks]);
  };

  return (
    <>
      <div className="flex text-center items-center justify-center mt-4 w-full">
        <div className="w-1/2 flex justify-between py-2">
          <input
            type="text"
            placeholder="What do you need to do?"
            className="bg-[#F1ECE6] rounded-l-full py-1 px-3 w-full"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <button
            className="bg-[#76B7CD] rounded-r-full py-1 px-3 text-white"
            onClick={addTask}
          >
            ADD
          </button>
        </div>
      </div>

      {toDo.length > 0 && (
        <div className="flex items-center justify-center w-full">
          <div className="flex flex-col text-center mt-4 rounded-[2vw] w-1/2 bg-[#F1ECE6] p-4">
            {toDo.map(
              (task: ToDoItem, index: number) =>
                task.taskType === taskType && (
                  <div key={index}>
                    <div className="flex justify-between py-2 ">
                      <div
                        className="flex cursor-pointer"
                        onClick={() => updateTask(index)}
                      >
                        {task.isCompleted === false ? (
                          <Circle color="#737373" />
                        ) : (
                          <CircleCheck color="#D98326" />
                        )}
                        <p
                          className={`px-1 bg-[#F1ECE6] ${
                            task.isCompleted ? "line-through text-gray-400" : ""
                          }`}
                        >
                          {task.task}
                        </p>
                      </div>
                      <button onClick={() => deleteTask(index)}>
                        <Trash color="#B30B04" />
                      </button>
                    </div>
                    <div className="bg-[#76B7CD] h-[1px]"></div>
                  </div>
                )
            )}

            <div className="mt-16 flex justify-end">
              <CircleX color="#D98326" />
              <button
                className="text-[#D98326] px-1"
                onClick={() => clearCompleted()}
              >
                Clear Completed
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ToDo;
