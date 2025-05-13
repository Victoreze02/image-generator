import axios from 'axios';

const searchImages = async (term) => {
 const response = await axios.get('https://api.unsplash.com/search/photos',
    {
      headers: {
        Authorization: 'Client-ID e8rb0BUU_ktOcNzCUniPG5Z9XNnXIukeXSUEL0lkOIE'
      },

      params: {
        query: term,
      }
    });

    

    return response.data.results;
};

export default searchImages;