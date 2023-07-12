import React, { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";

const Useffect = () => {
  const [counter, setCounter] = useState(0);
  const [user, setUser] = useState([]);

  useEffect(() => {
    Axios.get("https://randomuser.me/api").then((response) => {
      setUser(response.data);
      console.log(response.data);
    });
  }, []);
  return (
    <div>
      <p>Use Effect Hook</p>
      <h1>{counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increase
      </button>
    </div>
  );
};

export default Useffect;
