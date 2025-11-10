import { createContext } from "react";

export const MainContext = createContext({
  ShowMenu: false,
  setShowMenu: () => {},
});
