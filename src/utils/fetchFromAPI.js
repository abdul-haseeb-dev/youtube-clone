import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/captions',
  params: {part: 'id,snippet', videoId: 'M7FIvfx5J10', type: "video"},
  maxResults: '50',
  headers: {
    'X-RapidAPI-Key': 'dc97ebea18msh9a90f7adac335a4p1984aejsn926b37ee00ab',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
