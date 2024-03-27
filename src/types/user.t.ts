import { ReactNode } from "react";

export interface User {
  id: string;
  nickName: string;
  profilePicture: string | "Default";
  name: string;
  servers: string[];
  friends: string[];
  outgoingFriendRequests: string[];
  incomingFriendRequests: string[];
  birth: string;
  DirectMessages: string[];
  status: UserStatus;
}

export interface ServerPreview {
  name: string;
  SvgIcon?: string;
}

export enum UserStatus {
  "online",
  "offline",
  "idle",
  "DnD",
}

export interface UserPreview {
  id: string;
  profilePicture: string | ReactNode;
  nickName: string;
  status: UserStatus;
}
