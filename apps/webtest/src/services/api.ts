import axios from 'axios';

const api = axios.create({
  baseURL:
    'https://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=ad4a80125bd54a08b82a5cf31257e9f3',
});

export default api;
