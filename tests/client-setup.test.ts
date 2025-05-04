import { describe, test, expect, vi } from 'vitest';
import { client_setBaseUrl, client_setClientToken, client_setFetch, getUpdates } from '../src';

describe('client setup tests', () => {
    let tempVar: string = '';

    // @ts-expect-error Overriding fetch
    global.fetch = vi.fn(async (url) => {
        tempVar = url.toString();
        return Promise.resolve({ json: () => Promise.resolve({}) });
    });

    test('all 3 setup functions should work', async () => {
        client_setClientToken('123');
        await getUpdates({});
        expect(tempVar).toEqual('https://api.telegram.org/bot123/getUpdates');

        client_setBaseUrl('https://localhost:3000');
        await getUpdates({});
        expect(tempVar).toEqual('https://localhost:3000/getUpdates');

        // @ts-expect-error ESLint doesn't like this types cast
        client_setFetch((url) => {
            tempVar = url + '_replaced';
            return Promise.resolve({ ok: true, json: () => Promise.resolve({}) });
        });
        await getUpdates({});
        expect(tempVar).toEqual('getUpdates_replaced');
    });
});
