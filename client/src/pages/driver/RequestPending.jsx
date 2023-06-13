import React from "react";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";

const RequestPending = () => {
  const navigate = useNavigate();
  return (
    <>
    <Navbar/>
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <p className="mt-2 text-center text-sm text-gray-600">
            <a className="flex flex-col items-center  text-zinc-600 hover:text-zinc-800 ">
              <span className="text-center uppercase font-bold">
                Request Pending
              </span>
              <span className="mt-1">
                Your request for driver is currently pending. You will be
                updated with the status through your registered email.{" "}
              </span>
            </a>
          </p>
        </div>

        <div className="bg-white max-w-md rounded overflow-hidden shadow-xl">
          <div>
            <button
              onClick={() => navigate("/driver/login")}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-zinc-100 hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              OKAY
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default RequestPending;
