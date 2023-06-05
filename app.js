let left_btn = document.getElementsByClassName("arrow1 bi bi-chevron-left")[0]
let right_btn = document.getElementsByClassName("arrow2 bi bi-chevron-right")[0]
let cards = document.getElementsByClassName("cards")[0]
left_btn.addEventListener("click",()=>{
    cards.scrollLeft -= 140
})
right_btn.addEventListener("click",()=>{

    cards.scrollLeft += 140
})
let url = "movie.json"

fetch(url)
.then(response => response.json())
.then(data => {
data.forEach((ele,i) => {
    let{name,imdb,date,sposter,bposter,genre,url} = ele
    
});

})