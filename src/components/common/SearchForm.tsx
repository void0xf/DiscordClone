import { Search, X } from "lucide-react";
import React, { useRef, useState } from "react";

const SearchForm = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState<string>("");
  () => {
    inputValue;
  };
  return (
    <div className="relative">
      <input
        type="text"
        ref={inputRef}
        className="w-full py-1 px-2 h-6 rounded-md bg-SidebarBackground outline-none placeholder-TextGray text-white"
        placeholder="Search"
        onChange={() => {
          setInputValue(inputRef.current?.value as string);
        }}
      />
      <div className="absolute right-0 top-0 -translate-x-2 translate-y-1 text-2xl font-extrabold">
        {inputRef.current?.value !== "" ? (
          <X strokeWidth={2} size={16} />
        ) : (
          <Search strokeWidth={2} size={16} />
        )}
      </div>
    </div>
  );
};

export default SearchForm;
