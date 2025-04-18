"use client";
import { ServerPreview } from "../../../types/user.t";
import SidebarUtilityButton from "./SidebarUtilityButton";
import { Plus } from "lucide-react";
import { Compass } from "lucide-react";
import { Download } from "lucide-react";
import SidebarGulidSeparator from "./SidebarGulidSeparator";
import SidebarServerButton from "./SidebarServerButton";
import SidebarHomeButton from "./SidebarHomeButton";

import { redirect } from "next/navigation";

const Sidebar: React.FC<{ servers: ServerPreview[] }> = ({ servers }) => {
  // const user = useSelector((state: RootState) => state.user);
  // const { conversationID } = useParams();
  // const [documentTitle, setDocumentTitle] = useState("Discord");
  // const nav = useNavigate();
  // const location = useLocation();
  // useEffect(() => {
  //   const NotifcaiotnCount = user.incomingFriendRequests.length;
  //   if (location.pathname === "/channels/@me") {
  //     document.title = `${
  //       NotifcaiotnCount > 0 ? `(${NotifcaiotnCount}) ` : ""
  //     } Discord | Friends`;
  //   }
  //   async function fetchUser() {
  //     if (conversationID) {
  //       const user = await getStrangerInfoFromConversation(
  //         conversationID as string
  //       );
  //       setDocumentTitle(`Discord | @${user?.name}`);
  //     }
  //   }
  //   if (location.pathname === `/channels/${conversationID}`) {
  //     fetchUser();
  //     document.title = documentTitle;
  //   }

  //   const existingLink = document.querySelector('link[rel="icon"]');
  //   if (existingLink && NotifcaiotnCount > 0) {
  //     document.head.removeChild(existingLink);
  //     const link = document.createElement("link");
  //     link.rel = "icon";
  //     link.href = getNotifcationIconString();
  //     link.type = "image/png";

  //     document.head.appendChild(link);
  //   } else {
  //     if (existingLink) {
  //       document.head.removeChild(existingLink);

  //       const link = document.createElement("link");
  //       link.rel = "icon";
  //       link.href = Logo;
  //       link.type = "image/svg+xml";
  //       document.head.appendChild(link);
  //     }
  //   }

  // Append the new link element to the document head

  // Optionally, return a cleanup function if needed
  // }, [location, user.incomingFriendRequests.length]);

  return (
    <div className="w-[72px] h-full bg-SidebarBackground flex flex-col gap-1 p-2 hidde-scrollbar overflow-y-scroll overflow-x-hidden">
      <SidebarHomeButton
        onClickHandler={() => {
          redirect("/channels/@me");
        }}
      />
      <SidebarGulidSeparator />

      {servers.map((server: ServerPreview) => (
        <SidebarServerButton
          onClickHandler={() => {}}
          text={server.name}
          icon={server.SvgIcon}
        />
      ))}

      <SidebarUtilityButton
        label="Add a Server"
        iconSize={24}
        onClick={() => {}}
        Icon={Plus}
      />
      <SidebarUtilityButton
        label="Explore Discoverable Servers"
        iconSize={24}
        onClick={() => {}}
        Icon={Compass}
      />

      <SidebarGulidSeparator />

      <SidebarUtilityButton
        label="Download Apps"
        iconSize={24}
        onClick={() => {}}
        Icon={Download}
      />
    </div>
  );
};

export default Sidebar;
