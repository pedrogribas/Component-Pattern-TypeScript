import { ReactNode } from "react";

interface INotificationActionsProps {
  children: ReactNode;
}

export function NotificationActions({ children }: INotificationActionsProps) {
  return <div>{children}</div>;
}
