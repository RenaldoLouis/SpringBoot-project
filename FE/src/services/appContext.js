import React, { useContext, createContext, useReducer } from 'react';

import { i18n } from '../i18n';

import http from '../services/http';

import {
  getLocalUserDetails,
  removeLocalUserDetails,
  removeUserAuthToken,
  setLocalUserDetails,
  setUserAuthToken,
} from '../utils/authHelper';

import { getSiteLanguageInLS, saveSiteLanguageInLS } from '../utils/translationHelper';

const Context = createContext(null);

const ACTION_KEYS = {
  SET_USER_DETAILS: 'SET_USER_DETAILS',
  LOG_IN: 'LOG_IN',
  LOG_OUT: 'LOG_OUT',
  SET_LANGUAGE: 'SET_LANGUAGE',
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_KEYS.SET_USER_DETAILS:
      return {
        ...state,
        userDetails: action.payload.userDetails,
      };
    case ACTION_KEYS.LOG_IN:
      return {
        ...state,
        userDetails: action.payload.userDetails,
        userAuthenticated: true,
      };
    case ACTION_KEYS.LOG_OUT:
      return {
        ...state,
        userDetails: null,
        userAuthenticated: false,
      };
    case ACTION_KEYS.SET_LANGUAGE:
      return {
        ...state,
        siteLanguage: action.payload.siteLanguage,
      };
    default:
      return state;
  }
};

const AppContext = ({ children }) => {
  // TODO: Initialize Context Data here
  const initialState = {
    userDetails: getLocalUserDetails(),
    userAuthenticated: !!getLocalUserDetails(),
    siteLanguage: getSiteLanguageInLS(),
  };

  // TODO: Define context handler functions here
  const [state, dispatch] = useReducer(reducer, initialState);

  const logOut = () => {
    removeLocalUserDetails();

    removeUserAuthToken();
    http.removeAuthTokenHeader();

    dispatch({ type: ACTION_KEYS.LOG_OUT });
  };

  const logIn = (userDetails) => {
    setLocalUserDetails(userDetails);

    setUserAuthToken(userDetails.auth_token);
    http.setAuthTokenHeader(userDetails.auth_token);

    dispatch({ type: ACTION_KEYS.LOG_IN, payload: { userDetails } });
  };

  const setSiteLanguage = (siteLanguage) => {
    saveSiteLanguageInLS(siteLanguage);
    i18n.changeLanguage(siteLanguage);

    dispatch({ type: ACTION_KEYS.SET_LANGUAGE, payload: { siteLanguage } });
  };

  const contextData = {
    state,
    handlers: {
      logIn,
      logOut,
      setSiteLanguage,
    },
  };

  return <Context.Provider value={contextData}>{children}</Context.Provider>;
};

const useAppContext = () => {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppContext component');
  }
  return context;
};

export { useAppContext, AppContext };
