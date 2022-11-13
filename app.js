// to be continued. it's too hard for me so i need to learn and improve my basic knowledge first


import { menuArray } from "./data.js"

const itemMenu = document.getElementById("item-menu")
const order = [] // stores the id of the order


// document.addEventListener('click', function(e){
//   if(e.target.dataset.add){
//     addOrder(e.target.dataset.add)
//   }
// })


// function addOrder(itemId) {
//   // itemId = data attr(id of the item) of the click
//   if(!order.includes(itemId)){
//     order.push(itemId)
//   }
//   else {
//     menuArray.forEach(function(item){
//       if(item.id === itemId){
//         item.quantity++
//       }
//     })
//   }
// }

function getMenuHtml() {
  let menuHtml = ''
  menuArray.forEach(function(item){
    menuHtml += `
      <div id="${item.id}" class="item-container">
        <div class="item-emoji">${item.emoji}</div>
        <div class="item-info">
          <p class="item-name">${item.name}</p>
          <p class="item-desc">${item.ingredients}</p>
          <p class="item-price">$${item.price}</p>
        </div>
        <button data-add="${item.id}" class="add-btn">+</button>
      </div>
    `
    
  })
  

  return menuHtml
}


function render() {
  itemMenu.innerHTML = getMenuHtml()
}
render()