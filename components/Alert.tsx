import React from "react";

interface IAlert {
  severity: "success" | "error" | "warning";
  message: string;
  visiabilty: boolean;
}

const Alert = ({ severity, message, visiabilty }: IAlert) => {
  const handleSeverity = () => {
    if (severity === "error") {
      return {
        styles: "bg-red-400",
        icon: (
          <i className="fi fi-sr-cross-circle leading-3 text-slate-800 text-lg"></i>
        ),
      };
    } else if (severity === "success") {
      return {
        styles: "bg-emerald-600",
        icon: (
          <i className="fi fi-sr-badge-check leading-3 text-slate-800 text-lg"></i>
        ),
      };
    } else {
      return {
        styles: "bg-yellow-500",
        icon: (
          <i className="fi fi-sr-engine-warning leading-3 text-slate-800 text-lg"></i>
        ),
      };
    }
  };
  return (
    <div
      className={`fixed top-[17%] left-1/2 translate-x-6 opacity-0 transition-all rounded shadow-lg duration-300 ease-in z-50 flex items-center justify-start gap-3 w-10/12 lg:w-auto px-4 py-3 ${
        handleSeverity().styles
      } ${visiabilty ? "show-alert" : ""}`}
    >
      <span className="grid place-content-center place-items-center">
        {handleSeverity().icon}
      </span>
      <p className="m-0 text-sm uppercase">{message}</p>
    </div>
  );
};
export default Alert;
