import { UserStatus } from "../../types/user.t";

export function getStatusString(UserStatus: UserStatus) {
  switch (UserStatus) {
    case 0:
      return "Online";
    case 1:
      return "Offline";
    case 2:
      return "Idle";
    case 3:
      return "Do not Disturb";
  }
}
