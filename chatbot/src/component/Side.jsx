import { useState } from "react";
import ReactDOM from "react-dom";
import "./hide-scrol.css"
import NewMessage from "./NewMessage";
import Logout from "./logout";
function Side() {
  
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  
  const Themes = [
    {
      title: "Theme ",
      submenu: true,
      submenuItems: [{ title: "fill" }, { title: "fill" }, { title: "fill" }],
    },
  ];
  return (
    <div className="flex">
      <div
        className={`bg-gray-700 h-screen p-5 pt-8 ${
          open
            ? "w-[250px]  "
            : "w-[10px] translate-x-[-100px] "
        } duration-300 relative`}
      >
        <div
          className={` w-[30px] h-[30px]  bg-amber-200 flex justify-center items-center  rounded-full p-1  absolute -right-1 translate-x-[-15px] top-3 cursor-pointer  duration-500 ${
            !open && "rotate-[360deg]" && "translate-x-[60px]"
          }`}
          onClick={() => setOpen(!open)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </div>
        <div className="flex flex-col h-screen justify-between translate-y-[-50px]">
          <div
            className={`flex flex-col translate-x-[-40px] translate-y-[15px]  ${
              !open && "scale-0"
            }`}
          >
            <div className="w-[200px] flex justify-between">
              <div
                className={`bg-red-500 p-1 rounded-lg border-1 border-slate-800 cursor-pointer duration-500  ${
                  open && "rotate-[360deg]"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 002.248-2.354M12 12.75a2.25 2.25 0 01-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 00-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 01.4-2.253M12 8.25a2.25 2.25 0 00-2.248 2.146M12 8.25a2.25 2.25 0 012.248 2.146M8.683 5a6.032 6.032 0 01-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0115.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 00-.575-1.752M4.921 6a24.048 24.048 0 00-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 01-5.223 1.082"
                  />
                </svg>
              </div>
              <div class="text-white text-[20px] font-normal translate-x-[-25px] font-['Inika']">
                Chatbot UI
              </div>
              <button className="translate-y-[-2px] translate-x-[-4px]">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 37 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Frame">
                    <path
                      id="Vector"
                      d="M18.5 33.9114C9.98562 33.9114 3.08334 27.0091 3.08334 18.4948C3.08334 9.98034 9.98562 3.07806 18.5 3.07806C27.0143 3.07806 33.9167 9.98034 33.9167 18.4948C33.9167 27.0091 27.0143 33.9114 18.5 33.9114ZM18.5 30.8281C25.3116 30.8281 30.8333 25.3063 30.8333 18.4948C30.8333 11.6832 25.3116 6.1614 18.5 6.1614C11.6885 6.1614 6.16668 11.6832 6.16668 18.4948C6.16668 25.3063 11.6885 30.8281 18.5 30.8281ZM10.7922 23.6119C13.9983 23.3786 17.1387 22.0363 19.5901 19.5849C22.0415 17.1335 23.3839 13.993 23.6173 10.787C24.12 11.1215 24.5973 11.5105 25.0407 11.954C28.6531 15.5664 28.6531 21.4232 25.0407 25.0354C21.4284 28.6479 15.5716 28.6479 11.9593 25.0354C11.5158 24.5921 11.1268 24.1148 10.7922 23.6119Z"
                      fill="white"
                      className=""
                    />
                  </g>
                </svg>
              </button>
            </div>
            <div className="w-[230px] h-[0.5px] mt-1 bg-white"></div>
            <div>
             <NewMessage/>
            </div>
          </div>
          <div className=" flex  justify-center  translate-y-[-0px]">
            <div className="grid gap-y-4">
              <div
                className={` w-[230px]  flex justify-between  pt-2 pl-1 pr-1 h-[40px]  bg-gray-700 rounded-[5px] shadow duration-500  ${
                  !open && "scale-0"
                }`}
              >
                <div
                  className={` cursor-pointer duration-500 ${
                    open && "rotate-[360deg]"
                  }`}
                  onClick={() => setOpen(open)}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 27 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      id="Vector"
                      d="M13.5 0C20.955 0 27 5.37 27 12C27 16.1401 23.64 19.4999 19.4999 19.4999H16.845C15.6001 19.4999 14.595 20.505 14.595 21.75C14.595 22.32 14.82 22.845 15.165 23.235C15.525 23.64 15.75 24.165 15.75 24.75C15.75 25.9951 14.715 27 13.5 27C6.045 27 0 20.955 0 13.5C0 6.045 6.045 0 13.5 0ZM7.425 13.5C8.54338 13.5 9.45 12.5933 9.45 11.475C9.45 10.3566 8.54338 9.45 7.425 9.45C6.30662 9.45 5.4 10.3566 5.4 11.475C5.4 12.5933 6.30662 13.5 7.425 13.5ZM19.575 13.5C20.6933 13.5 21.6 12.5933 21.6 11.475C21.6 10.3566 20.6933 9.45 19.575 9.45C18.4567 9.45 17.55 10.3566 17.55 11.475C17.55 12.5933 18.4567 13.5 19.575 13.5ZM13.5 9.45C14.6183 9.45 15.525 8.54338 15.525 7.425C15.525 6.30662 14.6183 5.4 13.5 5.4C12.3817 5.4 11.475 6.30662 11.475 7.425C11.475 8.54338 12.3817 9.45 13.5 9.45Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div class="text-white font-normal font-['Inika'] translate-x-[-50px]">
                  Theme
                </div>
                {Themes.map((theme, index) => (
                  <>
                    {theme.submenu && open && (
                      <svg
                        width="10"
                        height="15"
                        viewBox="0 0 18 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          id="Polygon 2"
                          d="M9 15L17.6603 0H0.339746L9 15Z"
                          fill="#D9D9D9"
                          className=""
                          onClick={() => setSubmenuOpen(!submenuOpen)}
                        />
                      </svg>
                    )}
                  </>
                ))}
              </div>
              <div
                className={` w-[230px]  flex justify-between   pt-2 pl-1 pr-1 h-[40px]  bg-gray-700 rounded-[5px] shadow duration-500 ${
                  !open && "scale-0"
                }`}
              >
                <div class="text-white font-normal font-['Inika'] translate-x-[30px]">
                  Model
                </div>
                {Themes.map((theme, index) => (
                  <>
                    {theme.submenu && open && (
                      <svg
                        width="10"
                        height="15"
                        viewBox="0 0 18 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          id="Polygon 2"
                          d="M9 15L17.6603 0H0.339746L9 15Z"
                          fill="#D9D9D9"
                          className=""
                          onClick={() => setSubmenuOpen(!submenuOpen)}
                        />
                      </svg>
                    )}
                  </>
                ))}
              </div>
              <div className={`w-[230px] h-[1px] bg-white ${ !open && "scale-0"}`}></div>
              <div className="grid gap-2 ">
                <div className="flex ">
                  <div
                    className={`stroke-white  cursor-pointer   duration-500 ${
                      open && "rotate-[360deg]"
                    }`}
                    onClick={() => setOpen(!open)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <span className="ml-2 font-normal font-['Inika'] text-white">
                    Option
                  </span>
                </div>
                <div >
              <Logout/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}export default Side;