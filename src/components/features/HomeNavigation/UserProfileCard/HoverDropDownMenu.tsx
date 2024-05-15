"use client";

import React, { ReactNode, useState } from "react";

const HoverDropDownMenu = ({
  children,
  isActive,
}: {
  children: ReactNode;
  isActive: boolean;
}) => {
  const [ishovering, setIshovering] = useState(false);

  return (
    <div
      onMouseEnter={() => {
        setIshovering(true);
      }}
      onMouseLeave={() => {
        setIshovering(false);
      }}
      className={`absolute ${isActive || ishovering ? "visible" : "hidden"}`}
    >
      {children}
    </div>
  );
};

export default HoverDropDownMenu;
