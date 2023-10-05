import React, { useState } from 'react';

function Test() {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [tasks, setTasks] = useState(["New Chat"]);
  const [editTaskIndex, setEditTaskIndex] = useState(null);
  const [editedTask, setEditedTask] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [pinnedMessages, setPinnedMessages] = useState([]); // State to store pinned messages

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

  const togglePinMessage = (index) => {
    if (pinnedMessages.includes(index)) {
      // If the message is already pinned, unpin it
      const updatedPinnedMessages = pinnedMessages.filter((item) => item !== index);
      setPinnedMessages(updatedPinnedMessages);
    } else {
      // If the message is not pinned, pin it
      setPinnedMessages([...pinnedMessages, index]);
    }
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
                  {/* ... Input and editing logic here ... */}
                </div>
              ) : (
                <div className="flex w-[230px] justify-between   hover:bg-gray-600 rounded-md  rounded-r-md p-2">
                  <span className=" flex ">
                    <div className="mr-2 stroke-white">
                      {/* Pin icon */}
                      <button
                        className={`stroke-white hover:scale-125 ${
                          pinnedMessages.includes(index)
                            ? 'text-yellow-500' // Change to your desired pinned style
                            : ''
                        }`}
                        onClick={() => togglePinMessage(index)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          width="20"
                          className="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 4v3m0 4h.01M12 17v1-7"
                          />
                        </svg>
                      </button>
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
                    {/* ... Edit and delete buttons ... */}
                  </div>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Test;
