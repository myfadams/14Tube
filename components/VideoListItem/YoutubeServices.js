import axios from 'axios';

const API_KEY = 'AIzaSyBj8zcvGwgwWOopsn_atkMtlRI0WjWZG5M';
const BASE_URL = 'https://www.googleapis.com/youtube/v3';

export const fetchVideos = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search`, {
      params: {
        part: 'snippet',
        maxResults: 10,
        q: query,
        key: API_KEY,
      },
    });
    return response.data.items;
  } catch (error) {
    console.error('Error fetching videos:', error);
    throw error;
  }
};
