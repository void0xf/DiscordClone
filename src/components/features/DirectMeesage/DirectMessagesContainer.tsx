"use client";

import React, { ReactNode } from "react";

const DirectMessagesContainer: React.FC<{
  children: ReactNode[] | ReactNode;
}> = ({ children }) => {
  return (
    <div className=" bg-LightGray w-full px-4 justify-between flex-col ">
      {children}
    </div>
  );
};

export default DirectMessagesContainer;
