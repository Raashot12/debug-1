import type { UserInfoType } from '../types/user';
import logger from '../utility/logger';
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || '';

export const fetchUserDetails = async (): Promise<UserInfoType | null> => {
  try {
    const { data: { userInfo = {} as UserInfoType } = {} } = await axios.get(
      `${API_URL}/v1/user/details`,
    );
    return userInfo;
  } catch (error: any) {
    logger.error(error);
    return null;
  }
};
