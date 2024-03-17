import { ReactNode } from "react";

export interface User {
  id: string;
  nickName: string;
  profilePicture: string | "Default";
  name: string;
  servers: string[];
  friends: string[];
  birth: string;
}

export interface ServerPreview {
  name: string;
  SvgIcon?: string;
}

export enum UserState {
  "online",
  "offline",
  "idle",
  "DnD",
}

export interface UserPreview {
  id: string;
  profilePicture: string | ReactNode;
  nickName: string;
  status: UserState;
}
