"use client";

import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import DirectMessagesNavigation from "./DirectMessagesNavigation";
import FindOrStartConversation from "./FindOrStartConversation";
import NavigationButtton from "./NavigationButtton";
import UserProfileHomeNavigation from "./UserProfile";
import { useParams, useRouter } from "next/navigation";

const NavFriendsIcon = () => (
  <svg
    className="linkButtonIcon__2f35b"
    aria-hidden="true"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M13 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
      className=""
    ></path>
    <path
      fill="currentColor"
      d="M3 5v-.75C3 3.56 3.56 3 4.25 3s1.24.56 1.33 1.25C6.12 8.65 9.46 12 13 12h1a8 8 0 0 1 8 8 2 2 0 0 1-2 2 .21.21 0 0 1-.2-.15 7.65 7.65 0 0 0-1.32-2.3c-.15-.2-.42-.06-.39.17l.25 2c.02.15-.1.28-.25.28H9a2 2 0 0 1-2-2v-2.22c0-1.57-.67-3.05-1.53-4.37A15.85 15.85 0 0 1 3 5Z"
      className=""
    ></path>
  </svg>
);

const NitroIcon = () => (
  <svg
    className="linkButtonIcon__2f35b"
    aria-hidden="true"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M15 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      className=""
    ></path>
    <path
      fill="currentColor"
      fill-rule="evenodd"
      d="M7 4a1 1 0 0 0 0 2h3a1 1 0 1 1 0 2H5.5a1 1 0 0 0 0 2H8a1 1 0 1 1 0 2H6a1 1 0 1 0 0 2h1.25A8 8 0 1 0 15 4H7Zm8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
      clip-rule="evenodd"
      className=""
    ></path>
    <path
      fill="currentColor"
      d="M2.5 10a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2h.5Z"
      className=""
    ></path>
  </svg>
);

const MessageRequestIcon = () => (
  <svg
    className="linkButtonIcon__2f35b"
    aria-hidden="true"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M1.16 5.02c-.1.28.04.58.29.74l10.27 6.85a.5.5 0 0 0 .56 0l10.27-6.85c.25-.16.38-.46.29-.74A3 3 0 0 0 20 3H4a3 3 0 0 0-2.84 2.02Z"
      className=""
    ></path>
    <path
      fill="currentColor"
      d="M23 8.8a.5.5 0 0 0-.78-.41l-9.53 6.35c-.42.28-.96.28-1.38 0L1.78 8.39A.5.5 0 0 0 1 8.8V18a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V8.8Z"
      className=""
    ></path>
  </svg>
);

const ShopIcon = () => (
  <svg
    className="linkButtonIcon__2f35b"
    aria-hidden="true"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    width="23"
    height="23"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M2.63 4.19A3 3 0 0 1 5.53 2H7a1 1 0 0 1 1 1v3.98a3.07 3.07 0 0 1-.3 1.35A2.97 2.97 0 0 1 4.98 10c-2 0-3.44-1.9-2.9-3.83l.55-1.98ZM10 2a1 1 0 0 0-1 1v4a3 3 0 0 0 3 3 3 3 0 0 0 3-2.97V3a1 1 0 0 0-1-1h-4ZM17 2a1 1 0 0 0-1 1v3.98a3.65 3.65 0 0 0 0 .05A2.95 2.95 0 0 0 19.02 10c2 0 3.44-1.9 2.9-3.83l-.55-1.98A3 3 0 0 0 18.47 2H17Z"
      className=""
    ></path>
    <path
      fill="currentColor"
      d="M21 11.42V19a3 3 0 0 1-3 3h-2.75a.25.25 0 0 1-.25-.25V16a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v5.75c0 .14-.11.25-.25.25H6a3 3 0 0 1-3-3v-7.58c0-.18.2-.3.37-.24a4.46 4.46 0 0 0 4.94-1.1c.1-.12.3-.12.4 0a4.49 4.49 0 0 0 6.58 0c.1-.12.3-.12.4 0a4.45 4.45 0 0 0 4.94 1.1c.17-.07.37.06.37.24Z"
      className=""
    ></path>
  </svg>
);

const Navigation = () => {
  const user = useSelector((state: RootState) => state.user);
  const path = useParams();
  const router = useRouter();

  return (
    <div className=" bg-DmsNavigationBg h-full w-60 flex justify-between flex-col">
      <div>
        <div className="h-12 flex justify-center pt-[0.6rem] pb-2  border-b-[2px] border-notQuiteBlack">
          <FindOrStartConversation />
        </div>
        <div className="text-TextGray px-3 py-2 gap-[0.2px] flex flex-col">
          <NavigationButtton
            label="Friends"
            onClickHandler={() => {
              router.push("/channels/@me");
            }}
            Icon={<NavFriendsIcon />}
            isActive={path.id === "%40me"}
          />
          <NavigationButtton
            label="Nitro"
            onClickHandler={() => {}}
            Icon={<NitroIcon />}
            isActive={false}
          />
          <NavigationButtton
            label="Message Requests"
            onClickHandler={() => {}}
            Icon={<MessageRequestIcon />}
            isActive={false}
          />
          <NavigationButtton
            label="Shop"
            onClickHandler={() => {}}
            Icon={<ShopIcon />}
            isActive={false}
          />
        </div>
        <DirectMessagesNavigation />
      </div>
      <div>
        <UserProfileHomeNavigation user={user} />
      </div>
    </div>
  );
};

export default Navigation;
