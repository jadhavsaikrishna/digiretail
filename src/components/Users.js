import User from "./User";
function Users({ users }) {
  return users.map((user) => {
    return <User data={user} key={user.id} />;
  });
}

export default Users;
