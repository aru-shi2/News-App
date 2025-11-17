import {api_key} from "./config.js";

document.getElementById("click").addEventListener("click",handleClick);

function handleClick() {
    const search=async () => {
      let txt=document.querySelector("input").value
      let b=await fetch(`https://newsapi.org/v2/everything?q=${txt}&apiKey=${api_key}`)
      const result=await b.json()

      document.querySelector("ul").innerHTML=""

      const parent=document.querySelector("ul")

    result.articles.forEach(e => {
      let el=document.createElement("li")
      let el1=document.createElement("img")
      let el2=document.createElement("h1")
      let el3=document.createElement("p")

    el1.src=e.urlToImage
    el2.textContent=e.title
    el3.textContent=e.description

    el.appendChild(el1)
    el.appendChild(el2)
    el.appendChild(el3)

    parent.appendChild(el);
    });
}
     search()
  }

  const data=async() => {
    let a=await fetch(`https://newsapi.org/v2/everything?q=news&apiKey=${api_key}`)
    const res=await a.json()
       
    const parent=document.querySelector("ul")

    res.articles.forEach(e => {
      let el=document.createElement("li")
      let el1=document.createElement("img")
      let el2=document.createElement("h1")
      let el3=document.createElement("p")

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
