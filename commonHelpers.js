import{S as q,i}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();async function S(){const e="https://pixabay.com/api/";return(await axios.get(e,{params:{key:"42513462-e11c37811c4211ba54194476f",q:d,lang:"en",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:l}})).data}const v=document.querySelector(".gallery"),m=document.querySelector(".load-btn");let g;function h(){P(),S().then(e=>{g=e.totalHits/e.hits.length;const s=e.hits;if(e.totalHits===0)i.error({title:"",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),p(),m.classList.add("hidden");else{const n=s.map(({webformatURL:a,largeImageURL:t,tags:r,likes:o,views:y,comments:L,downloads:b})=>`<li class="gallery-item">
	<a class="gallery-link" href="${t}">
		<img 
			class="images" 
			src="${a}"
			alt="${r}"
			/>
	
	<ul class="detail-list">
	<li class="detail-item"><span class="bold">Likes</span> ${o}</li>
	<li class="detail-item"><span class="bold">Views</span> ${y}</li>
	<li class="detail-item"><span class="bold">Comments</span> ${L}</li>
	<li class="detail-item"><span class="bold">Downloads</span> ${b}</li>
	</ul>
</a></li>`).join("");return v.insertAdjacentHTML("beforeend",n),$.refresh(),p(),m.classList.remove("hidden"),e}}).catch(e=>{i.error({title:"",position:"topRight",message:"Incorrect request!"})})}const $=new q(".gallery a",{captionsData:"alt",captionDelay:250}),f=document.querySelector(".search-form"),u=document.querySelector(".gallery"),c=document.querySelector(".load-btn");f.addEventListener("submit",w);let l=1,d;function w(e){l=1,d=f.search.value.trim(),e.preventDefault(),u.innerHTML=null,d?h():(c.classList.add("hidden"),i.error({title:"",position:"topRight",message:"Please enter your request."}))}function P(){const e=document.createElement("div");e.className="loader",u.appendChild(e)}function p(){const e=document.querySelector(".loader");e&&e.remove()}c.addEventListener("click",e=>{l+=1;try{l>=g?(i.info({title:"",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),c.classList.add("hidden")):(h(),setTimeout(()=>{R()},500))}catch{i.error({title:"",position:"topRight",message:"Error"})}});function R(){const e=u.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:3*e,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
