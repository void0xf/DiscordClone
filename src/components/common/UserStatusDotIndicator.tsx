"use client";

import React from "react";
import { UserStatus } from "../../types/user.t";

const UserStatusDotIndicator: React.FC<{ type: UserStatus }> = ({ type }) => {
  if (type === UserStatus.online) {
    return (
      <svg x="48" y="52" width="40" height="24" viewBox="0 0 40 24">
        <mask id=":rr:">
          <rect
            x="12"
            y="8"
            width="16"
            height="16"
            rx="8"
            ry="8"
            fill="white"
          ></rect>
          {/* <rect
            x="20"
            y="16"
            width="0"
            height="0"
            rx="0"
            ry="0"
            fill="black"
          ></rect> */}
          <polygon
            points="-3.464096,-4 3.464096,0 -3.464096,4"
            fill="black"
            transform="scale(0) translate(21 16)"
          ></polygon>
          <circle fill="black" cx="20" cy="16" r="0"></circle>
        </mask>
        <rect fill="#23a55a" width="40" height="24" mask="url(#:rr:)"></rect>
      </svg>
    );
  }
  if (type === UserStatus.idle) {
    return (
      <svg x="48" y="52" width="40" height="24" viewBox="0 0 40 24">
        <mask id=":rt:">
          <rect
            x="12"
            y="8"
            width="16"
            height="16"
            rx="8"
            ry="8"
            fill="white"
          ></rect>
          <rect
            x="10"
            y="6"
            width="12"
            height="12"
            rx="6"
            ry="6"
            fill="black"
          ></rect>
          <polygon
            points="-3.464096,-4 3.464096,0 -3.464096,4"
            fill="black"
            transform="scale(0) translate(21 16)"
          ></polygon>
          <circle fill="black" cx="20" cy="16" r="0"></circle>
        </mask>
        <rect fill="#f0b232" width="40" height="24" mask="url(#:rt:)"></rect>
      </svg>
    );
  }
  if (type === UserStatus.DnD) {
    return (
      <svg x="48" y="52" width="40" height="24" viewBox="0 0 40 24">
        <mask id=":rt:">
          <rect
            x="12"
            y="8"
            width="16"
            height="16"
            rx="8"
            ry="8"
            fill="white"
          ></rect>
          <rect
            x="14"
            y="14"
            width="12"
            height="4"
            rx="2"
            ry="2"
            fill="black"
          ></rect>
          <polygon
            points="-3.464096,-4 3.464096,0 -3.464096,4"
            fill="black"
          ></polygon>
          <circle fill="black" cx="20" cy="16" r="0"></circle>
        </mask>
        <rect fill="#f23f43" width="40" height="24" mask="url(#:rt:)"></rect>
      </svg>
    );
  }
  if (type === UserStatus.offline) {
    return (
      <svg x="48" y="52" width="40" height="24" viewBox="0 0 40 24">
        <mask id=":rt:">
          <rect
            x="12"
            y="8"
            width="16"
            height="16"
            rx="8"
            ry="8"
            fill="white"
          ></rect>
          <rect
            x="16"
            y="12"
            width="8"
            height="8"
            rx="4"
            ry="4"
            fill="black"
          ></rect>
          <polygon
            points="-3.464096,-4 3.464096,0 -3.464096,4"
            fill="black"
            transform="scale(0) translate(21 16)"
          ></polygon>
          <circle fill="black" cx="20" cy="16" r="0"></circle>
        </mask>
        <rect fill="#80848e" width="40" height="24" mask="url(#:rt:)"></rect>
      </svg>
    );
  }
};

export default UserStatusDotIndicator;
