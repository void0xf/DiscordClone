"use client";

import React from "react";
import TabTittleButton from "../../common/TabTitle/TabTittleButton";
import AddFriendButton from "../../common/TabTitle/AddFriendButton";
import { DisplayFriendsTabs } from "./friends.t";

interface FriendsNavigationProps {
  selectedTab: DisplayFriendsTabs;
  setSelectedTab: React.Dispatch<React.SetStateAction<DisplayFriendsTabs>>;
}

const FriendsNavigation: React.FC<FriendsNavigationProps> = ({
  selectedTab,
  setSelectedTab,
}) => {
  return (
    <div className="flex gap-4 items-baseline">
      <TabTittleButton
        label="Online"
        onclickHandler={setSelectedTab}
        selectedTab={selectedTab}
      />
      <TabTittleButton
        label="All"
        onclickHandler={setSelectedTab}
        selectedTab={selectedTab}
      />
      <TabTittleButton
        label="Pending"
        onclickHandler={setSelectedTab}
        selectedTab={selectedTab}
      />
      <TabTittleButton
        label="Blocked"
        onclickHandler={setSelectedTab}
        selectedTab={selectedTab}
      />
      <AddFriendButton
        label="Add Friend"
        onclickHandler={setSelectedTab}
        selectedTab={selectedTab}
      />
    </div>
  );
};

export default FriendsNavigation;
