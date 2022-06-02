import React from "react";

export default function Checkbox({ label, value, onChange }) {
  return (
    <label>
      <input
        className="check-bx"
        type="checkbox"
        checked={value}
        onChange={onChange}
      />
      {label}
    </label>
  );
}
