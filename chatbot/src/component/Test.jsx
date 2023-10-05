import React, { useState } from "react";

import "./hide-scrol.css";
function LogoutButton() {
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  const handleLogout = () => {
    setIsConfirmOpen(true);
  };

  const handleConfirmLogout = () => {
    setIsConfirmOpen(false);
  };

  const handleCancelLogout = () => {
    setIsConfirmOpen(false);
  };

  return (
    <div>
                <button className="flex" onClick={handleLogout}>
        <div
          className={`stroke-white cursor-pointer duration-500 ${
            isConfirmOpen ? "rotate-[360deg]" : ""
          }`}
        >
          <svg
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
            />
          </svg>
        </div>
        <span className="ml-2 font-normal font-['Inika'] text-white">
          Log out
        </span>
      </button>
      {isConfirmOpen && (
        <div className="fixed top-0 left-0  w-screen  flex items-center justify-center">
          <div className="bg-white p-4 rounded shadow-md">
            <p className="mb-4">Are you sure you want to logout?</p>
            <div className="flex justify-end">
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded mr-2"
                onClick={handleConfirmLogout}
              >
                Yes
              </button>
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded"
                onClick={handleCancelLogout}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
                </div>
  );
}

export default LogoutButton;
