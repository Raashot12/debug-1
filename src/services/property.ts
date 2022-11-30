import logger from '../utility/logger';
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || '';

export const fetchPropertyList = async (): Promise<any | null> => {
  try {
    const response = await axios.get(
      `https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json`,
    );
    console.log(response.data);
    return response.data;
  } catch (error: any) {
    logger.error(error);
    return null;
  }
};
