import{S as b,i as a}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function c(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=c(t);fetch(t.href,r)}})();async function q(){const e="https://pixabay.com/api/";return(await axios.get(e,{params:{key:"42513462-e11c37811c4211ba54194476f",q:d,lang:"en",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:l}})).data}const S=document.querySelector(".gallery"),v=document.querySelector(".load-btn");let p;function g(){P(),q().then(e=>{p=e.totalHits/e.hits.length;const s=e.hits;if(e.totalHits===0)a.error({title:"",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),m(),v.classList.add("hidden");else{const c=s.map(({webformatURL:n,largeImageURL:t,tags:r,likes:o,views:f,comments:y,downloads:L})=>`<li class="gallery-item">
	<a class="gallery-link" href="${t}">
		<img 
			class="images" 
			src="${n}"
			alt="${r}"
			/>
	
	<ul class="detail-list">
	<li class="detail-item"><span class="bold">Likes</span> ${o}</li>
	<li class="detail-item"><span class="bold">Views</span> ${f}</li>
	<li class="detail-item"><span class="bold">Comments</span> ${y}</li>
	<li class="detail-item"><span class="bold">Downloads</span> ${L}</li>
	</ul>
</a></li>`).join("");return S.insertAdjacentHTML("beforeend",c),$.refresh(),m(),e}}).catch(e=>{a.error({title:"",position:"topRight",message:"Incorrect request!"})})}const $=new b(".gallery a",{captionsData:"alt",captionDelay:250}),h=document.querySelector(".search-form"),u=document.querySelector(".gallery"),i=document.querySelector(".load-btn");h.addEventListener("submit",w);let l=1,d;function w(e){l=1,d=h.search.value.trim(),e.preventDefault(),u.innerHTML=null,d?(g(),i.classList.remove("hidden")):(i.classList.add("hidden"),a.error({title:"",position:"topRight",message:"Please enter your request."}))}function P(){const e=document.createElement("div");e.className="loader",u.appendChild(e)}function m(){const e=document.querySelector(".loader");e&&e.remove()}i.addEventListener("click",e=>{l+=1;try{g(),i.classList.remove("hidden"),setTimeout(()=>{R()},500),l>=p&&(a.info({title:"",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),i.classList.add("hidden"))}catch{a.error({title:"",position:"topRight",message:"Error"})}});function R(){const e=u.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:3*e,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
