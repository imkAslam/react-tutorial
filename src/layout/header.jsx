import { useUserContext } from "../contexts/userContext";

// eslint-disable-next-line react/prop-types
function Header() {
  const { users } = useUserContext();
  return (
    <div>
      <h1>This is a header</h1>
      <h2>{JSON.stringify(users)}</h2>
    </div>
  );
}

export default Header;
