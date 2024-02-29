import * as React from 'react';
import { useState } from 'react';

const useCounter = () => {
    const [count, setCount] = useState(0);
    const increament = () => {
        setCount(count + 1);
    };
    const decreament = () => {
        setCount(count - 1);
    };
    return { count, increament, decreament };
};

const Button = ({ children }) => {
    return (React.createElement("button", { style: {
            padding: "10px 20px",
            fontSize: "1.2rem",
            borderRadius: "5px",
            cursor: "pointer",
            background: "blue",
            color: "white",
            border: "none",
        } }, children));
};

export { Button, useCounter };
