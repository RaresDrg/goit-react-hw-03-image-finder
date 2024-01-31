import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

async function retreiveImages(page, serchedQuery) {
  const searchParams = new URLSearchParams({
    page,
    per_page: 12,
    q: serchedQuery,
    key: '41738321-a8f823d3708a3beef3432afb9',
    image_type: 'photo',
    orientation: 'horizontal',
  });

  const response = await axios.get(`?${searchParams}`);
  return response.data;
}

const imagesService = {
  retreiveImages,
};

export default imagesService;
