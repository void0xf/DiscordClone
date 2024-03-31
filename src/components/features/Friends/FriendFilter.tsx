import { useEffect, useRef, useState } from "react";
import { User } from "../../../types/user.t";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

interface FriendFilterProps {
  users: User[];
  setNewUsers: React.Dispatch<React.SetStateAction<User[]>>;
}

const FriendFilter: React.FC<FriendFilterProps> = ({ users, setNewUsers }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    if (inputValue !== "") {
      const filterdUsers = users.filter((user) => {
        if (inputRef.current) {
          if (user.nickName.toLowerCase().includes(inputValue.toLowerCase())) {
            return user;
          }
        }
      });
      setNewUsers(filterdUsers);
    } else {
      setNewUsers(users);
    }
  }, [inputValue]);

  return (
    <div className="relative">
      <input
        type="text"
        ref={inputRef}
        className="w-full py-1 px-2 rounded-md bg-SidebarBackground outline-none placeholder-TextGray text-white"
        placeholder="Search"
        onChange={() => {
          setInputValue(inputRef.current?.value as string);
        }}
      />
      <div className="absolute right-2 top-1 text-2xl font-extrabold">
        {inputRef.current?.value !== "" ? <IoMdClose /> : <CiSearch />}
      </div>
    </div>
  );
};

export default FriendFilter;
