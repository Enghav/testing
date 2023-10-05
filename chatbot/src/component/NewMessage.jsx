import React from 'react'
import { useState } from 'react';

function NewMessage() {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const handleInputFocus = () => {
    setIsInputFocused(true);
  };
  const handleInputBlur = () => {
    setIsInputFocused(false);
  };
    const [open, setOpen] = useState(true);
    const [submenuOpen, setSubmenuOpen] = useState(false);
    const [tasks, setTasks] = useState(["New Chat"]);
    const [editTaskIndex, setEditTaskIndex] = useState(null);
    const [editedTask, setEditedTask] = useState("");
    const addMessage = () => {
      setTasks([...tasks, "New Chat"]);
    };
    const editTask = (index) => {
      setEditTaskIndex(index);
      setEditedTask(tasks[index]);
    };
    const saveEditedTask = (index) => {
      const updatedTasks = [...tasks];
      updatedTasks[index] = editedTask;
      setTasks(updatedTasks);
      setEditTaskIndex(null);
    };
    const deleteTask = (index) => {
      const updatedTasks = tasks.filter((_, i) => i !== index);
      setTasks(updatedTasks);
    };
  return (
    <div>
              <button
                className={` bg-gray-700 mt-2 hover:bg-slate-600 font-['Inika'] h-[40px] w-[230px] shadow  text-white py-2 px-4 rounded-md mb-4 duration-500 ${
                  !open && "scale-0"
                }`}
                onClick={addMessage}
              >
                Add New Message
              </button>
              <ul
                className="mt-2 translate-y-[-20px] w-[240px] list-decimal tran overflow-y-auto font-normal  font-['Inika'] text-white scrollable-container"
                style={{ maxHeight: "330px" }}
              >
                {tasks.map((task, index) => (
                  <li key={index} className=" w-[230px]">
                    <div className="">
                      {editTaskIndex === index ? (
                        <div className="flex items-center">
                          <input
                            type="text"
                            value={editedTask}
                            className={`w-[170px] bg-gray-700 p-2 mr-2 border-1 rounded-md ${
                              isInputFocused ? "no-border" : ""
                            }`}
                            onFocus={() => setIsInputFocused(true)}
                            onBlur={() => setIsInputFocused(false)}
                            onChange={(e) => setEditedTask(e.target.value)}
                          />

                          <button
                            className="stroke-white hover:stroke-green-500 hover:scale-125"
                            onClick={() => saveEditedTask(index)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              class="w-6 h-6"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M4.5 12.75l6 6 9-13.5"
                              />
                            </svg>
                          </button>
                          <button
                            className="stroke-white hover:stroke-red-500 hover:scale-125"
                            onClick={() => setEditTaskIndex(null)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              class="w-6 h-6"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        </div>
                      ) : (
                        <div className="flex w-[230px] justify-between   hover:bg-gray-600 rounded-md  rounded-r-md p-2">
                          <span className=" flex ">
                            <div className="mr-2 stroke-white">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                width="20"
                                class="w-6 h-6"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                                />
                              </svg>
                            </div>

                            <span
                              className=" scrollable-container overflow-x-auto "
                              style={{
                                maxWidth: "130px",
                                whiteSpace: "nowrap",
                              }}
                            >
                              {task}
                            </span>
                          </span>
                          <div className="translate-x-[px]">
                            <button
                              className=" stroke-white hover:scale-125 mr-2"
                              onClick={() => editTask(index)}
                            >
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 23"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  id="Vector"
                                  d="M17.2645 3.50568L19.2439 1.61515C19.6565 1.22128 20.2162 1 20.7997 1C21.3833 1 21.9429 1.22128 22.3556 1.61515C22.7682 2.00902 23 2.54323 23 3.10025C23 3.65727 22.7682 4.19148 22.3556 4.58535L9.8961 16.4785C9.27579 17.0702 8.51084 17.5052 7.67031 17.7441L4.51995 18.64L5.45861 15.6329C5.70885 14.8306 6.16452 14.1004 6.78446 13.5083L17.2645 3.50568ZM17.2645 3.50568L20.3597 6.4602M18.5998 14.1601V19.48C18.5998 20.1484 18.3216 20.7893 17.8265 21.2619C17.3314 21.7345 16.66 22 15.9598 22H3.63997C2.9398 22 2.26832 21.7345 1.77323 21.2619C1.27814 20.7893 1 20.1484 1 19.48V7.72019C1 7.05185 1.27814 6.41089 1.77323 5.9383C2.26832 5.46572 2.9398 5.20022 3.63997 5.20022H9.21322"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </button>
                            <button
                              className="hover:scale-125 stroke-white hover:stroke-red-400"
                              onClick={() => deleteTask(index)}
                            >
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 23"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  id="Vector"
                                  d="M15.6533 8.2696L15.192 17.9616M8.808 17.9616L8.34667 8.2696M21.6373 4.81277C22.0933 4.86877 22.5467 4.92799 23 4.99153M21.6373 4.81277L20.2133 19.7633C20.1552 20.372 19.8148 20.9405 19.26 21.3552C18.7053 21.7699 17.9772 22.0002 17.2213 22H6.77867C6.02279 22.0002 5.2947 21.7699 4.73997 21.3552C4.18525 20.9405 3.84479 20.372 3.78667 19.7633L2.36267 4.81277M21.6373 4.81277C20.0985 4.62487 18.5517 4.48226 17 4.38524M2.36267 4.81277C1.90667 4.86769 1.45333 4.92692 1 4.99045M2.36267 4.81277C3.90151 4.62487 5.44831 4.48227 7 4.38524M17 4.38524V3.39881C17 2.12807 15.7867 1.06841 14.2133 1.02856C12.7382 0.99048 11.2618 0.99048 9.78667 1.02856C8.21333 1.06841 7 2.12915 7 3.39881V4.38524M17 4.38524C13.6716 4.17748 10.3284 4.17748 7 4.38524"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
  )
}

export default NewMessage