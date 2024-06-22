# Telegram Bot

This is lightweight client for Telegram Bot API. It contains only methods and types
and exports only `fetch` call to make requests.

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
version is 700, then this library version will be 1.700.0. The last number is for bug fixes and
small changes in the library.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
Types are generated from [Telegram Bot API](https://core.telegram.org/bots/api) documentation.
by [@hey-api/openapi-ts](https://github.com/hey-api/openapi-ts).
