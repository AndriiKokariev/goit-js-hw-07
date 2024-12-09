const categoriesListItem = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesListItem.length}`);

const subtitle = document.querySelectorAll("h2");
// const list = document.querySelectorAll(".item ul");
for (let i = 0; i < subtitle.length; i++) {
  console.log(`Category: ${subtitle[i].textContent}`);
  console.log(
    `Elements: ${categoriesListItem[i].querySelectorAll("ul li").length}`
  );
}
