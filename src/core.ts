let baseUrl: string | undefined = undefined;

export let client_fetch = async <In, Out>(path: string, args: In): Promise<Out> => {
    const response = await fetch(`${baseUrl}/${path}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(args),
    });

    return (await response.json()) as unknown as Out;
};

export const client_setClientToken = (token: string): void => {
    baseUrl = `https://api.telegram.org/bot${token}`;
};

export const client_setBaseUrl = (url: string): void => {
    baseUrl = url;
};

export const client_setFetch = (customFetch: typeof client_fetch): void => {
    client_fetch = customFetch;
};
