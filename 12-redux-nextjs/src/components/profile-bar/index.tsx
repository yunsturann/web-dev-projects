import { store } from "@/stores";
import { UserType } from "@/types/user";

export function ProfileBar() {
  const { user } = store.getState().user as { user: UserType };

  return (
    <div>
      Active user: <b>{user.name}</b>
    </div>
  );
}
