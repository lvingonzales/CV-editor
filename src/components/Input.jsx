import { useState } from "react";
import "../Styles/input.css";

export default function Input({ type = "text", id, label }) {

    const [text, setValue] = useState("");

  return (
    <>
      <p className="text-display hidden">{text}</p>
      <div className="inputWrapper">
        <label htmlFor={id}>{label}</label>

        <input type={type} id={id} onChange={(event) => setValue(event.target.value)}/>
      </div>
    </>
  );
}
