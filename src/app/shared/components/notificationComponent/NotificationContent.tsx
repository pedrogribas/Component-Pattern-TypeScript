import { ElementType } from "react";

interface INotificationContentProps {
  content: string;
}

export function NotificationContent({ content }: INotificationContentProps) {
  return <p>{content}</p>;
}
