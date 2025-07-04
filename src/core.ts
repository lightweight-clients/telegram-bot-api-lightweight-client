// noinspection JSUnusedGlobalSymbols

let baseUrl: string | undefined = undefined;

/**
 * @internal
 * Fetches data from the Telegram Bot API.
 *
 * @param path - The API endpoint to fetch data from, e.g., 'getMe'.
 * @param args - The input arguments for the API call, which will be sent as JSON in the request body.
 *
 * @returns A promise that resolves to the output data from the API call, parsed as JSON.
 */
export let client_fetch = async <In, Out>(path: string, args: In): Promise<Out> => {
  const response = await fetch(`${baseUrl}/${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(args),
  });

  return (await response.json()) as unknown as Out;
};

/**
 * Sets the Telegram Bot API token for the client.
 * This is required to authenticate requests to the Telegram Bot API.
 *
 * @param token - The bot token provided by Telegram.
 */
export const client_setClientToken = (token: string): void => {
  baseUrl = `https://api.telegram.org/bot${token}`;
};

/**
 * Sets the base URL for the client.
 * This is useful if you want to use a different Telegram Bot API server or a mock server.
 *
 * @param url - The base URL to use for the client.
 */
export const client_setBaseUrl = (url: string): void => {
  baseUrl = url;
};

/**
 * Sets a custom fetch function to be used by the client.
 * This can be useful for testing or when you want to use a different HTTP client.
 *
 * @param customFetch - The custom fetch function to use.
 */
export const client_setFetch = (customFetch: typeof client_fetch): void => {
  client_fetch = customFetch;
};
