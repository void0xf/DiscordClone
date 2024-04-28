import React from "react";

interface NotificationCounterDot {
  NotifcaiotnCount: number;
}

const NotificationCounterDot: React.FC<NotificationCounterDot> = ({
  NotifcaiotnCount,
}) => {
  return (
    <div>
      <div className="bg-red-500 text-whiteMain h-4 w-4 rounded-full text-center text-[14px] font-ggSansExtraBold flex items-center justify-center">
        {NotifcaiotnCount}
      </div>
    </div>
  );
};

export default NotificationCounterDot;
