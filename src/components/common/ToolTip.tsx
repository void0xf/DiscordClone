"use client";

import React from "react";

interface ToolTip {
  text: string;
}

const ToolTip: React.FC<ToolTip> = ({ text }) => {
  return (
    <div className="w-[180px] h-[65px] bg-zinc-900 absolute bottom-[52px] rounded-md">
      <p className="leading-[15px] font-semibold px-[10px] py-2 ont-ggSansMedium text-[13px] text-slate-300">
        {text}
      </p>
    </div>
  );
};

export default ToolTip;
