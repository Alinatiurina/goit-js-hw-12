import{S as b,i as a}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function l(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=l(t);fetch(t.href,s)}})();async function q(){const e="https://pixabay.com/api/";return(await axios.get(e,{params:{key:"42513462-e11c37811c4211ba54194476f",q:c,lang:"en",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:g}})).data}const v=document.querySelector(".gallery"),d=document.querySelector(".load-btn");function m(){w(),q().then(e=>{console.log(e);const r=e.hits;if(e.totalHits===0)a.error({title:"",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),d.classList.add("hidden"),u();else{const l=r.map(({webformatURL:i,largeImageURL:t,tags:s,likes:o,views:h,comments:y,downloads:L})=>`<li class="gallery-item">
	<a class="gallery-link" href="${t}">
		<img 
			class="images" 
			src="${i}"
			alt="${s}"
			/>
	
	<ul class="detail-list">
	<li class="detail-item"><span class="bold">Likes</span> ${o}</li>
	<li class="detail-item"><span class="bold">Views</span> ${h}</li>
	<li class="detail-item"><span class="bold">Comments</span> ${y}</li>
	<li class="detail-item"><span class="bold">Downloads</span> ${L}</li>
	</ul>
</a></li>`).join("");return v.insertAdjacentHTML("beforeend",l),S.refresh(),u(),d.classList.remove("hidden"),e}}).catch(e=>{a.error({title:"",position:"topRight",message:"Incorrect request!"})})}const S=new b(".gallery a",{captionsData:"alt",captionDelay:250}),p=document.querySelector(".search-form"),f=document.querySelector(".gallery"),n=document.querySelector(".load-btn");p.addEventListener("submit",$);let g=1,c;function $(e){c=p.search.value.trim(),e.preventDefault(),f.innerHTML=null,c?m():(n.classList.add("hidden"),a.error({title:"",position:"topRight",message:"Please enter your request."}))}function w(){const e=document.createElement("div");e.className="loader",f.appendChild(e)}function u(){const e=document.querySelector(".loader");e&&e.remove()}n.addEventListener("click",e=>{g+=1,e.hits.length<15&&(a.info({title:"",position:"topRight",message:"We're sorry, but you've reached the end of search results."}),n.classList.add("hidden"));try{m()}catch(r){console.log(r)}});
//# sourceMappingURL=commonHelpers.js.map
