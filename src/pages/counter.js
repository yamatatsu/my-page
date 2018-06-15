import React from "react";
import Link from "gatsby-link";
import {Counter} from "react-powerplug"

export default () => (
  <Counter>
    {({ count, inc, dec }) => (
      <div>
        <h1>Counter</h1>
        <p>current count: {count}</p>
        <button onClick={inc}>plus</button>
        <button onClick={dec}>minus</button>
        <br/>
        <br/>
        <Link to="/">back home</Link>
      </div>
    )}
  </Counter>
);
