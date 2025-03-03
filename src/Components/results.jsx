import React from "react";

export const Results = ({ results }) => {
  return (
    <div className="mt-5 p-4 w-full flex justify-center">
      <div className="bg-gray-100 w-7/8 p-4 rounded-lg shadow-md min-h-[200px]">
        <h2 className="text-lg font-semibold">Search Results:</h2>
        {results.length > 0 ? (
          <ul className="mt-2">
            {results.map((result, index) => (
              <li key={index} className="bg-white p-2 my-2 rounded-lg shadow">
                {result}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 mt-2">No results found.</p>
        )}
      </div>
    </div>
  );
};
