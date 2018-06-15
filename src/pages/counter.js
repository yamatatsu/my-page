import React from "react";
import {Counter} from "react-powerplug"

export default () => (
  <Counter>
    {({ count, inc, dec }) => (
      <div>
        <h1>Counter</h1>
        <p>current count: {count}</p>
        <button onClick={inc}>plus</button>
        <button onClick={dec}>minus</button>
      </div>
    )}
  </Counter>
);
