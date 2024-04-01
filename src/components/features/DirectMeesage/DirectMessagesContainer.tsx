import React, { ReactNode } from "react";

const DirectMessagesContainer: React.FC<{ children: ReactNode[] }> = ({
  children,
}) => {
  return <div className=" bg-LightGray w-full px-4">{children}</div>;
};

export default DirectMessagesContainer;
