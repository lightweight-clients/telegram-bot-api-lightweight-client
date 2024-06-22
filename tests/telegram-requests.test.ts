import { client_setClientToken, getMe, sendMessage, sendPhoto } from '../src';

const BOT_TOKEN = '';
const CHAT_ID = '';
const EXPECTED_USERNAME = '';

describe('telegram requests integration tests', () => {
    beforeAll(() => {
        client_setClientToken(BOT_TOKEN);
    });

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
    });

    test('should be able to send a photo by url', async () => {
        const response = await sendPhoto({
            chat_id: CHAT_ID,
            photo: 'https://picsum.photos/200/300',
        });
        console.log(response);
        expect(response).toBeDefined();
        expect(response.ok).toBeTruthy();
    });
});
