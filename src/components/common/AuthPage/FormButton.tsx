import React from "react";

interface FromButton {
  label: string;
  onClickHandler: () => void;
}

const FormButton: React.FC<FromButton> = ({ label, onClickHandler }) => {
  return (
    <button
      className="bg-lightBlue w-full mt-6 max-h-min rounded-sm text-whiteMain font-semibold hover:bg-brandColor duration-200"
      onClick={() => {
        onClickHandler();
      }}
    >
      {label}
    </button>
  );
};

export default FormButton;
