import React from "react";
import "./style.css";
export default function InputWidget(props) {
  const { value, onChange } = props;
  return (
    <div>
      <input
        className="inputWidget"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
}
