import LogoutText from "./LogoutText";

function ProfileWebBottom({ onDelete }: { onDelete: () => void }) {
  return (
    <div className="mt-2 text-right">
      <LogoutText onDelete={onDelete} />
    </div>
  );
}

export default ProfileWebBottom;
