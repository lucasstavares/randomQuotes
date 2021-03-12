import React, { useState } from "react";
import Quotation from "./quotations";

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [author, setAuthor] = useState([]);
  const [quote, setQuote] = useState([]);

  const handleOnClick = () => {
    fetch("https://api.quotable.io/random?maxLength=33")
      .then((response) => response.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setAuthor(data.author);
          setQuote(data.content);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  };

  return (
    <div className="flex h-screen">
      <div className="m-auto flex flex-col">
        <Quotation params={{ author, quote, isLoaded }} />
        <button
          className="absolute text-lg md:text-base xl:text-5xl  bottom-0 left-0 md:left-2/3 md:bottom-1/4 w-full h-24 md:h-12 md:w-36 xl:w-96 xl:h-36 bg-white hover:bg-gray-100 text-gray-800 font-semibold md:py-2 md:px-4 py-1 px-2 border border-gray-400 rounded shadow focus:outline-none"
          onClick={handleOnClick}
        >
          New Quote
        </button>
      </div>
    </div>
  );
}

export default App;
