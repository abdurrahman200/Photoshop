import React, { useState } from "react";

const Search = ({ searchText }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };

  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
        <form className="w-full max-w-sm" onSubmit={onSubmit}>
          <div className="flex items-center border-black border-b-2 font-bold border-teal-500 py-4">
            <input
              onChange={(e) => setText(e.target.value)}
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Search Image Term..."
            />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
             Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
