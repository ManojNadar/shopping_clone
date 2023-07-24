import { createContext, useEffect, useReducer } from "react";

export const MyContext = createContext();
const initialState = { user: null };

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        user: action.payload,
      };

    case "LOGOUT":
      return {
        user: null,
      };

    default:
      return state;
  }
};

const ContextContainer = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const login = (userData) => {
    localStorage.setItem("currentuser", JSON.stringify(userData));
    dispatch({
      type: "LOGIN",
      payload: userData,
    });
  };

  const logout = () => {
    localStorage.removeItem("currentuser");
    dispatch({
      type: "LOGOUT",
    });
  };

  useEffect(() => {
    const isUserPresent = JSON.parse(localStorage.getItem("currentuser"));
    if (isUserPresent) {
      dispatch({
        type: "LOGIN",
        payload: isUserPresent,
      });
    }
  }, []);

  return (
    <MyContext.Provider value={{ state, login, logout }}>
      {children}
    </MyContext.Provider>
  );
};

export default ContextContainer;
