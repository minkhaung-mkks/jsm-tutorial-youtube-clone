import axios from "axios";


const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    url: BASE_URL,
    params: {
        maxResults: '50'
    },

    headers: {
        'content-type': 'application/octet-stream',
        'X-RapidAPI-Key': process.env.REACT_APP_YT_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchFromAPI = async(url) => {
    // const res = await axios.get(`${BASE_URL}/${url}`, options);
    // console.log(res
    // return res.data
    const { data } = await axios.get(`${BASE_URL}/${url}`, options)
    return data
}