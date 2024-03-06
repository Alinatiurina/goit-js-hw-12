import{S as b,i as a}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function l(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=l(t);fetch(t.href,s)}})();async function q(){const e="https://pixabay.com/api/";return(await axios.get(e,{params:{key:"42513462-e11c37811c4211ba54194476f",q:d,lang:"en",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:n}})).data}const S=document.querySelector(".gallery"),m=document.querySelector(".load-btn");function g(){P(),q().then(e=>{const r=e.hits;if(e.totalHits===0)a.error({title:"",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),p(),m.classList.add("hidden");else{const l=r.map(({webformatURL:i,largeImageURL:t,tags:s,likes:o,views:h,comments:y,downloads:L})=>`<li class="gallery-item">
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
</a></li>`).join("");return S.insertAdjacentHTML("beforeend",l),v.refresh(),p(),m.classList.remove("hidden"),e}}).catch(e=>{a.error({title:"",position:"topRight",message:"Incorrect request!"})})}const v=new b(".gallery a",{captionsData:"alt",captionDelay:250}),f=document.querySelector(".search-form"),u=document.querySelector(".gallery"),c=document.querySelector(".load-btn");f.addEventListener("submit",w);let n=1,d;const $=33;function w(e){n=1,d=f.search.value.trim(),e.preventDefault(),u.innerHTML=null,d?g():(c.classList.add("hidden"),a.error({title:"",position:"topRight",message:"Please enter your request."}))}function P(){const e=document.createElement("div");e.className="loader",u.appendChild(e)}function p(){const e=document.querySelector(".loader");e&&e.remove()}c.addEventListener("click",e=>{n+=1;try{n>=$?(a.info({title:"",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),c.classList.add("hidden")):(g(),setTimeout(()=>{O()},500))}catch(r){console.log(r)}});function O(){const e=u.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:3*e,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
