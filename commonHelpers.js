import{S as L,i as n}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function l(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=l(t);fetch(t.href,o)}})();async function b(){const e="https://pixabay.com/api/";return(await axios.get(e,{params:{key:"42513462-e11c37811c4211ba54194476f",q:a,lang:"en",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:f}})).data}const q=document.querySelector(".gallery"),S=document.querySelector(".load-btn");function u(){w(),b().then(e=>{console.log(e);const r=e.hits;if(e.totalHits===0)n.error({title:"",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),d();else{const l=r.map(({webformatURL:i,largeImageURL:t,tags:o,likes:s,views:g,comments:h,downloads:y})=>`<li class="gallery-item">
	<a class="gallery-link" href="${t}">
		<img 
			class="images" 
			src="${i}"
			alt="${o}"
			/>
	
	<ul class="detail-list">
	<li class="detail-item"><span class="bold">Likes</span> ${s}</li>
	<li class="detail-item"><span class="bold">Views</span> ${g}</li>
	<li class="detail-item"><span class="bold">Comments</span> ${h}</li>
	<li class="detail-item"><span class="bold">Downloads</span> ${y}</li>
	</ul>
</a></li>`).join("");return q.insertAdjacentHTML("beforeend",l),v.refresh(),d(),S.classList.remove("hidden"),e}}).catch(e=>{n.error({title:"",position:"topRight",message:"Incorrect request!"})})}const v=new L(".gallery a",{captionsData:"alt",captionDelay:250}),m=document.querySelector(".search-form"),c=document.querySelector(".gallery"),p=document.querySelector(".load-btn");m.addEventListener("submit",$);let f=1,a;function $(e){a=m.search.value.trim(),e.preventDefault(),c.innerHTML=null,a?u():(p.classList.add("hidden"),n.error({title:"",position:"topRight",message:"Please enter your request."}))}function w(){const e=document.createElement("div");e.className="loader",c.appendChild(e)}function d(){const e=document.querySelector(".loader");e&&e.remove()}function O(){f+=1;try{u(),P()}catch(e){console.log(e)}}p.addEventListener("click",O);function P(){const e=c.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:3*e,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
