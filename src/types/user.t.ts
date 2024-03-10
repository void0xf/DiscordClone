import {   ReactNode } from "react";

export interface User {
  id: string;
  name: string
  pronounce: string
  settings: Settings;
  ServerPreview: ServerPreview[];
  friends: UserPreview;
}

export interface Settings {

}

export interface ServerPreview {
 name: string;
 SvgIcon?: string;
}

export enum UserState {
  'online',
  'offline',
  'idle',
  'DnD'
}

export interface UserPreview {
  id: string;
  profilePicture: string | ReactNode;
  nickName: string;
  status: UserState;
}