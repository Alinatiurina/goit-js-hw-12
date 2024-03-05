import { input } from "../main";
import { page } from "../main";


export async function getImages() {
  const URL = 'https://pixabay.com/api/';

  const response = await axios.get(URL, {
    params: {
      key: '42513462-e11c37811c4211ba54194476f',
      q: input,
      lang: 'en',
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 15,
      page,
    },
  });
  return response.data;
}