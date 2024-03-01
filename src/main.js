import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


import { createMarkup } from "./js/render-functions.js";

const form = document.querySelector(".search-form");
const gallery = document.querySelector(".gallery");


form.addEventListener('submit', serchImage);

export let input

function serchImage(event) {
    
   input = form.search.value.trim();
    event.preventDefault();
    gallery.innerHTML = "";

    if (input === "") {
        
    iziToast.error({
                title: '',
                position: 'topRight',
                message: `Please enter your request.`,
})
    } else {
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
