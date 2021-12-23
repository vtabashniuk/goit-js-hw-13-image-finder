import { galleryRef, searchForm, loadMoreBtn } from "./refs";
import { debounce } from "lodash";
import renderImages from "./render-images";

loadMoreBtn.disabled = true;
let inputValue = "";
let pageCounter = 1;

searchForm.addEventListener(
  "input",
  debounce(() => {
    inputValue = searchForm.searchQuery.value;
    if (inputValue.length === 0) {
      pageCounter = 1;
    }
  }, 0)
);

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  pageCounter = 1;

  if (inputValue.length > 0) {
    galleryRef.textContent = "";
    renderImages(inputValue, pageCounter);
    pageCounter += 1;
    loadMoreBtn.disabled = false;
  } else {
    loadMoreBtn.disabled = true;
    galleryRef.textContent = "";
    pageCounter = 1;
    inputValue = "";
    return;
  }
});

loadMoreBtn.addEventListener("click", () => {
  let timer = 0;
  if (inputValue.length > 0) {
    renderImages(inputValue, pageCounter);
    timer = setTimeout(() => {
      scrollTo(pageCounter);
      pageCounter += 1;
    }, 1000);
  } else {
    galleryRef.textContent = "";
    pageCounter = 1;
    inputValue = "";
    clearTimeout(timer);
    return;
  }
});

function scrollTo(pageCounter) {
  const elementToScroll = document.getElementById(pageCounter);
  elementToScroll.scrollIntoView({
    behavior: "smooth",
    block: "end",
  });
}
