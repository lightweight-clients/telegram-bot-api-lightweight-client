# Telegram Bot

![NPM Version](https://img.shields.io/npm/v/telegram-bot-api-lightweight-client)
![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fapi.github.com%2Frepos%2Flightweight-clients%2Ftelegram-bot-api-lightweight-client%2Factions%2Fworkflows%2Fcreate-new-version-when-it-is-released.yml%2Fruns%3Fstatus%3Dcompleted%26per_page%3D1&query=%24.workflow_runs%5B0%5D.run_started_at&style=flat&label=Last%20API%20version%20check)
![NPM Downloads](https://img.shields.io/npm/dm/telegram-bot-api-lightweight-client)
![GitHub License](https://img.shields.io/github/license/lightweight-clients/telegram-bot-api-lightweight-client)

This is lightweight client for Telegram Bot API. It contains only methods and types
and exports only `fetch` call to make requests.

It supports only `application/json` content type and does not support file uploads.
However, you can use the corresponding methods to upload files by URLs or file IDs.
You can also upload files using another approach and pass the file ID to the method.

## Installation

```bash
npm install telegram-bot-api-lightweight-client
```

## Usage

To use this library, you need to set token first. You can do it by calling `setToken` function.

There are also ability to set custom endpoint if you need to use local server or proxy. You also can
set custom fetch function if you need to use custom request library.

Basically, all methods are named as in Telegram Bot API documentation. You can find all methods in
'client.ts' file. The only new methods are:

- `client_setClientToken(token: string)`: sets token for all requests.
- `client_setBaseUrl(endpoint: string)`: sets endpoint for all requests.
- `client_setFetch(customFetch: typeof client_fetch)`: sets fetch function for all requests.

Here is an example of usage:

```typescript
import { setToken, getMe } from 'telegram-bot-api-lightweight-client';

setToken('hello:world');

const main = async () => {
    const me = await getMe();
    console.log(me);
};

main();
```

## Features

- No dependencies.
- When using code minifiers, only the fetch command is exported.
- Can be used in browser and Node.js.
- Fully compatible with AWS LLRT.
- Fully typed API.

## Versioning

The versioning of this library is based on Telegram Bot API versioning. So, if Telegram Bot API
version is 7.5, then this library version will be 7.5.0. The last number is for bug fixes and
small changes in the library.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
Types are generated from [Telegram Bot API](https://core.telegram.org/bots/api) documentation.
by [@hey-api/openapi-ts](https://github.com/hey-api/openapi-ts).
