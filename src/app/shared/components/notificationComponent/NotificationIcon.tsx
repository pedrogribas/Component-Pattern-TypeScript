import { ElementType } from "react";
interface INotificationIconProps {
  icon: ElementType;
}

export function NotificationIcon({ icon: Icon }: INotificationIconProps) {
  return <Icon />;
}
