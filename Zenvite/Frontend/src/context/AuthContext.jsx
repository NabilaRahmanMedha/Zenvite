import { createContext, useReducer } from "react";

// Define initial state
const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: null,
};


// Define reducer function
const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      if (!action.payload || !action.payload.user || !action.payload.token) {
        console.error("Invalid LOGIN_SUCCESS payload:", action.payload);
        return state;
      }

      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", action.payload.token);

      return {
        ...state,
        user: action.payload.user,
        isFetching: false,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case "LOGOUT":
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      return {
        ...state,
        user: null,
        isFetching: false,
        error: null,
      };
    default:
      return state;
  }
};


// Create AuthContext
export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
