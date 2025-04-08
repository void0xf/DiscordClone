"use client";

import { Compass } from "lucide-react";
import { ArrowRight } from "lucide-react";

const ExploreDisoverableServers = () => {
  return (
    <div className="p-2 border-SelectedUserTab border-[2px] bg-FriendActionIconBackground max-w-fit flex items-center rounded-lg">
      <div className="h-9 w-9 bg-SidebarUltityIcon text-2xl text-white justify-center text-center flex items-center rounded-lg">
        <div>
          <Compass />
        </div>
      </div>
      <h2 className="text-whiteMain text-nowrap mx-2">
        Explore Discoverable Servers
      </h2>
      <div className="text-3xl mx-4">
        <ArrowRight />
      </div>
    </div>
  );
};

export default ExploreDisoverableServers;
