import { X } from "lucide-react";
import { ButtonHTMLAttributes } from "react";

interface INotificationActionProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ElementType;
}

export function NotificationAction({
  icon: Icon,
  ...rest
}: INotificationActionProps) {
  return (
    <button {...rest}>
      <Icon />
    </button>
  );
}
