import React, { useState } from "react";
import { Results } from "./results";

export const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return;

    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });

      const data = await response.json();
      setResults([data.response|| "No response received."]);
    } catch (error) {
      console.error("Frontend Error:", error);
      setResults(["Error fetching response"]);
    }
    setLoading(false);
  };
  
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div>
      <div className="mt-5 text-black justify-center p-4 flex flex-col lg:flex-row gap-4 text-xl items-center">
        <input
          type="text"
          className="border-2 bg-gray-200 rounded-lg border-gray-500 p-2 focus:outline-none focus:border-blue-500 transition-all"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 transition-all text-white p-2 cursor-pointer rounded-lg w-full lg:w-30"
          onClick={handleSearch}
          disabled={loading}
        >
          {loading ? "Loading..." : "Search"}
        </button>
      </div>
      <Results results={results} />
    </div>
  );
};
