import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { showLoader } from "../main.js";
import { hideLoader } from "../main.js";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { getImages } from "./pixabay-api.js";

const gallery = document.querySelector(".gallery");
const loadBtn = document.querySelector(".load-btn");

export function createMarkup() {
	showLoader()
	getImages()
		
		.then(data => {

			const images = data.hits;
			 if (data.totalHits === 0) {
				 
				 iziToast.error({
					 title: '',
					 position: 'topRight',
					 message: `Sorry, there are no images matching your search query. Please try again!`,
				 });
				 hideLoader();
				 loadBtn.classList.add("hidden");
			 }
			 
			else{
			const markup = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
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
			}).join('');
			gallery.insertAdjacentHTML("beforeend", markup);
			lightbox.refresh();
			hideLoader();
			loadBtn.classList.remove("hidden");
			return data;
}}
)
		.catch(error => {
		iziToast.error({
					 title: '',
					 position: 'topRight',
					 message: `Incorrect request!`,
				 });
    })
}
const lightbox = new SimpleLightbox('.gallery a', {
captionsData: 'alt',
captionDelay: 250,
}) 
