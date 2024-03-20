import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { decriment, incriment, reset } from "../redux/counterSlice";

function Counter() {
  const [range,setRange] = useState("")
  /*hook - useDispatch() */
  const dispatch = useDispatch();

  /* useSelector - to access state in store */
  const count = useSelector((state,action) => state.counter.value);

  return (
    <div
      style={{ marginTop: "10vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <div
        style={{ height: "60vh", width: "60vh" }}
        className="border border-success p-3 shadow"
      >
        <h3 className="text-center mt-5">Counter Application</h3>
        <h1 style={{ fontSize: "80px" }} className="text-center mt-5">
          {count}
        </h1>
        <div className="d-flex justify-content-evenly align-items-center mt-5">
          <Button variant="success" onClick={() => dispatch(incriment(Number(range)))}>
            Incriment
          </Button>
          <Button variant="danger" onClick={() => dispatch(reset())}>
            Reset
          </Button>
          <Button variant="warning" onClick={() => dispatch(decriment(Number(range)))}>
            Dectriment
          </Button>
        </div>
        <input onChange={(e)=>setRange(e.target.value)}
          className="form-control w-75 mt-4 border-dark ms-5"
          type="text"
          placeholder="range"
        />
      </div>
    </div>
  );
}

export default Counter;
