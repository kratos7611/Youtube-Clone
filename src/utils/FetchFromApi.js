import axios from 'axios'

const BaseURL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: '50'
  },

  // It is always a good practice to place the api key in a .env folder 

  headers: {
    'X-RapidAPI-Key': '38a12ef188msh58e8cdf6d489cb5p150649jsndec6b2431cc8',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromApi = async(url) => {
  let { data } = await axios.get(`${BaseURL}/${url}` , options)
  return data; 
} 


// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

  // import.meta.env.REACT_APP_RAPID_API_KEY
