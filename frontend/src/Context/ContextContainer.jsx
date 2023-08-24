import axios from "axios";
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

  const login = (userData, token) => {
    localStorage.setItem("shoppingToken", JSON.stringify(token));
    dispatch({
      type: "LOGIN",
      payload: userData,
    });
  };

  const logout = () => {
    localStorage.removeItem("shoppingToken");
    dispatch({
      type: "LOGOUT",
    });
  };

  useEffect(() => {
    async function getCurremtUser() {
      const token = JSON.parse(localStorage.getItem("shoppingToken"));

      const response = await axios.post("http://localhost:8000/currentuser", {
        token,
      });

      if (response.data.success) {
        dispatch({
          type: "LOGIN",
          payload: response.data.user,
        });
      } else {
        dispatch({
          type: "LOGOUT",
        });
      }
    }

    getCurremtUser();
  }, []);

  return (
    <MyContext.Provider value={{ state, login, logout }}>
      {children}
    </MyContext.Provider>
  );
};

export default ContextContainer;
// useEffect(() => {
//   const isUserPresent = JSON.parse(localStorage.getItem("currentuser"));
//   if (isUserPresent) {
//     dispatch({
//       type: "LOGIN",
//       payload: isUserPresent,
//     });
//   }
// }, []);
