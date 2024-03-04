import{S as b,i as l}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}})();async function q(){const e="https://pixabay.com/api/";return(await axios.get(e,{params:{key:"42513462-e11c37811c4211ba54194476f",q:d,lang:"en",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:g}})).data}const v=document.querySelector(".gallery"),a=document.querySelector(".load-btn");function m(){w(),q().then(e=>{console.log(e);const o=e.hits;if(e.totalHits===0)l.error({title:"",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),a.classList.add("hidden"),c();else if(e.hits<15)l.info({title:"",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),a.classList.add("hidden"),c();else{const n=o.map(({webformatURL:i,largeImageURL:t,tags:s,likes:r,views:h,comments:y,downloads:L})=>`<li class="gallery-item">
	<a class="gallery-link" href="${t}">
		<img 
			class="images" 
			src="${i}"
			alt="${s}"
			/>
	
	<ul class="detail-list">
	<li class="detail-item"><span class="bold">Likes</span> ${r}</li>
	<li class="detail-item"><span class="bold">Views</span> ${h}</li>
	<li class="detail-item"><span class="bold">Comments</span> ${y}</li>
	<li class="detail-item"><span class="bold">Downloads</span> ${L}</li>
	</ul>
</a></li>`).join("");return v.insertAdjacentHTML("beforeend",n),S.refresh(),c(),a.classList.remove("hidden"),e}}).catch(e=>{l.error({title:"",position:"topRight",message:"Incorrect request!"})})}const S=new b(".gallery a",{captionsData:"alt",captionDelay:250}),p=document.querySelector(".search-form"),u=document.querySelector(".gallery"),f=document.querySelector(".load-btn");p.addEventListener("submit",$);let g=1,d;function $(e){d=p.search.value.trim(),e.preventDefault(),u.innerHTML=null,d?m():(f.classList.add("hidden"),l.error({title:"",position:"topRight",message:"Please enter your request."}))}function w(){const e=document.createElement("div");e.className="loader",u.appendChild(e)}function c(){const e=document.querySelector(".loader");e&&e.remove()}function O(){g+=1;try{m(),P()}catch(e){console.log(e)}}f.addEventListener("click",O);function P(){const e=u.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:3*e,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
