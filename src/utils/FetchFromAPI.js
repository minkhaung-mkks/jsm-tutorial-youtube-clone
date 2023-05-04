import axios from "axios";
/**
 * This function fetches data from the YouTube API using axios and the provided URL.
 * @async
 * @function fetchFromAPI
 * @param {string} url - A string representing the URL to fetch data from.
 * @returns {Promise<object>} A promise that resolves to the fetched data object.
 * @throws {Error} Will throw an error if there's an issue with the network request.
 */

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
    const { data } = await axios.get(`${BASE_URL}/${url}`, options)
    return data
}