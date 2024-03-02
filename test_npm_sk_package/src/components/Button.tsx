import * as React from "react";

type PropsType = {
  children: React.ReactNode;
};
const Button = ({ children }: PropsType) => {
  return (
    <button
      style={{
        padding: "10px 20px",
        fontSize: "1.2rem",
        borderRadius: "5px",
        cursor: "pointer",
        background: "blue",
        color: "white",
        border: "none",
      }}
    >
      {children}
    </button>
  );
};

export { Button };
