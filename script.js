import {api_key} from "./config.js";

document.getElementById("click").addEventListener("click",handleClick);
function handleClick() {
  const data=async() => {
    let a=await fetch(`https://newsapi.org/v2/everything?q=news&apiKey=${api_key}`)
    const res=await a.json()
    console.log(res)

    res.articles.forEach(e => {
        const el1=document.createElement("img")
    const el2=document.createElement("h1")
    const el3=document.createElement("p")
    el1.src=e.urlToImage
    el2.textContent=e.title
    el3.textContent=e.description
    const parent=document.querySelector("li")
    parent.appendChild(el1)
    parent.appendChild(el2)
    parent.appendChild(el3)
    });

  }
  data()
} 