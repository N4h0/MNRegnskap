import {
    AuthenticationResult,
    EventType,
    PublicClientApplication,
  } from "@azure/msal-browser";
  import { config } from "./config";
  
  const loginHintKey = "login_hint";
  
  // only get once on page load
  export const loginHint = localStorage?.getItem(loginHintKey) ?? undefined;
  
  /**
   * A PublicClientApplication instance
   * @see https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-react/docs/getting-started.md
   */
  const instance = new PublicClientApplication(config);
  
  /**
   * Register event callback to set the active account atfer successful login
   * @see https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/accounts.md#active-account-apis
   * @see https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/events.md
   */
  instance.addEventCallback((message) => {
    if (
      message.eventType === EventType.LOGIN_SUCCESS ||
      message.eventType === EventType.SSO_SILENT_SUCCESS
    ) {
      const result = message.payload as AuthenticationResult;
      if (!result.account) return;
      instance.setActiveAccount(result.account);
      localStorage.setItem(loginHintKey, result.account.username);
    }
  });
  
  export { instance };