import { createContext, useReducer } from "react";

// Define initial state
const INITIAL_STATE = {
  user: null,
  isFetching: false,
  error: false,
};

// Define reducer function
const AuthReducer = (state, action) => {
  switch (action.type) {
    case "REGISTER_SUCCESS":
      return {
        ...state,
        user: action.payload, // Store user info
        isFetching: false,
        error: false,
      };
    default:
      return state;
  }
};

// Create AuthContext
export const AuthContext = createContext(INITIAL_STATE);

// Context Provider Component
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider value={{ user: state.user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
