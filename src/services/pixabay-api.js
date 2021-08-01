const BASE_URL = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal';
const API_KEY = '21926064-24ac70c74b5af685f398413a7';
const IMAGES_PER_PAGE = 12;

function fetchImages(query, page) {
  return fetch(`${BASE_URL}&key=${API_KEY}&q=${query}&page=${page}&per_page=${IMAGES_PER_PAGE}`)
    .then(response => {
      if (response.ok) return response.json();
      return Promise.reject(new Error(`По запросу "${query}" ничего не найдено!`));
    })
    .then(({ hits }) => hits);
}

export { fetchImages };
