import { createContext } from "react";
import Profile from "./Profile";

export const UserContext = createContext();

function ContextApiApp() {
  return (
    <UserContext.Provider value="Vinay">
      <Profile />
    </UserContext.Provider>
  );
}

export default ContextApiApp;