"use client";
import Image from "next/image";
import { useState } from "react";
import tick from "@/src/assets/photos/tick.png";

interface CheckBoxPolicyProps {
  activeButton: (isActive: boolean) => void;
}

const CheckBoxPolicy: React.FC<CheckBoxPolicyProps> = ({ activeButton }) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  return (
    <div
      className="flex pt-5 pb-2 relative cursor-pointer mb-3"
      onClick={() => {
        setIsClicked(!isClicked);
        activeButton(!isClicked);
      }}
    >
      {isClicked ? (
        <>
          <input
            type="checkbox"
            className="relative w-6 h-6 shrink-0 my-auto mr-2 appearance-none bg-lightBlue border-lightBlue  border-[1px] rounded-md"
          />
          <div className="scale-90 absolute top-[27px] left-1">
            <Image src={tick} alt="CheckBoxPolicy" />
          </div>
        </>
      ) : (
        <input
          type="checkbox"
          className="relative w-6 h-6 shrink-0 my-auto mr-2 appearance-none border-TextGray border-[1px] rounded-md"
        />
      )}
      <div className="text-[11px] text-zinc-300 leading-4 pr-3">
        Przeczytałem(-łam) i akceptuję
        <a
          href=""
          className="text-[12px] text-veryLightBlue pl-1 hover:underline cursor-pointer"
        >
          Warunki Korzystania z Usługi{" "}
        </a>
        oraz
        <a
          href=""
          className="text-[12px] text-veryLightBlue pl-1 hover:underline cursor-pointer"
        >
          Politykę Prywatności{" "}
        </a>
        Discorda.
      </div>
    </div>
  );
};

export default CheckBoxPolicy;
