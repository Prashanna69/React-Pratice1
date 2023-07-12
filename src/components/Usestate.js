import React, { useState } from "react";

const Usestate = () => {
  const [name, setName] = useState("");

  function handleClick(e) {
    setName(e.target.value);
  }
  return (
    <div className="App">
      <h1>Ref in react</h1>
      <p>{name}</p>
      <input type="text" onChange={handleClick} />
    </div>
  );
};

export default Usestate;
