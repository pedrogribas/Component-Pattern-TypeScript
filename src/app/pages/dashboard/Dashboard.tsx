import { Notification } from "../../shared/index";
import { Check, Rocket, X } from "lucide-react";

export const Dashboard = () => {
  return (
    <>
      <Notification.Root>
        <Notification.Icon icon={Rocket} />
        <Notification.Content content="Texto notification" />
        <Notification.Actions>
          <Notification.Action
            onClick={() => {
              alert("Sair");
            }}
            icon={X}
          />
          <Notification.Action icon={Check} />
        </Notification.Actions>
      </Notification.Root>

      <Notification.Root>
        <Notification.Icon icon={Rocket} />
        <Notification.Content content="Texto notification" />
        <Notification.Actions>
          <Notification.Action icon={Check} />
        </Notification.Actions>
      </Notification.Root>
    </>
  );
};
