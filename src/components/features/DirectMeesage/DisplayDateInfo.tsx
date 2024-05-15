"use client";

import React from "react";

interface DisplayDateInfoProps {
  timestamp: number;
}
function getDateFromTimestamp(timestamp: number) {
  // Convert timestamp to milliseconds
  const timestampMilliseconds = timestamp;

  // Create a new Date object with the timestamp
  const date = new Date(timestampMilliseconds);

  // Extract the date components
  const year = date.getFullYear();
  const month = date.getMonth(); // Months are zero-based, so we add 1
  const day = date.getDate();

  const createdDate = new Date(
    year,
    Number(month),
    Number(`${day < 10 ? "0" + day : day}`)
  );
  return createdDate.toLocaleDateString("en-uk", {
    day: "numeric",
    year: "numeric",
    month: "long",
  });
}

const DisplayDateInfo: React.FC<DisplayDateInfoProps> = ({ timestamp }) => {
  return (
    <div className="relative my-4">
      <div className="text-gray-400 absolute top-0 font-ggSansSemiBold text-xs -translate-y-1/2 left-1/2 bg-LightGray z-40  w-24 text-center">
        {getDateFromTimestamp(timestamp)}
      </div>
      <hr className="relative z-10 border-t-SidebarGulidSeparator"></hr>
    </div>
  );
};

export default DisplayDateInfo;
