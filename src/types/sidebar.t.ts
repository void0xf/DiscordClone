import { IconType } from "react-icons/lib";

export type SidebarTooltipProp = {
  label: string
}

export interface SidebarUltityButtonProps {
  label: string;
  Icon: IconType; 
  onClick: () => void;
  iconSize?: number; 
}