import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { showLoader } from "../main.js";
import { hideLoader } from "../main.js";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { getImages } from "./pixabay-api.js";

const galerry = document.querySelector(".gallery");

export function createMarkup() {
	showLoader()
	getImages()
		.then(data => {
        const images = data.hits.slice(0, 9);
                
			 if (data.hits.length === 0) {
                iziToast.error({
                title: '',
                position: 'topRight',
                message: `Sorry, there are no images matching your search query. Please try again!`,
                })
            }
			
    galerry.innerHTML = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
        return `<li class="gallery-item">
	<a class="gallery-link" href="${largeImageURL}">
		<img 
			class="images" 
			src="${webformatURL}"
			alt="${tags}"
			/>
	
	<ul class="detail-list">
	<li class="detail-item"><span class="bold">Likes</span> ${likes}</li>
	<li class="detail-item"><span class="bold">Views</span> ${views}</li>
	<li class="detail-item"><span class="bold">Comments</span> ${comments}</li>
	<li class="detail-item"><span class="bold">Downloads</span> ${downloads}</li>
	</ul>
</a></li>`  
    }).join('')

		})
		.then(data => {
			lightbox.refresh();
			hideLoader();
			
            return data
        })
}

const lightbox = new SimpleLightbox('.gallery a', {
captionsData: 'alt',
captionDelay: 250,
        }) 