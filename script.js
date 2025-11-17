import {api_key} from "./config.js";

document.getElementById("click").addEventListener("click",handleClick);

  const data=async() => {
    let a=await fetch(`https://newsapi.org/v2/everything?q=news&apiKey=${api_key}`)
    const res=await a.json()
    console.log(res)

    const parent=document.querySelector("ul")

    res.articles.forEach(e => {
      const el=document.createElement("li")
      const el1=document.createElement("img")
      const el2=document.createElement("h1")
      const el3=document.createElement("p")

    el1.src=e.urlToImage
    el2.textContent=e.title
    el3.textContent=e.description

    el.appendChild(el1)
    el.appendChild(el2)
    el.appendChild(el3)

    parent.appendChild(el);
    });
    
  }
  data()

  function handleClick() {
    fg
  }