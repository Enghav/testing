import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import "./hide-scrol.css";
import { Link } from "react-router-dom";

function Logout() {
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

  const modal = (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div className="logout-button-blur"></div>
      <div className="bg-gray-700 w-[300px] h-[170px] p-4 pt-2 grid gap-3 rounded shadow-md relative z-10">
        <p className=" font-['Inika'] text-[22px] translate-x-[10px] text-white">
          Logout
        </p>
        <div className="w-[270px]  bg-gray-300 h-[0.5px] translate-x-[-10px]"></div>
        <div class=" text-white text-[12px] font-normal font-['Inika']">
          You have to login again in order to use the chatbot!!
        </div>
        <div className="flex justify-start">
          <button
            className="bg-slate-100 hover:bg-gray-200 text-black mr-3 p-3 pt-1 pb-1 rounded"
            onClick={handleCancelLogout}
          >
            No
          </button>
            <button
            className="bg-slate-100 hover:bg-red-500 cursor-pointer text-red-500  hover:text-slate-100  rounded p-3 pt-1 pb-1 mr-2"
            onClick={handleConfirmLogout}
          >
            Yes I'm sure
          </button>
        </div>
      </div>
    </div>
  );

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
      {isConfirmOpen &&
        ReactDOM.createPortal(
          modal,
          document.getElementById("modal-root") // Create a div with id="modal-root" in your HTML
        )}
    </div>
  );
}

export default Logout;
