import type { UserProfileCardProps } from "../../types";

const UserProfileCard = ({
  user,
  showEmail = false,
  showRole = false,
}: UserProfileCardProps) => {
  return (
    <div>
      <h2>{user.name}</h2>
      {showEmail && <p>Email: {user.email}</p>}
      {showRole && <p>Role: {user.role}</p>}
    </div>
  );
};

export default UserProfileCard;