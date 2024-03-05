import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


import { getImages } from "./js/pixabay-api.js";
import { createMarkup } from "./js/render-functions.js";

const form = document.querySelector(".search-form");
const gallery = document.querySelector(".gallery");
const loadBtn = document.querySelector(".load-btn");

form.addEventListener('submit', serchImage);
export let page = 1;
export let input

function serchImage(event) {
    
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



function LoadMore() {
  page += 1;
  try {
    createMarkup();
    Scroll();
  } catch (err) {
    console.log(err);
  } 
}

loadBtn.addEventListener("click", LoadMore);

function Scroll() {
  const galleryHeight =
    gallery.firstElementChild.getBoundingClientRect().height;
  
  window.scrollBy({
  top: 3 * galleryHeight,
  behavior: "smooth",
})
}

// 
  
 	// if (images < 15) {
				
	// 			loadBtn.classList.add("hidden");
	// 			iziToast.info({
	// 				title: '',
	// 				message: `We're sorry, but you've reached the end of search results.`,
	// 				position: 'topRight',
	// 			});
				
	// 		}
//  if (page === maxPage) {
//       loadBtn.classList.add("hidden");
  //     }
// }
//     // і обовʼязково після натискання на кнопку та закінчення запиту перевіряємо, якщо ми зараз знаходимось на останній сторінці - то ховаємо кнопку і видаляємо обробник подій!
   
//   }





