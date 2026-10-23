import type { UserProfileCardProps } from "../../types";

// Displays a user's name with optional email, role, and edit button.
// Extra content can be composed in via `children`.
const UserProfileCard = ({
  user,
  showEmail = false,
  showRole = false,
  onEdit,
  children,
}: UserProfileCardProps) => {
  return (
    <div className="card user-card">
      {user.avatarUrl && (
        <img className="avatar" src={user.avatarUrl} alt={`${user.name}'s avatar`} />
      )}
      <h2>{user.name}</h2>
      {showEmail && <p>Email: {user.email}</p>}
      {showRole && <p>Role: {user.role}</p>}
      {onEdit && (
        <button type="button" onClick={() => onEdit(user.id)}>
          Edit Profile
        </button>
      )}
      {children}
    </div>
  );
};

export default UserProfileCard;
