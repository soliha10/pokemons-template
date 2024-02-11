
const elPokeList = document.querySelector(".js-pokemons-list");
const pokeTemplate = document.querySelector(".js-poke-template").content;
// console.log(pokeTemplate);
const itemFragment = document.createDocumentFragment();

function renderPoke(arr, node) {
  for (poke of arr) {
    const templateClone = pokeTemplate.cloneNode(true);

    templateClone.querySelector(".poke-img").src = poke.img;
    templateClone.querySelector(".poke-img").alt = poke.name;
    templateClone.querySelector(".poke-name").textContent = poke.name;
    templateClone.querySelector(".poke-types").textContent = poke.type.join(" ");

    itemFragment.appendChild(templateClone);

  }
  node.appendChild(itemFragment)
}
renderPoke(pokemons, elPokeList);




// for (var poke of slicedPokens) {



//   // Creating elements

//   var newItem = document.createElement("li");
//   var newItemImg = document.createElement("img");
//   var newItemPokeName = document.createElement("strong");
//   var newWrapperDesc = document.createElement("div");
//   var newItemNumber = document.createElement("span");
//   var newItemTime = document.createElement("time");
//   var newItemTypeDesc = document.createElement("p");

//   newWrapperDesc.append(newItemNumber, newItemTime);

//   newItemPokeName.textContent = poke.name;
//   newItemNumber.textContent = poke.num;
//   newItemImg.src = poke.img;
//   newItemImg.width = "150";
//   newItemImg.height = "130";
//   newItemImg.alt = poke.name + " pokemon";
//   newItemTime.textContent = poke.spawn_time;
//   newItemTime.dateTime = "2024-01-18 " + poke.spawn_time;
//   newItemTypeDesc.textContent = poke.type.join(", ");

//   newItem.classList.add("p-3", "card", "pokemon-item");
//   newItemPokeName.classList.add("mb-3")
//   newItem.style.width = "18rem";

//   newItem.style.border = "1px solid #ddd";
//   newItem.style.borderRadius = "8px";
//   newItem.style.margin = "10px";
//   newItem.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
//   newItem.style.transition = "box-shadow 0.3s ease";

//   newItemImg.style.borderRadius = "8px 8px 0 0";
//   newItemImg.style.margin = "0 auto";
//   newItemPokeName.style.fontSize = "1.2em";
//   newItemPokeName.style.color = "blue";

//   newItemNumber.style.fontWeight = "bold";

//   newItemTime.classList.add("bg-dark", "text-white", "d-inline");
//   newItemTime.style.display = "inline"
//   newItemTime.style.padding = "4px";
//   newItemTime.style.borderRadius = "4px";

//   newItemTypeDesc.style.marginTop = "8px";

//   newItem.addEventListener("mouseenter", function (evt) {
//     newItem.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
//     newItem.style.backgroundColor = "black";
//   })
//   newItem.append(newItemImg, newItemPokeName, newItemNumber, newItemTime, newItemTypeDesc);


//   elPokeList.appendChild(newItem);

// };


