(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}})();const n=document.getElementById("hamburger"),i=document.getElementById("mobile-menu");n.addEventListener("click",()=>{i.classList.toggle("hidden")});new Swiper(".mySwiper",{pagination:{el:".swiper-pagination",clickable:!0},slidesPerView:1,spaceBetween:24,centeredSlides:!1,breakpoints:{1024:{slidesPerView:2,spaceBetween:64,grabCursor:!0}}});document.getElementById("osobowe-tab").addEventListener("click",function(){document.getElementById("osobowe").classList.remove("hidden"),document.getElementById("dostawcze").classList.add("hidden"),this.classList.add("text-blue","border-blue","font-semibold"),this.classList.remove("text-dark","border-transparent"),document.getElementById("dostawcze-tab").classList.remove("text-blue","border-blue","font-semibold"),document.getElementById("dostawcze-tab").classList.add("text-dark","border-transparent")});document.getElementById("dostawcze-tab").addEventListener("click",function(){document.getElementById("dostawcze").classList.remove("hidden"),document.getElementById("osobowe").classList.add("hidden"),this.classList.add("text-blue","border-blue","font-semibold"),this.classList.remove("text-dark","border-transparent"),document.getElementById("osobowe-tab").classList.remove("text-blue","border-blue","font-semibold"),document.getElementById("osobowe-tab").classList.add("text-dark","border-transparent")});
