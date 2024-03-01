import{S as f,i as c}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();function p(){let s=`https://pixabay.com/api/?key=42513462-e11c37811c4211ba54194476f&q=${l}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(s).then(a=>{if(!a.ok)throw new Error("Image error!");return a.json()}).catch(a=>{alert("Incorrect request!")})}const h=document.querySelector(".gallery");function g(){$(),p().then(t=>{const o=t.hits.slice(0,9);t.hits.length===0&&c.error({title:"",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),h.innerHTML=o.map(({webformatURL:n,largeImageURL:i,tags:e,likes:r,views:s,comments:a,downloads:d})=>`<li class="gallery-item">
	<a class="gallery-link" href="${i}">
		<img 
			class="images" 
			src="${n}"
			alt="${e}"
			/>
	
	<ul class="detail-list">
	<li class="detail-item"><span class="bold">Likes</span> ${r}</li>
	<li class="detail-item"><span class="bold">Views</span> ${s}</li>
	<li class="detail-item"><span class="bold">Comments</span> ${a}</li>
	<li class="detail-item"><span class="bold">Downloads</span> ${d}</li>
	</ul>
</a></li>`).join("")}).then(t=>(y.refresh(),b(),t))}const y=new f(".gallery a",{captionsData:"alt",captionDelay:250}),u=document.querySelector(".search-form"),m=document.querySelector(".gallery");u.addEventListener("submit",L);let l;function L(t){l=u.search.value.trim(),t.preventDefault(),m.innerHTML="",l===""?c.error({title:"",position:"topRight",message:"Please enter your request."}):g()}function $(){const t=document.createElement("div");t.className="loader",m.appendChild(t)}function b(){const t=document.querySelector(".loader");t&&t.remove()}
//# sourceMappingURL=commonHelpers.js.map
