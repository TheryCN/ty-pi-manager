import { ALIVE_CHECK } from './types';

export const aliveCheck = isAlive => ({
    type: ALIVE_CHECK,
    isAlive
});
