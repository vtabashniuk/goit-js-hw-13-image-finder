import getImages from "./get-images";
import imageCard from "../handlebars/image-card.hbs";
import { galleryRef } from "./refs";

export default function renderImages(inputValue, pageCounter) {
  getImages(inputValue, pageCounter)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      galleryRef.insertAdjacentHTML(
        "beforeend",
        imageCard({ response, pageCounter })
      );
    });
}
