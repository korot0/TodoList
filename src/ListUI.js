import { ListManager } from "./ListManager";

export const renderCards = () => {
  const cardContainer = document.querySelector("#card-container");
  const lists = ListManager.getLists();
  lists.forEach((list) => {
    const card = createCard(list.name);
    cardContainer.appendChild(card);
  });
};

const createCard = (listName) => {
  const div = document.createElement("div");
  div.classList.add("card");

  const h5 = document.createElement("h5");
  h5.textContent = listName;
  h5.classList.add("card-header");

  const ul = document.createElement("ul");
  ul.classList.add("list-group", "list-group-flush");

  div.appendChild(h5);
  div.appendChild(ul);

  return div;
};
