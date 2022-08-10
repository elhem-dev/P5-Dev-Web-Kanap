
/**  <a href="./product.html?id=42">
<article>
  <img src=".../product01.jpg" alt="Lorem ipsum dolor sit amet, Kanap name1">
  <h3 class="productName">Kanap name1</h3>
  <p class="productDescription">Dis enim malesuada risus sapien gravida nulla nisl arcu. Dis enim malesuada risus sapien gravida nulla nisl arcu.</p>
</article>
</a> **/

const url ='http://localhost:3000/api/products'
fetch(url)
.then((res)=>res.json())
.then((data)=>{
    console.log(data)
    return addProducts(data)
})
function addProducts(product)
{
    console.log(product)
    product.forEach((kanap) => {
      
        
  
const { id, imageUrl, altTxt, name, description } = kanap
const elementA = makeElement(id)
const article = document.createElement("article")
const image = makeImage(imageUrl, altTxt)
const h3 = makeH3 (name)
const p = makeParagraphe (description)
appendElementsToArticle(article, image, h3, p)
appendArticleToElementA(elementA, article)
})
}
function appendElementsToArticle (article, image, h3, p){
    article.appendChild(image)
    article.appendChild(h3)
    article.appendChild(p)
}
function makeElement(id){
    const elementA = document.createElement("a")
    elementA.href = "./product.html?id=+id"
    return elementA
}

 function appendArticleToElementA(elementA, article)
 {
    const items = document.querySelector("#items")
    if (items != null){
        items.appendChild(elementA)
        items.appendChild(article)
        console.log("element ajoute a items" ,items)
        }
 }

function makeImage(imageUrl, altTxt){
const image = document.createElement("img")
image.src = imageUrl
image.alt = altTxt
return image
}

 function makeH3(name){
    const h3 = document.createElement("h3")
    h3.textContent = name
    h3.classList.add("productName")
    return (h3)
}
function makeParagraphe(description){
    const p = document.createElement("p")
    p.textContent = description
    p.classList.add("productDescription")
    return p
}
   


