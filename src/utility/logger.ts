// this is the logger for the browser
import pino from 'pino';

const pinoConfig = {
  browser: {
    asObject: true,
  },
};
const logger = pino(pinoConfig);
export const log = (msg: string | undefined) => logger.info(msg);
export default logger;
