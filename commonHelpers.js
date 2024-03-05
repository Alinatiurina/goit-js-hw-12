import{S as L,i}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();async function b(){const e="https://pixabay.com/api/";return(await axios.get(e,{params:{key:"42513462-e11c37811c4211ba54194476f",q:c,lang:"en",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:l}})).data}const q=document.querySelector(".gallery"),S=document.querySelector(".load-btn");function m(){w(),b().then(e=>{console.log(e);const s=e.hits;if(e.totalHits===0)i.error({title:"",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),u();else{const n=s.map(({webformatURL:a,largeImageURL:t,tags:r,likes:o,views:g,comments:y,downloads:h})=>`<li class="gallery-item">
	<a class="gallery-link" href="${t}">
		<img 
			class="images" 
			src="${a}"
			alt="${r}"
			/>
	
	<ul class="detail-list">
	<li class="detail-item"><span class="bold">Likes</span> ${o}</li>
	<li class="detail-item"><span class="bold">Views</span> ${g}</li>
	<li class="detail-item"><span class="bold">Comments</span> ${y}</li>
	<li class="detail-item"><span class="bold">Downloads</span> ${h}</li>
	</ul>
</a></li>`).join("");return q.insertAdjacentHTML("beforeend",n),v.refresh(),u(),S.classList.remove("hidden"),e}}).catch(e=>{i.error({title:"",position:"topRight",message:"Incorrect request!"})})}const v=new L(".gallery a",{captionsData:"alt",captionDelay:250}),p=document.querySelector(".search-form"),f=document.querySelector(".gallery"),d=document.querySelector(".load-btn");p.addEventListener("submit",P);let l=1,c;const $=33;function P(e){c=p.search.value.trim(),e.preventDefault(),f.innerHTML=null,c?m():(d.classList.add("hidden"),i.error({title:"",position:"topRight",message:"Please enter your request."}))}function w(){const e=document.createElement("div");e.className="loader",f.appendChild(e)}function u(){const e=document.querySelector(".loader");e&&e.remove()}function O(){l+=1;try{l>=$?(i.info({title:"",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),d.classList.add("hidden")):m()}catch(e){console.log(e)}}d.addEventListener("click",O);
//# sourceMappingURL=commonHelpers.js.map
