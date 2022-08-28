import React, { createContext, useReducer } from "react";

export const AppContext = createContext();

export const appReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_REQUEST": {
      return {
        ...state,
        isLoading:true 
      };
    }
    case "LOGIN_FAILURE": {
      return {
        ...state,
        isLoading:false,
        isError:true 
      };
    }
    
    case "LOGIN_SUCCESS": {
      return {
        ...state,
        isAuth: true,
        token: action.payload,
        isLoading:false
      };
    }
    case "LOGOUT_SUCCESS": {
      return {
        ...state,
        isAuth: false,
        token: null
      };
    }
    default:
      return state;
  }
};

function AppContextProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, {
    isAuth: false,
    token: null,
    isLoading:false,
    isError:false
  });
  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;