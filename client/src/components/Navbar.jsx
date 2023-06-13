import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();

  let hamBurger;
  menu
    ? (hamBurger =
        "lg:hidden ml-32 mt-2 cursor-pointer text-zinc-900 py-4 sm:ml-72 w-12")
    : (hamBurger =
        "lg:hidden ml-32 mt-2 cursor-pointer text-white py-4 sm:ml-72 w-12");

  return (
    <div className="bg-zinc-900 w-full h-20 grid grid-cols-2 fixed z-10">
      <div className="col-span-1">
        <div className="h-5 w-56 p-8 lg:ml-40 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 369.9130434782609 42.9360921187523"
            preserveAspectRatio="xMidYMid meet"
            className="css-1wu7qa0"
            id="hgfdecah"
          >
            <defs id="SvgjsDefs1011" />
            <g
              id="SvgjsG1012"
              featurekey="HdFLvg-0"
              transform="matrix(2.536231884057971,0,0,2.536231884057971,0,-25.434782608695656)"
              fill="#fff"
            >
              <g
                xmlns="http://www.w3.org/2000/svg"
                transform="translate(-270 -140)"
              >
                <g
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <path d="M279,161c-0.736,0-1.375,0.405-1.722,1c-0.172,0.295-0.278,0.635-0.278,1c0,1.102,0.897,2,2,2c1.103,0,2-0.898,2-2    c0-0.365-0.105-0.705-0.278-1C280.375,161.405,279.737,161,279,161z" />
                  <path d="M293,161c-0.736,0-1.375,0.405-1.722,1c-0.172,0.295-0.278,0.635-0.278,1c0,1.102,0.897,2,2,2c1.103,0,2-0.898,2-2    c0-0.365-0.105-0.705-0.278-1C294.375,161.405,293.737,161,293,161z" />
                  <path d="M299,159v-1l-6-1.715L286,152h-11v1h6v1h-11v1h12v1h-10v1h5v1h-2v1h-4v1h5v1h-1v1h-3v1h4c0-0.352,0.072-0.686,0.184-1    c0.414-1.162,1.512-2,2.816-2c1.305,0,2.402,0.838,2.816,2c0.111,0.314,0.184,0.648,0.184,1h8c0-0.352,0.072-0.686,0.184-1    c0.414-1.162,1.512-2,2.816-2c1.305,0,2.402,0.838,2.816,2c0.111,0.314,0.184,0.648,0.184,1h3v-1h1v-3H299z" />
                </g>
              </g>
            </g>
            <g
              id="SvgjsG1013"
              featurekey="VomJeJ-0"
              transform="matrix(3.0067293969941367,0,0,3.0067293969941367,93.83515134305529,-18.100516647437097)"
              fill="#fff"
            >
              <path d="M8.66 11.78 l0 -0.24 q0 -2.96 -2.2 -2.96 q-1.26 0 -1.82 1.15 t-0.56 3.39 q0 2.22 0.7 3.3 t2.04 1.08 q0.7 0 1.55 -0.33 t1.85 -1.05 q0.5 0.34 0.93 0.93 t0.53 1.13 q-0.46 0.44 -1.07 0.83 t-1.32 0.67 t-1.48 0.45 t-1.55 0.17 q-1.54 0 -2.6 -0.59 t-1.71 -1.57 t-0.94 -2.26 t-0.29 -2.66 q0 -1.8 0.45 -3.15 t1.22 -2.25 t1.81 -1.35 t2.22 -0.45 q1.2 0 2.18 0.32 t1.67 0.88 t1.06 1.32 t0.37 1.64 q0 1.78 -1.82 1.78 q-0.54 0 -1.22 -0.18 z M13.74 20 l0 -13.66 q0.62 -0.12 1.6 -0.12 t1.62 0.12 l0 13.66 q-0.64 0.12 -1.62 0.12 t-1.6 -0.12 z M25.22 8.98 l0.02 1.48 l0 9.54 q-0.68 0.12 -1.62 0.12 t-1.58 -0.12 l0 -11.02 l-1.28 0.02 l-2.06 0 q-0.12 -0.58 -0.12 -1.33 t0.12 -1.33 l9.9 0 q0.16 0.52 0.16 1.26 t-0.4 1.07 t-1.28 0.33 l-0.58 0 l-1.26 -0.02 l-0.02 0 z M35.28 9.72 l1.34 -3.38 q0.52 -0.12 1.34 -0.12 q0.88 0 1.52 0.24 l0.14 0.16 l-3.88 9.18 l0 4.2 q-0.62 0.12 -1.6 0.12 t-1.6 -0.12 l0 -4.28 l-3.86 -9 q0.92 -0.54 1.76 -0.54 t1.21 0.29 t0.65 0.99 l0.96 2.38 q0.52 1.28 0.9 2.86 l0.12 0 q0.32 -1.26 1 -2.98 z M52.620000000000005 11.78 l0 -0.24 q0 -2.96 -2.2 -2.96 q-1.26 0 -1.82 1.15 t-0.56 3.39 q0 2.22 0.7 3.3 t2.04 1.08 q0.7 0 1.55 -0.33 t1.85 -1.05 q0.5 0.34 0.93 0.93 t0.53 1.13 q-0.46 0.44 -1.07 0.83 t-1.32 0.67 t-1.48 0.45 t-1.55 0.17 q-1.54 0 -2.6 -0.59 t-1.71 -1.57 t-0.94 -2.26 t-0.29 -2.66 q0 -1.8 0.45 -3.15 t1.22 -2.25 t1.81 -1.35 t2.22 -0.45 q1.2 0 2.18 0.32 t1.67 0.88 t1.06 1.32 t0.37 1.64 q0 1.78 -1.82 1.78 q-0.54 0 -1.22 -0.18 z M60.980000000000004 17.14 q-0.54 0 -0.8 -0.02 l-0.86 2.9 q-0.48 0.12 -1.34 0.12 q-0.96 0 -1.56 -0.22 l-0.1 -0.16 l4.4 -13.42 q0.78 -0.12 1.82 -0.12 q1.18 0 1.88 0.14 l4.32 13.44 q-0.7 0.38 -1.58 0.38 q-1.04 0 -1.46 -0.36 t-0.72 -1.38 l-0.38 -1.32 q-0.26 0.02 -0.78 0.02 l-2.84 0 z M60.92 14.620000000000001 l0.8 -0.02 l1.46 0 q0.1 0 0.35 0.01 t0.37 0.01 l-0.34 -1.24 q-0.48 -1.68 -1.1 -4.12 l-0.12 0 q-0.16 0.86 -0.96 3.82 z M70.56 6.300000000000001 q1.62 -0.04 2.77 -0.06 t1.85 -0.02 q2.18 0 3.43 0.91 t1.25 2.73 q0 0.88 -0.5 1.64 t-1.28 1.1 q0.5 0.16 0.95 0.51 t0.77 0.82 t0.51 1.02 t0.19 1.13 q0 2.06 -1.31 3.05 t-3.71 0.99 q-0.74 0 -1.96 -0.02 t-2.96 -0.06 l-0.14 -0.14 l0 -13.46 z M75.24000000000001 13.98 l-1.66 0 l0 3.9 q0.52 -0.02 1.17 0 t1.21 -0.1 t0.94 -0.58 t0.38 -1.28 q0 -0.78 -0.49 -1.36 t-1.55 -0.58 z M73.58000000000001 8.48 l0 3.22 l1.42 0 q0.96 0 1.35 -0.47 t0.39 -1.15 t-0.4 -1.13 t-1.34 -0.45 l-0.81 0 t-0.61 -0.02 z M81.5 18.82 q0.06 -0.66 0.41 -1.32 t0.83 -1.08 q2.14 1.3 4.06 1.3 q0.84 0 1.23 -0.38 t0.39 -0.94 q0 -0.94 -1.26 -1.48 l-2.36 -1 q-1.38 -0.62 -2.12 -1.49 t-0.74 -2.21 q0 -0.92 0.37 -1.68 t1.04 -1.32 t1.59 -0.87 t2.04 -0.31 q2.24 0 4.52 1.14 q-0.1 1.54 -1.08 2.4 q-2.04 -0.98 -3.6 -0.98 q-0.8 0 -1.2 0.36 t-0.4 0.82 q0 0.78 1.18 1.26 l2.4 1.02 q1.52 0.64 2.27 1.64 t0.75 2.32 q0 0.94 -0.34 1.72 t-1.01 1.35 t-1.67 0.89 t-2.34 0.32 q-2.6 0 -4.96 -1.48 z" />
            </g>
          </svg>
        </div>
      </div>
      <div className="col-span-1">
        <div>
          <ul className="hidden lg:flex justify-end items-center text-white  mr-40 mt-5">
            <li>
              <div
                className="rounded-full py-2 px-6 ml-16 uppercase text-xs font-semibold cursor-pointer tracking-wider hover:bg-slate-400 hover:text-black hover:font-semibold duration-500"
                onClick={() => navigate("/dashboard")}
              >
                HOME
              </div>
            </li>
            <li>
              <div
                className="rounded-full py-2 px-6 ml-16 uppercase text-xs font-semibold cursor-pointer tracking-wider hover:bg-slate-400 hover:text-black hover:font-semibold duration-500"
                onClick={() => navigate("/login")}
              >
                RIDE
              </div>
            </li>
            <li>
              <div
                className="rounded-full py-2 px-6 ml-16 uppercase text-xs font-semibold cursor-pointer tracking-wider hover:bg-slate-400 hover:text-black hover:font-semibold duration-500"
                onClick={() => navigate("/driver/login")}
              >
                DRIVE
              </div>
            </li>
          </ul>
          <div className={hamBurger} onClick={() => setMenu(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>
        {menu && (
          <div className="lg:hidden bg-transparent h-10 w-44 ml-2 -mt-11 rounded-full md:ml-36">
            <ul className="cursor-pointer flex justify-end ">
              <li
                className="bg-zinc-900 text-white hover:bg-slate-50 hover:text-black px-2 py-2 rounded-full duration-500"
                onClick={() => navigate("/driver/login")}
              >
                <svg
                  className="tracking-wider w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                  />
                </svg>
              </li>
              <li
                className="bg-zinc-900 text-white hover:bg-slate-50 hover:text-black px-2 py-2  rounded-full duration-500"
                onClick={() => navigate("/login")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </li>
              <li
                className="bg-zinc-900 text-white hover:bg-slate-50 hover:text-black px-2 py-2  rounded-full duration-500"
                onClick={() => navigate("/dashboard")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
              </li>
              <li
                className="bg-zinc-900 text-white hover:bg-slate-50 hover:text-black px-2 py-2   rounded-full duration-500"
                onClick={() => setMenu(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
