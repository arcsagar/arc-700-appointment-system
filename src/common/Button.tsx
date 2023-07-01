import React from "react";

const Button: React.FC<{
  btName: string;
  btFun: () => void;
  btType?: "bt-error" | "bt-success" | "bt-warning ";
}> = (props) => {
  const { btName, btFun, btType } = props;

  const bgColor =
    btType === "bt-error"
      ? "bg-red-500"
      : btType === "bt-success"
      ? "bg-green-500"
      : "bg-yellow-500";

      const btClass = `${bgColor} hover:bg-cyan-500 text-black font-bold py-2 px-4 rounded`
  return (
    <button
      onClick={() => btFun()}
      className={btClass}
    >
      {btName}
    </button>
  );
};

export default Button;
