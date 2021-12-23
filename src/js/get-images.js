export default function getImages(query, pageNumber = 1) {
  const API_KEY = '22416794-3b1c3083ab7ce728d60190093';
  const BASE_URL = 'https://pixabay.com/api/';
  const FETCH_URL = `${BASE_URL}?image_type=photo&orientation=horizontal&q=${query}&page=${pageNumber}&per_page=12&key=${API_KEY}`;
  return fetch(FETCH_URL);
}
