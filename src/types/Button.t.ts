import { ReactNode } from "react";

export enum HomePageButtonType {
  "white",
  "dark",
  "blue",
}

export enum HomePageButtonSize {
  "small",
  "large",
}

export enum SidebarButtonType {
  "home",
  "server",
}

export type HomePageButtonProps = {
  onClickHandler: () => void;
  text: string;
  Icon?: boolean;
  buttonType: HomePageButtonType;
  size: HomePageButtonSize;
};

export type SideBarButtonProps = {
  onClickHandler: () => void;
  text: string;
  Icon?: string;
  type: SidebarButtonType;
};

export type NavigationButtonProps = {
  children?: ReactNode;
  onClickHandler: () => void;
  label: string;
  Icon: ReactNode;
};
