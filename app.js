import { menuArray } from "./data.js"

const mainMenu = document.getElementById("main-menu")


function render() {
  let renderHtml = ''
  menuArray.forEach(function(item){
    renderHtml += `
      <div class="item-container">
        <div class="item-emoji">${item.emoji}</div>
        <div class="item-info">
          <p class="item-name">${item.name}</p>
          <p class="item-desc">${item.ingredients}</p>
          <p class="item-price">$${item.price}</p>
        </div>
        <button class="add-btn">+</button>
      </div>
    `
  })
  mainMenu.innerHTML = renderHtml
}

render()