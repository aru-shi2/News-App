import {api_key} from "./config.js";

// document.getElementById("click").addEventListener("click",handleClick);
document.getElementById("sp1").addEventListener("click",handleFirst);
document.getElementById("sp2").addEventListener("click",handleSecond);
document.getElementById("sp3").addEventListener("click",handleThird);
// document.getElementById("home").addEventListener("click",handleHome);

function showData(articles) {
    const parent=document.querySelector("ul")
    document.querySelector("ul").innerHTML=""

    articles.forEach(e => {
      let el=document.createElement("li")
      let el1=document.createElement("img")
      let el2=document.createElement("h1")
      let el3=document.createElement("p")
      let btn=document.createElement("button")

    el1.src=e.image;
    el1.onerror=()=>{
      el1.src="./im.jpg";
    }
    el2.textContent=e.title
    el3.textContent=e.description
    btn.textContent="Read More"

    el.appendChild(el1)
    el.appendChild(el2)
    el.appendChild(el3)
    el.appendChild(btn)

    parent.appendChild(el);

    btn.addEventListener("click",()=>{
      window.open(e.url,"_blank")
    })
    });
}

// function handleClick() {
//     const search=async () => {
//       let txt=document.querySelector("input").value
//       let b=await fetch(`https://api.currentsapi.services/v1/search?keywords=${txt}&apiKey=${api_key}`)
//       const result=await b.json()
//       showData(result.articles)
// }
//      search()
//   }

  // const data=async() => {
  //   let a=await fetch(`https://api.currentsapi.services/v1/latest-news?apiKey=${api_key}`)
  //   const res=await a.json()
  //   console.log(res)

  //   showData(res.news)
  // }
  // data() 

function handleFirst() {
    const en=async () => {
      let b=await fetch(`https://api.currentsapi.services/v1/search?category=entertainment&apiKey=${api_key}`)
      const result=await b.json()
      console.log(result)

     showData(result.news)
}
    en()
  }

function handleSecond() {
    const tech=async () => {
      let b=await fetch(`https://api.currentsapi.services/v1/search?category=technology&apiKey=${api_key}`)
      const result=await b.json()
      console.log(result)

      showData(result.news)
    }
    tech()
  }  


  function handleThird() {
    const sports=async () => {
      let b=await fetch(`https://api.currentsapi.services/v1/search?category=sports&apiKey=${api_key}`)
      const result=await b.json()
      console.log(result)

      showData(result.news)
    }
    sports()
  }  


//   function handleHome() {
//     const d=async() => {
//     let a=await fetch(`https://api.currentsapi.services/v1/latest-news?apiKey=${api_key}`)
//     const res=await a.json()
//     console.log(res)

//     showData(res.articles)
//   }
//   d() 
//   }