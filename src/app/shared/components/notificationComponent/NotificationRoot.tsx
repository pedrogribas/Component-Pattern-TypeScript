import { ElementType, ReactNode } from "react";

interface INotificationRootProps {
  children: ReactNode;
}

export function NotificationRoot({ children }: INotificationRootProps) {
  return <div>{children}</div>;
}
