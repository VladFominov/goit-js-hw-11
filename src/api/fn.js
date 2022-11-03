import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '31022343-0d1a1c169c137ef485c7c7bd9';
axios.defaults.baseURL = BASE_URL;
export const perPage = 40;

export async function getImage(searchQuery, page) {
  try {
    const response = await axios.get(
      `?key=${API_KEY}&image_type=photo&q=${searchQuery}&orientation=horizontal&safesearch=true&per_page=${perPage}&page=${page}`
    );
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
