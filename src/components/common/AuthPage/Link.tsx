"use client";
import { useRouter } from "next/navigation";
import React from "react";

interface Link {
  label: string;
  navigateTo: string;
}

const Link: React.FC<Link> = ({ label, navigateTo }) => {
  const router = useRouter();

  return (
    <div
      className="text-veryLightBlue pl-2 hover:underline text-sm cursor-pointer pb-4"
      onClick={() => {
        router.push(navigateTo);
      }}
    >
      {label}
    </div>
  );
};

export default Link;
