import ToolTip from "../ToolTip";
import { useState } from "react";
interface FromButton {
  label: string;
  onClickHandler: () => void;
  activeBoolean: boolean;
}

const FormButton: React.FC<FromButton> = ({
  label,
  onClickHandler,
  activeBoolean,
}) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div
      className="relative flex justify-center w-full"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      {activeBoolean ? (
        <>
          <button
            className="bg-lightBlue w-full mt-2 h-11 rounded-sm text-whiteMain font-semibold hover:bg-brandColor duration-200"
            onClick={() => {
              onClickHandler();
            }}
          >
            {label}
          </button>
        </>
      ) : (
        <>
          {isShown ? (
            <ToolTip text="Musisz zaakceptować nasze Warunki Korzystania z Usługi, aby kontynuować" />
          ) : (
            ""
          )}
          <button
            className="bg-indigo-700 w-full mt-2 h-11 rounded-sm text-slate-400 font-semibold cursor-not-allowed"
            onClick={() => {
              onClickHandler();
            }}
          >
            {label}
          </button>
        </>
      )}
    </div>
  );
};

export default FormButton;
