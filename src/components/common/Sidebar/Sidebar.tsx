import React from "react";
import { ServerPreview } from "../../../types/user.t";
import SidebarUtilityButton from "./SidebarUtilityButton";
import { IoMdAdd } from "react-icons/io";
import { FaCompass } from "react-icons/fa";
import { TfiDownload } from "react-icons/tfi";
import SidebarGulidSeparator from "./SidebarGulidSeparator";
import { useNavigate } from "react-router-dom";
import SidebarServerButton from "./SidebarServerButton";
import SidebarHomeButton from "./SidebarHomeButton";

const Sidebar: React.FC<{ servers: ServerPreview[] }> = ({ servers }) => {
  const nav = useNavigate();

  return (
    <div className="w-[72px] h-full bg-SidebarBackground flex flex-col gap-1 p-2 hidde-scrollbar overflow-y-scroll overflow-x-hidden">
      <SidebarHomeButton
        onClickHandler={() => {
          nav("/channels/@me");
        }}
      />

      <SidebarGulidSeparator />

      {servers.map((server: ServerPreview) => (
        <SidebarServerButton
          onClickHandler={() => {
            console.log(server.name);
          }}
          text={server.name}
          icon={server.SvgIcon}
        />
      ))}

      <SidebarUtilityButton
        label="Add a Server"
        iconSize={24}
        onClick={() => {}}
        Icon={IoMdAdd}
      />
      <SidebarUtilityButton
        label="Explore Discoverable Servers"
        iconSize={24}
        onClick={() => {}}
        Icon={FaCompass}
      />

      <SidebarGulidSeparator />

      <SidebarUtilityButton
        label="Download Apps"
        iconSize={24}
        onClick={() => {}}
        Icon={TfiDownload}
      />
    </div>
  );
};

export default Sidebar;
