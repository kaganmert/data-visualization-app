import React from "react";
export const DataNotFound = () => {
  return (
    <div>
      <div className="flex items-center justify-center w-full px-6 py-12 dark:bg-gray-900 ">
        <div>
          <div className="flex flex-col justify-between h-48 max-w-xs px-4 py-5 mb-6 bg-white border border-gray-400 rounded-lg dark:bg-gray-800">
            <div>
              <h4 className="mb-3 font-bold text-gray-800 dark:text-gray-100">
                Connecting
              </h4>
              <div className="flex items-center justify-center p-5 space-x-2 bg-white">
                <div className="w-4 h-4 p-2 bg-blue-600 rounded-full animate-bounce ring-blue-800" />
                <div className="w-4 h-4 p-2 bg-green-600 rounded-full animate-bounce ring-green-800" />
                <div className="w-4 h-4 p-2 bg-red-600 rounded-full animate-bounce ring-red-800" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
