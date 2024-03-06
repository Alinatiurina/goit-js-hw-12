import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { createMarkup } from "./js/render-functions.js";

const form = document.querySelector(".search-form");
const gallery = document.querySelector(".gallery");
const loadBtn = document.querySelector(".load-btn");

form.addEventListener('submit', serchImage);
export let page = 1;
export let input;
const maxPage = 33;

function serchImage(event) {
  page = 1;
    input = form.search.value.trim();
    event.preventDefault();
    gallery.innerHTML = null;

    if (!input) {
    loadBtn.classList.add("hidden"); 
    iziToast.error({
      title: '',
      position: 'topRight',
      message: `Please enter your request.`,
})
    }
    else {
      createMarkup();
    }
}


export function showLoader() {
  const loader = document.createElement('div');
  loader.className = 'loader';
  gallery.appendChild(loader);
}

export function hideLoader() {
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.remove();
  }
}


loadBtn.addEventListener("click", data => {
  page += 1;
  try {
    if (page >= maxPage) {
    iziToast.info({
					 title: '',
					 position: 'topRight',
					 message: `Sorry, there are no images matching your search query. Please try again!`,
				 })
	loadBtn.classList.add("hidden");
    }
    else {
      createMarkup();
      setTimeout(()=>{Scroll()},500);
    }
  } catch (err) {
    console.log(err);
  }
  
})

function Scroll() {
  const galleryHeight =
    gallery.firstElementChild.getBoundingClientRect().height;
  
  window.scrollBy({
  top: 3 * galleryHeight,
  behavior: "smooth",
})
}
