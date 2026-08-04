import { describe } from "pm2";

describe('Backend Sanity Test', () => {
    test('Server environment check', () => {
        expect(1 + 1).toBe(2);
    })
})