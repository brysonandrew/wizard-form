import message from 'message-like-antd';
import { TError } from '@t/api';

export const resolveErrorMessage = (error: TError, source = '') => {
  let content =
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    typeof error.message === 'string' &&
    error.message;
  content = `${content} ${source}`.trim();
  if (content) {
    message.error(content);
  }
};
