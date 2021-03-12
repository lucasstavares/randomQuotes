import React from "react";

function Quotation(props) {
    console.log(props)
  const quote = props.params.isLoaded 
    ? props.params.quote 
    : "God is dead.";
  const author = props.params.isLoaded
    ? props.params.author
    : "Nietzsche";
  return (
    <div>
      <h1 className="text-xl md:text-6xl lg:text-11xl">“{quote}”</h1>
      <p className="text-xl float-right md:text-4xl md:float-right lg:text-10xl">-{author}</p>
    </div>
  );
}

export default Quotation;
