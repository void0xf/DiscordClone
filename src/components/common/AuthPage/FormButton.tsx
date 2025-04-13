import ToolTip from "../ToolTip";
import { useState } from "react";
interface FromButton {
  label: string;
  onClickHandler: () => void;
  activeBoolean: boolean;
  isLoading?: boolean;
}

const FormButton: React.FC<FromButton> = ({
  label,
  onClickHandler,
  activeBoolean,
  isLoading = false,
}) => {
  const [isShown, setIsShown] = useState(false);

  const LoadingDots = () => (
    <div className="flex space-x-1 justify-center items-center">
      <div className="animate-bounce delay-100 h-2 w-2 bg-white rounded-full"></div>
      <div className="animate-bounce delay-200 h-2 w-2 bg-white rounded-full"></div>
      <div className="animate-bounce delay-300 h-2 w-2 bg-white rounded-full"></div>
    </div>
  );

  return (
    <div
      className="relative flex justify-center w-full"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      {activeBoolean ? (
        <>
          <button
            disabled={isLoading}
            className="bg-lightBlue w-full mt-2 h-11 rounded-sm text-whiteMain font-semibold hover:bg-brandColor duration-200 flex justify-center items-center"
            onClick={() => {
              if (!isLoading) {
                onClickHandler();
              }
            }}
          >
            {isLoading ? <LoadingDots /> : label}
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
            type="submit"
          >
            {label}
          </button>
        </>
      )}
    </div>
  );
};

export default FormButton;
