import React, { KeyboardEvent, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SET_CITY } from "../store/types";
import { InitialStateType } from "../store/store";

function Input() {
  const city = useSelector((store: InitialStateType) => store.city);
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const inputChange = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      dispatch({ type: SET_CITY, payload: input });
      setInput("");
    }
  };

  return (
    <div>
      <p>Place: {city}</p>
      <input
        list="cities"
        name="city"
        onKeyPress={inputChange}
        placeholder={city}
        maxLength={50}
        onChange={(e: any) => setInput(e.target.value)}
        value={input}
      />
      <datalist id="cities">
        <option>Malyn</option>
        <option>Kiev</option>
        <option>Kharkiv</option>
        <option>Odesa</option>
        <option>Dnipro</option>
        <option>Lviv</option>
      </datalist>
    </div>
  );
}

export default Input;
