import React, { createContext, useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export const AuthContext = createContext({}); // Set default value as empty object

const AuthProvider = ({ children }) => {

  
  const [userData, setUserData] = useState({}); // Initialize with empty object

  useEffect(() => {
    setLocalStorage()
    const { employees, admin } = getLocalStorage();
    setUserData({ employees, admin });
  }, []); 

  return (
    <AuthContext.Provider value={userData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

