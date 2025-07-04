# Telegram Bot

[![NPM Version](https://img.shields.io/npm/v/telegram-bot-api-lightweight-client)](https://www.npmjs.com/package/telegram-bot-api-lightweight-client)
[![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fapi.github.com%2Frepos%2Flightweight-clients%2Ftelegram-bot-api-lightweight-client%2Factions%2Fworkflows%2Fcreate-new-version-when-it-is-released.yml%2Fruns%3Fstatus%3Dcompleted%26per_page%3D1&query=%24.workflow_runs%5B0%5D.run_started_at&style=flat&label=Last%20API%20version%20check)](https://github.com/lightweight-clients/telegram-bot-api-lightweight-client/actions/workflows/create-new-version-when-it-is-released.yml)
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

### Examples

```typescript
import { client_setClientToken, getMe } from 'telegram-bot-api-lightweight-client';

client_setClientToken('123:helloworld');

const main = async () => {
    const me = await getMe();
    console.log(me);
};

main();
```

The library provides 2 groups of methods:

- request methods: `getMe`, `sendMessage`, etc. These methods are used to make requests to the Telegram Bot API.
- `client_*`: methods for configuring the client.

#### Request Methods

They return a promise that resolves to the response from the API.
You can find all request methods in the 'client.ts' file.
The request methods are named as in Telegram Bot API documentation, so you can easily find them.

#### `client_*` Methods

The methods starting with `client_` are used to configure the client. They are:

- `client_setClientToken(token: string)`: sets the token.
- `client_setBaseUrl(endpoint: string)`: sets the endpoint.  
  Defaults to `https://api.telegram.org/bot{token}`.
  If you want to use a different endpoint (e.g., for a self-hosted Telegram Bot API server), you can set it here.
- `client_setFetch(customFetch: typeof client_fetch)`: sets the fetch function for all requests.
  Defaults to the `fetch` function from the `node-fetch` package.
  If you want to use a different fetch function (e.g., for browser or Node.js), you can set it here.

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

## Schema

The schema for the Telegram Bot API is available in the
[lightweight-clients/schemas](https://github.com/lightweight-clients/schemas) repository.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
Types are generated from [Telegram Bot API](https://core.telegram.org/bots/api) documentation.
by [@hey-api/openapi-ts](https://github.com/hey-api/openapi-ts).
