import { useContext, createContext, useState } from "react";

// initialising context hook
const UsersContext = createContext();

// eslint-disable-next-line react/prop-types
export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "user-1",
      email: "user@example.com",
    },
  ]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const removeUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  return (
    <UsersContext.Provider value={{ users, addUser, removeUser }}>
      {children}
    </UsersContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export function useUserContext() {
  return useContext(UsersContext);
}
