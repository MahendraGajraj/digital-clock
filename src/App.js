

import React, { useState } from "react";

const App = () => {
  let time = new Date().toLocaleTimeString();
  const [Ctime, SetCtime] = useState(time);
  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    SetCtime(time);
  };
  setInterval(UpdateTime, 1000);
  return (
    <div>
    <h2>Gajraj Digital Clock</h2>
    <br></br>
      <h1> {Ctime}</h1>
      <br></br>
      <h3>Made by MS Gajraj</h3>
    </div>
  );
};
export default App;
