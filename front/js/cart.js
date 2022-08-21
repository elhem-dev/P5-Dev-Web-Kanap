const cart = []
retriveItemsFromCache()
cart.forEach((item) => displayItem(item))
function retriveItemsFromCache(){
    const numberOfItems = localStorage.length
    for (let i =0; i < numberOfItems; i++){
        const item = localStorage.getItem(localStorage.key(i))
        const itemObject = JSON.parse(item)
        cart.push(itemObject)
    }
}
function displayItem(item){
    const article = makeArticle (item)
    const imageDiv = makeImageDiv (item)
    article.appendChild (imageDiv)

  makeCartContent(item)
   const cartItemContent = makeCartContent(item)
   article.appendChild(cartItemContent) 
   displayArticle(article)
}
function makeCartContent (item){
    const cartItemContent = document.createElement("div")
    const description = makeDescription(item)
    const settings = makeSettings()
    cartItemContent.classList.add("cart_item_content")
    cartItemContent.appendChild(description)
   // cartItemContent.appendChild(settings)
    return cartItemContent
}
function makeSettings(item) {
    return ""
}
function makeDescription(item){
    const description = document.createElement("div")
  description.classList.add("cart__item__content__description")

  const h2 = document.createElement("h2")
  h2.textContent = item.name
  const p = document.createElement("p")
  p.textContent = item.color
  const p2 = document.createElement("p")
  p2.textContent = item.price + " €"

  description.appendChild(h2)
  description.appendChild(p)
  description.appendChild(p2)
  return description
}
function displayArticle(article) {
    document.querySelector("#cart__items").appendChild(article)
  }
  function makeArticle(item) {
    const article = document.createElement("article")
    article.classList.add("card__item")
    article.dataset.id = item.id
    article.dataset.color = item.color
    return article
  }
  function makeImageDiv(item) {
    const div = document.createElement("div")
    div.classList.add("cart__item__img")
  
    const image = document.createElement("img")
    image.src = item.imageUrl
    image.alt = item.altTxt
    div.appendChild(image)
    return div
  }
  