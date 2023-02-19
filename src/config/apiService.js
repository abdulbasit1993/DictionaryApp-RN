import axios from 'axios';
import {BASE_URL} from '../constants/apiURL';

export const getWordDefinition = async word => {
  try {
    const response = await axios(`${BASE_URL}/${word}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};
