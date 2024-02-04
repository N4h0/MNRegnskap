import {
    InteractionRequiredAuthError,
    InteractionType,
  } from "@azure/msal-browser";
  import {
    AuthenticatedTemplate,
    MsalProvider,
    useMsalAuthentication,
  } from "@azure/msal-react";
  import { PropsWithChildren, useEffect } from "react";
  import { instance, loginHint } from "./instance";
import React from "react";
import * as process from 'process';
  
  const scopes =
  process.env.NODE_ENV === "development"
      ? [
          "User.Read",
          "api://937d1870-9888-473a-9b59-8b3b4b5c7e8d/user_impersonation",
          "api://2c24f4c2-f795-4b93-ba70-5da8b8aa5ac3/user_impersonation",
        ]
      : [".default"];
  
  const loginRequest = {
    scopes: scopes,
    loginHint: loginHint,
  };
  
  const AuthWrapper = ({ children, instance, scopes, loginRequest }: PropsWithChildren<{ instance: any; scopes: string[]; loginRequest: any }>) => {
    const { login, error } = useMsalAuthentication(
      InteractionType.Silent,
      loginRequest
    );
  
    useEffect(() => {
      if (error instanceof InteractionRequiredAuthError) {
        login(InteractionType.Redirect, loginRequest);
      }
    }, [error, login]);
  
    return <AuthenticatedTemplate>{children}</AuthenticatedTemplate>;
  };
  
  const Authentication = ({ children, instance }: PropsWithChildren<{ instance: any }>) => {
    return (
      <MsalProvider instance={instance}>
        <AuthWrapper instance={instance} scopes={scopes} loginRequest={loginRequest}>
          {children}
        </AuthWrapper>
      </MsalProvider>
    );
  };
  
  export default Authentication;