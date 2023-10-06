import React from "react";
import { useState } from "react";

const TextField = (props) => {
  const [focused, setFocused] = useState(false);
  return (
    <div>
      <span
        style={{ color: props.error ? "#c0392b" : focused ? '#5738F0' : "" }}
      >
        {!!props.error ? props.error : props.label}
      </span>
      <div
        style={{
          border: !!props.error
            ? "2px solid #c0392b"
            : focused
            ? "2px solid #5738F0"
            : "1px solid #bdc3c7",
          borderRadius: 12,
          height: 54,
          display: "flex",
          alignItems: "center",
          paddingRight: 8,
          marginTop: 8,
        }}
      >
        <input
          style={{
            width: "100%",
            outline: "none",
            direction: "rtl",
            border: "none",
          }}
          name={props.name}
          onChange={props.onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      </div>
    </div>
  );
};

export default TextField;
