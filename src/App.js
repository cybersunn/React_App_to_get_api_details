import "./styles.css";
import React, { useState, useEffect } from "react";

//https://api.github.com/users/cybersunn

function App() {
  const [data1, setData1] = useState(null);
  const [usr, setUsr] = useState("cybersun");

  // console.log(finalUrl)

  useEffect(() => {
    if (!usr) return;
    fetch(`https://api.github.com/users/${usr}`)
      .then((response) => response.json())
      .then(setData1);
  }, [usr]);

  if (!data1) return;

  // console.log(JSON.stringify(data1));
  return (
    <div className="Main">
      <h1> Sunny </h1>
      <label>Enter UserName:</label>
      <input
        type="text"
        id="username"
        name="user"
        onChange={(event) => setUsr(event.target.value)}
      />
      <div>
        <p>{data1.message}</p>
        <h1>{data1.login}</h1>
        <h2>{data1.id}</h2>
        <p>{data1.location}</p>
        <img alt={data1.login} src={data1.avatar_url} />
      </div>
    </div>
  );
}

export default App;
