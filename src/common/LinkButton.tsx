import React from "react";
import { Link } from "react-router-dom";

const LinkButton: React.FC<{
  btName: string;
  btFun: () => void;
  btType?: "bt-error" | "bt-success" | "bt-warning ";
  btPath: string
}> = (props) => {
  const { btName, btFun, btType, btPath } = props;

  const bgColor =
    btType === "bt-error"
      ? "bg-red-500"
      : btType === "bt-success"
      ? "bg-green-500"
      : "bg-yellow-500";

      const btClass = `${bgColor} hover:bg-cyan-500 text-black font-bold py-2 px-4 rounded`
  return (
    <Link
    to={btPath}
      onClick={() => btFun()}
      className={btClass}
    >
      {btName}
    </Link>
  );
};

export default LinkButton;
