"use client";

import React, { ReactNode, useState, useEffect, useRef } from "react";

const HoverDropDownMenu = ({
  children,
  isActive,
}: {
  children: ReactNode;
  isActive: boolean;
}) => {
  const [ishovering, setIshovering] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIshovering(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={menuRef}
      onMouseEnter={() => {
        setIshovering(true);
      }}
      onMouseLeave={() => {
        setIshovering(false);
      }}
      className={`absolute ${
        isActive || ishovering ? "opacity-100 visible" : "opacity-0 invisible"
      } transition-opacity duration-150 ease-in-out z-50`}
    >
      {children}
    </div>
  );
};

export default HoverDropDownMenu;
