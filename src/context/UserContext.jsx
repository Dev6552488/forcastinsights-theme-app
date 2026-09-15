import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext(null);

export const UserProvider = ({ children, initialUser = null }) => {
  const [user, setUser] = useState(() => (
    initialUser
      ? {
          fullName: initialUser.fullName,
          email: initialUser.email,
        }
      : null
  ));

  const registerUser = userData => {
    setUser({
      fullName: userData.fullName,
      email: userData.email,
    });
  };

  return (
    <UserContext.Provider value={{ user, registerUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }

  return context;
};
