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
  const month = date.getMonth() + 1; // Months are zero-based, so we add 1
  const day = date.getDate();

  // Return the date in the desired format
  return `${year}-${month < 10 ? "0" + month : month}-${
    day < 10 ? "0" + day : day
  }`;
}

const DisplayDateInfo: React.FC<DisplayDateInfoProps> = ({ timestamp }) => {
  return (
    <div className="text-gray-400 text-center border-t-[1px] justify-center border-gray-500 mt-2 mb-2">
      {getDateFromTimestamp(timestamp)}
    </div>
  );
};

export default DisplayDateInfo;
