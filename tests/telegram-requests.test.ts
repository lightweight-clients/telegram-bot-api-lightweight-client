import { describe, test, expect, beforeAll, afterAll } from 'vitest';
import { client_setClientToken, deleteMessage, getMe, sendMessage, sendPhoto } from '../src';

const BOT_TOKEN = process.env.TEST_BOT_TOKEN || '';
const CHAT_ID = process.env.TEST_CHAT_ID || '';
const EXPECTED_USERNAME = process.env.TEST_BOT_USERNAME || '';

describe('telegram requests integration tests', () => {
    const sentMessageIds: number[] = [];

    beforeAll(() => {
        client_setClientToken(BOT_TOKEN);
    });

    afterAll(
        async () => {
            let failed = false;
            for (const messageId of sentMessageIds) {
                try {
                    await deleteMessage({
                        chat_id: CHAT_ID,
                        message_id: messageId,
                    });
                } catch (e) {
                    failed = true;
                    console.error('Failed to delete test message', e);
                }
            }

            expect(failed).toBeFalsy();
        },
        40000);

    test('should call a method with no args', async () => {
        const response = await getMe({});
        console.log(response);
        expect(response).toBeDefined();
        expect(response.ok).toBeTruthy();
        expect(response.result.is_bot).toBeTruthy();
        expect(response.result.username).toEqual(EXPECTED_USERNAME);
    });

    test('should call a method with simple args', async () => {
        const randomStr = `Test message ${new Date().toISOString()}`;

        const response = await sendMessage({
            chat_id: CHAT_ID,
            text: randomStr,
        });
        console.log(response);
        expect(response).toBeDefined();
        expect(response.ok).toBeTruthy();
        expect(response.result.text).toEqual(randomStr);

        sentMessageIds.push(response.result.message_id);
    });

    test('should call a method with complex args', async () => {
        const randomStr = `Test message ${new Date().toISOString()}`;

        const response = await sendMessage({
            chat_id: CHAT_ID,
            text: randomStr,
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'Button 1', callback_data: '1' },
                        { text: 'Button 2', callback_data: '2' },
                    ],
                ],
            },
        });
        console.log(response);
        expect(response).toBeDefined();
        expect(response.ok).toBeTruthy();
        expect(response.result.text).toEqual(randomStr);

        sentMessageIds.push(response.result.message_id);
    });

    test('should be able to send a photo by url', async () => {
        const response = await sendPhoto({
            chat_id: CHAT_ID,
            photo: 'https://picsum.photos/200/300',
        });
        console.log(response);
        expect(response).toBeDefined();
        expect(response.ok).toBeTruthy();

        sentMessageIds.push(response.result.message_id);
    });
});
