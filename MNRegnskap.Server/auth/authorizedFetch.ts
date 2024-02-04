import { instance } from "./instance";
import * as process from 'process';


/**
 * A wrapper for the global fetch function, which acquires and injects a token if the resource requires it.
 *
 * @param url The url of the resource you want to fetch.
 * @param init An object containing any custom settings that you want to apply to the request.
 * @returns A Promise that resolves to a Response object.
 * @see https://developer.mozilla.org/en-US/docs/Web/API/fetch
 * @see https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/acquire-token.md
 */
async function authorizedFetch(
  url: string,
  init?: RequestInit
): Promise<Response> {
  let scopes: string[] = [];

  const env = (import.meta as any).env;

  if (url?.toLowerCase().startsWith("https://graph.microsoft.com")) {
    scopes.push("User.Read");
  } else if (url?.toLowerCase().startsWith(env.VITE_API_URL)) {
    scopes.push(env.VITE_SCOPE_URI as string);
  } else if (url?.toLowerCase().startsWith(env.VITE_API_URL_BILLING)) {
    scopes.push(env.VITE_SCOPE_URI_BILLING as string);
  }

  if (scopes.length > 0) {
    let token = await instance.acquireTokenSilent({ scopes });

    init = {
      ...init,
      headers: {
        ...init?.headers,
        Authorization: "Bearer " + token.accessToken,
      },
    };
  }

  return await fetch(url, init);
}

export { authorizedFetch };