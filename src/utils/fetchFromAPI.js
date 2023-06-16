import axios from "axios";
// import process from "process";
const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
    params: {maxResults: '50',},
    headers: {
      'X-RapidAPI-Key': '5de9b74936msh9e1cb4d7d7e9617p122906jsna2aecb73b0ad',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);

    return data
  };