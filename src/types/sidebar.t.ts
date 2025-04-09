import { LucideIcon } from "lucide-react";

export type SidebarTooltipProp = {
  label: string;
};

export interface SidebarUltityButtonProps {
  label: string;
  Icon: LucideIcon;
  onClick: () => void;
  iconSize?: number;
}
